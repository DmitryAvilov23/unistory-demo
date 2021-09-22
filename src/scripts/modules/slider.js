export class Slider {
  sliderCounter = 0;
  posInit = 0;
  posX1 = 0;
  posX2 = 0;
  posFinal = 0;
  posThreshold = 0;

  constructor(options) {
    this.slidesWrapper = document.getElementById(options.slidesWrapperId);
    this.slidesWrapperId = options.slidesWrapperId;
    this.slidesClass = options.slidesClass;
    this.activeClass = options.activeClass;
    this.spaceBetweenSlides = options.spaceBetweenSlides;

    this.slides = document.querySelectorAll(options.slidesClass);
    this.btnPrev = options.btnPrev;
    this.btnNext = options.btnNext;

    this.createSpaceBetweenSlides(options.spaceBetweenSlides);

    this.posThreshold = +this.slides[0]?.getBoundingClientRect().width * 0.35;

    this.refreshSliderCounterValue(this.slides.length).then(() => {
      this.slidesWrapper.style.cssText += `
          transition: 0.4s;
        `;
    });

    this.createBindings();
    this.createInfinityToNext();
    this.createInfinityToPrev();
    this.createEventListeners();

    this.createMirror();
    this.setActiveClassToActiveSlide();
  }

  createSpaceBetweenSlides(spaceValue) {
    this.slides.forEach((slide) => {
      slide.style.marginRight = spaceValue + "px";
    });
  }

  createMirror() {
    const slides = document.querySelectorAll(this.slidesClass);

    slides.forEach((item) => {
      const mirroredSlide = item.cloneNode(true);

      mirroredSlide.style.cssText = `
        transform: scale(1, -1);
        margin-top: 15px;
        width: 100%;
        opacity: 0.3;
        height: 50px;
      `;

      item.style.position = "relative";
      item.innerHTML += mirroredSlide.outerHTML;
    });
  }

  async changeSlideToNext() {
    await this.checkSlidesLength("next");

    this.sliderCounter++;
    this.moveSliderWrapper();

    this.setActiveClassToActiveSlide();
  }

  async changeSlideToPrev() {
    await this.checkSlidesLength("prev");

    this.sliderCounter--;
    this.moveSliderWrapper();

    this.setActiveClassToActiveSlide();
  }

  async checkSlidesLength(way) {
    const actualSlidesLength = document.querySelectorAll(
      `${this.slidesClass} > ${this.slidesClass}`
    ).length;

    const slidesGroupLength = this.slides.length;

    if (way === "prev") {
      if (this.sliderCounter < slidesGroupLength) {
        this.createInfinityToPrev();

        await this.refreshSliderCounterValue(
          this.sliderCounter + slidesGroupLength
        );

        this.slidesWrapper.style.cssText += `
              transition: 0.4s
            `;
      }

      return;
    }

    if (this.sliderCounter > actualSlidesLength - slidesGroupLength) {
      this.createInfinityToNext();
    }
  }

  setActiveClassToActiveSlide() {
    const actualSlidesList = [
      ...document.querySelectorAll(
        "#" + this.slidesWrapperId + ">" + this.slidesClass
      ),
    ];

    this.removeActiveClasses(actualSlidesList);

    actualSlidesList[this.sliderCounter].classList.add(
      this.activeClass.slice(1)
    );
  }

  removeActiveClasses(slidesList) {
    slidesList.forEach((slide) => {
      slide.classList.remove(this.activeClass.slice(1));
    });
  }

  createInfinityToNext() {
    this.slides.forEach((item) => {
      this.slidesWrapper.insertAdjacentHTML("beforeend", item.outerHTML);
    });
  }

  createInfinityToPrev() {
    const slides = [...this.slides].reverse();

    slides.forEach((slide) => {
      this.slidesWrapper.insertAdjacentHTML("afterbegin", slide.outerHTML);
    });
  }

  async refreshSliderCounterValue(value) {
    return await new Promise((resolve) => {
      this.slidesWrapper.style.transition = "unset";
      this.sliderCounter = value;

      this.moveSliderWrapper();

      setTimeout(() => resolve(), 0);
    });
  }

  moveSliderWrapper() {
    const slideWidth =
      +this.slides[0]?.getBoundingClientRect().width + this.spaceBetweenSlides;

    const sliderWrapperWidth = +this.slidesWrapper.getBoundingClientRect()
      .width;

    this.slidesWrapper.style.cssText += `
    transform: translateX(-${this.sliderCounter * slideWidth -
      sliderWrapperWidth / 2 +
      slideWidth / 2 -
      this.spaceBetweenSlides / 2}px)
    `;
  }

  createEventListeners(event) {
    this.btnPrev.addEventListener("click", this.changeSlideToPrev);
    this.btnNext.addEventListener("click", this.changeSlideToNext);

    this.slidesWrapper.parentNode.addEventListener(
      "resize",
      this.moveSliderWrapper
    );

    this.slidesWrapper.addEventListener("mousedown", this.swipeStart);
    this.slidesWrapper.addEventListener("touchstart", this.swipeStart);

    this.createEventListenersForArrowKeys(event);
  }

  createEventListenersForArrowKeys() {
    const onMouseEnter = (event) => {
      if (event.key === "ArrowRight") this.changeSlideToNext();
      if (event.key === "ArrowLeft") this.changeSlideToPrev();
    };

    this.slidesWrapper.addEventListener("mouseenter", () => {
      document.addEventListener("keydown", onMouseEnter);
    });

    this.slidesWrapper.addEventListener("mouseleave", () => {
      document.removeEventListener("keydown", onMouseEnter);
    });
  }

  swipeStart(event) {
    this.posInit = this.posX1 = event.clientX
      ? event.clientX
      : event.touches[0].clientX;

    this.slidesWrapper.style.cssText += `
      cursor: grab;
      transition: unset;
    `;

    document.addEventListener("touchmove", this.swipeAction);
    document.addEventListener("touchend", this.swipeEnd);
    document.addEventListener("mousemove", this.swipeAction);
    document.addEventListener("mouseup", this.swipeEnd);
  }

  swipeAction(event) {
    const trfRegExp = /[-0-9.]+(?=px)/,
      transform = +this.slidesWrapper.style.transform.match(trfRegExp)[0];

    const cursorPosition = event.clientX
      ? event.clientX
      : event.touches[0].clientX;

    this.posX2 = this.posX1 - cursorPosition;
    this.posX1 = cursorPosition;

    this.slidesWrapper.style.transform = `translateX(${transform -
      this.posX2}px)`;
  }

  swipeEnd() {
    this.slidesWrapper.style.cssText += `
      transition: 0.4s;
      cursor: default;
    `;

    this.posFinal = this.posInit - this.posX1;

    if (Math.abs(this.posFinal) > this.posThreshold) {
      if (this.posInit < this.posX1) {
        this.changeSlideToPrev();
      } else if (this.posInit > this.posX1) {
        this.changeSlideToNext();
      }
    }

    if (this.posInit !== this.posX1) {
      this.moveSliderWrapper();
    }

    document.removeEventListener("touchmove", this.swipeAction);
    document.removeEventListener("mousemove", this.swipeAction);
    document.removeEventListener("touchend", this.swipeEnd);
    document.removeEventListener("mouseup", this.swipeEnd);
  }

  createBindings() {
    this.changeSlideToNext = this.changeSlideToNext.bind(this);
    this.changeSlideToPrev = this.changeSlideToPrev.bind(this);
    this.createInfinityToNext = this.createInfinityToNext.bind(this);
    this.setActiveClassToActiveSlide = this.setActiveClassToActiveSlide.bind(
      this
    );
    this.createInfinityToPrev = this.createInfinityToPrev.bind(this);
    this.swipeStart = this.swipeStart.bind(this);
    this.swipeAction = this.swipeAction.bind(this);
    this.swipeEnd = this.swipeEnd.bind(this);
    this.createSpaceBetweenSlides = this.createSpaceBetweenSlides.bind(this);
    this.removeActiveClasses = this.removeActiveClasses.bind(this);
    this.moveSliderWrapper = this.moveSliderWrapper.bind(this);
  }
}
