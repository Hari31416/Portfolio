"use strict";

const lefty = ["#ml", "#viz", ".service-1", ".service-3"];
const righty = ["#dl", "#web", ".service-2", ".service-4"];

const observerFadeIN = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cards-animation-right");
    }
  });
});

const observerleft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("cards-animation-left");
    }
  });
});

lefty.forEach((el) => {
  observerleft.observe(document.querySelector(el));
});
righty.forEach((el) => {
  observerRight.observe(document.querySelector(el));
});

observerFadeIN.observe(document.querySelector(".nav-items"));
