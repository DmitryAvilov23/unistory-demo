import "../babel";
import "../sass/style.sass";
// Картинки
import Sprite from "../img/sprite.svg";
import HeroBanner from "../img/hero/hero-banner.svg";
import Upwork from "../img/hero/upwork.svg";
import Step1 from "../img/steps/step1.svg";
import Step2 from "../img/steps/step2.svg";
import Step3 from "../img/steps/step3.svg";
import Step4 from "../img/steps/step4.svg";
import StepBg from "../img/steps/step-bg.svg";
import MacbookTop from "../img/success/macbook-top.png";
import Million1 from "../img/success/million1.png";
import Million2 from "../img/success/million2.png";
import Million3 from "../img/success/million3.png";
import Million4 from "../img/success/million4.png";
// Модули
import test from "./modules/test";

import { Slider } from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
  test();
  //Sliders
  const successSlider = new Slider({
    slidesWrapperId: "slides-wrapper",
    slidesClass: ".slider__slide",
    activeClass: ".slider__slide--active",
    spaceBetweenSlides: 8,
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
  });
});
