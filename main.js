let navLinks = document.querySelectorAll(".nav-menu .nav-link");
let menuOpenButton = document.querySelector("#menu-open-button");
let menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle Moble menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
});

// close menu when the nav links are clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOpenButton.click();
  });
});

// Swiper JS

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   responsive breakpoint

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
