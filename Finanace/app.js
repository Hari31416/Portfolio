"use strict";

const lefty = ["#pystock", "#frontier"];
const righty = ["#optionalyzer"];

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

observerFadeIN.observe(document.querySelector("#navbar"));
observerFadeIN.observe(document.querySelector("#construction-wrapper"));
