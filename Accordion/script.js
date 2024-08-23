const dropDownArrows = document.querySelectorAll(".drop-down-arrow");
const paragraphs = document.querySelectorAll(".paragraph1");

dropDownArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    paragraphs[index].classList.toggle("hide");
  });
});
