const inputBox = document.querySelector(".input-box");
const scoreText = document.querySelector(".scoreText");
const checkBtn = document.querySelector(".check-btn");

const correctNumber = 15;

let displayStr = "";

checkBtn.addEventListener("click", () => {
  let number = inputBox.value;

  if (number === "") {
    displayStr = "Please enter a number.";
  } else if (number > correctNumber) {
    displayStr = "Too High!";
  } else if (number < correctNumber) {
    displayStr = "Too Low!";
  } else {
    displayStr = "CORRECT!";
  }

  scoreText.innerText = displayStr;
});
