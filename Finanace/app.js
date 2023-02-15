"use strict";

const allLefty = document.querySelectorAll(".lefty");
const allRighty = document.querySelectorAll(".righty");

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

allLefty.forEach((el) => {
  observerleft.observe(el);
});
allRighty.forEach((el) => {
  observerRight.observe(el);
});

observerFadeIN.observe(document.querySelector("#navbar"));
observerFadeIN.observe(document.querySelector("#construction-wrapper"));
