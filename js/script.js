const swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let phone = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(phone);
new window.JustValidate(".js-form", {
  colorWrong: "#d11616",
  rules: {
    name: {
      required: true,
    },
    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      },
    },
  },
  messages: {
    name: "Вы не ввели имя",
    phone: {
      required: "Вы не ввели телефон",
      function: "Не достаточно количество символов",
    },
  },
});

let tr = gsap.timeline({ paused: true });
let tl = gsap.timeline();
let closeBtn = document.querySelector(".button-close");
let openBtn = document.querySelector(".button-search");

tl.fromTo(".header__form", { display: "none", opacity: 0 }, { display: "flex", opacity: 1 })
tl.fromTo(".hero__title", { opacity: 0, transform: "translateX(40px)", duration: 1.1 },
{ opacity: 1, transform: "translateX(0px)" }, "-=0.4")
tl.fromTo(".hero-subtitle", { opacity: 0, transform: "translateX(40px)", duration: 1.1 },
{ opacity: 1, transform: "translateX(0px)" }, "-=0.4")
openBtn.addEventListener("click", () => tr.play())
closeBtn.addEventListener("click", () => tr.reverse())

