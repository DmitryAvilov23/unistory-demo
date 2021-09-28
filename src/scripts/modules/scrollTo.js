export class ScrollTo {
  constructor(wrapper) {
    this.wrapper = wrapper;

    this.createBindings();
    this.createScrollIntoView();
  }

  createScrollIntoView() {
    const anchorlinks = this.wrapper.querySelectorAll("a[href^='#']");

    anchorlinks.forEach((link) => {
      link.addEventListener("click", () => this.scrollIntoView(link));
    });
  }

  scrollIntoView(link) {
    event.preventDefault();

    const anchorLink = link.getAttribute("href");

    if (!anchorLink || anchorLink === "#") {
      return;
    }

    const HTMLElem = document.getElementById(anchorLink.slice(1));

    if (!HTMLElem) {
      return;
    }

    HTMLElem.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  createBindings() {
    this.createScrollIntoView = this.createScrollIntoView.bind(this);
  }
}
