"use strict";

const modal = document.querySelector(".modal");

function openModal() {
  modal.classList.add("flex", "animated-fade-in");
  window.setTimeout(() => {
    closeModalByOuterClick()
  }, 1000)
}

function closeModal() {
  modal.classList.add("animated-fade-out");
  window.setTimeout(() => {
    modal.classList.remove("flex")
  }, 900);
}

function closeModalByOuterClick() {
  if (modal.classList.contains("flex") == true) {
    document.addEventListener("click", () => {
      closeModal();
    })
  }
}