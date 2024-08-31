const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

btn1.addEventListener("click", function () {
  modal.classList.remove("hide");
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hide");
});
