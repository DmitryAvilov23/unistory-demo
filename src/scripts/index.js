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
// Модули
import test from "./modules/test";

import { Slider } from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
  test();
  //Sliders
  const successSlider = new Slider(
    "slides-wrapper",
    ".slider__slide",
    document.getElementById("btn-prev"),
    document.getElementById("btn-next")
  );
});
