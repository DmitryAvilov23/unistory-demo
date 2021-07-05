import SwiperCore, { Navigation } from "swiper/core";

// Install modules
SwiperCore.use([Navigation]);

// const { send } = require("emailjs-com")

const name = document.querySelector(".name");
const email = document.querySelector(".email");
const description = document.querySelector(".description");

const submitBtn = document.querySelector(".send");

// submitBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     // const message = {
//     //     from_name = name.value,
//     //     from_email = email.value,
//     //     message:description.value
//     // }
//     send('serviceId', 'templateId', message, user_8HqKOwZnjEk3ocGN3G4Hu)
//     console.log('name', name.value)
//     name.value = ''
//     email.value = ''
//     description.value = ''
//     // Display an info toast with no title
//     Snackbar.show({text: 'Example notification text.'});

// })

// SMOOTH SCROLL

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

var swiper = new SwiperCore(".mySwiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 5,
  slidesPerGroup: 1,
  // autoHeight: true,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".mySwiper .swiper-button-next",
    prevEl: ".mySwiper__prev",
  },
  breakpoints: {
    1000: {
      spaceBetween: 11,
    },
  },
});
