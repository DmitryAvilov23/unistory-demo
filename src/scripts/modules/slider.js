export class Slider {
  sliderCounter = 0;

  constructor(slidesWrapperId, slidesClass, btnPrev, btnNext) {
    this.slidesWrapper = document.getElementById(slidesWrapperId);
    this.slidesClass = slidesClass;

    this.slides = document.querySelectorAll(slidesClass);
    this.btnPrev = btnPrev;
    this.btnNext = btnNext;

    this.refreshSliderCounterValue(this.slides.length).then(() => {
      this.slidesWrapper.style.cssText += `
          transition: 0.4s
        `;
    });

    this.createBindings();
    this.createInfinityToNext();
    this.createInfinityToPrev();
    this.createEventListeners();

    this.createMirror();
  }

  createMirror() {
    const slides = document.querySelectorAll(this.slidesClass);

    console.log(slides.length);

    slides.forEach((item) => {
      let mirroredSlide = item.cloneNode(true);

      mirroredSlide.style.cssText = `
        transform: scale(1, -1) translateY(-120%);
        width: 100%;
        opacity: 0.3;
        height: 50px;
        position: absolute;
        bottom: 0;
        left: 0;
      `;

      item.style.position = "relative";
      item.innerHTML += mirroredSlide.outerHTML;
    });
  }

  async changeSlideToNext() {
    await this.checkSlidesLength("next");

    this.sliderCounter++;
    this.moveSliderWrapper();
  }

  async changeSlideToPrev() {
    await this.checkSlidesLength("prev");

    this.sliderCounter--;
    this.moveSliderWrapper();
  }

  async checkSlidesLength(way) {
    const actualSlidesLength = document.querySelectorAll(
      `${this.slidesClass} > ${this.slidesClass}`
    ).length;

    const slidesGroupLength = 4;

    console.log(this.sliderCounter, actualSlidesLength);

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
    } else {
      if (this.sliderCounter > actualSlidesLength - slidesGroupLength) {
        console.log(1);
        this.createInfinityToNext();
      }
    }
  }

  createInfinityToNext() {
    const slides = [];

    this.slides.forEach((item) => {
      const slide = item;
      slides.push(item);
    });

    slides.forEach((item) => {
      const slide = item;
      console.log(slide);

      this.slidesWrapper.insertAdjacentHTML("beforeend", slide.outerHTML);
    });
  }

  createInfinityToPrev() {
    const slides = [];

    this.slides.forEach((item) => {
      const slide = item;
      slides.push(item);
    });

    slides.reverse().forEach((item) => {
      const slide = item;

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
    const slideWidth = +this.slides[0]?.getBoundingClientRect().width + 4;

    this.slidesWrapper.style.cssText += `
    transform: translateX(-${this.sliderCounter * slideWidth - 30}px)
    `;
  }

  createEventListeners() {
    this.btnPrev.addEventListener("click", this.changeSlideToPrev);
    this.btnNext.addEventListener("click", this.changeSlideToNext);
  }

  createBindings() {
    this.changeSlideToNext = this.changeSlideToNext.bind(this);
    this.changeSlideToPrev = this.changeSlideToPrev.bind(this);
    this.createInfinityToNext = this.createInfinityToNext.bind(this);
    this.createInfinityToPrev = this.createInfinityToPrev.bind(this);
    this.moveSliderWrapper = this.moveSliderWrapper.bind(this);
  }
}
