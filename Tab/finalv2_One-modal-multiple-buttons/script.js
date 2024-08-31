"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// This is a solution to the easist problem: ie,
// click on three different buttons will open the same content
// That's why there is only one function for removing "hidden"

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", function () {
    openModal();
  });
});

btnCloseModal.addEventListener("click", function () {
  closeModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// document.addEventListener("keydown", function (e) {
//   // console.log(e.key);

//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });
