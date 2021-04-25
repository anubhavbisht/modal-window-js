"use strict";
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const allmodals = document.querySelectorAll(".show-modal");

const clicked = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (var i = 0; i < 3; i++) {
  allmodals[i].addEventListener("click", clicked);
}
const cl = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
close.addEventListener("click", cl);
overlay.addEventListener("click", cl);
document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    cl();
  }
});
