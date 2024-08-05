const rollDiceBtn = document.querySelector(".roll-dice-btn");
const dice = document.querySelector(".dice");
const p1CurrentScore = document.querySelector(".p1-current-score");
const p2CurrentScore = document.querySelector(".p2-current-score");
const holdBtn = document.querySelector(".hold-btn");
const p1ScoreBox = document.querySelector(".p1-score-box");
const p2ScoreBox = document.querySelector(".p2-score-box");
let curScore = 0;
let p1TotalScore = 0;
let p2TotalScore = 0;
let game = "p1";

rollDiceBtn.addEventListener("click", () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  const randomNum = getRandomNumber();

  dice.innerHTML = `<img src="dice-${randomNum}.png"/>`;

  if (game === "p1") {
    if (randomNum === 1) {
      curScore = 0;
      p1CurrentScore.innerText = curScore;
      game = "p2";
    } else {
      curScore += randomNum;
      p1CurrentScore.innerText = curScore;
    }
  } else if (game === "p2") {
    if (randomNum === 1) {
      curScore = 0;
      p2CurrentScore.innerText = curScore;
      game = "p1";
    } else {
      curScore += randomNum;
      p2CurrentScore.innerText = curScore;
    }
  }
});

holdBtn.addEventListener("click", () => {
  if (game === "p1") {
    p1TotalScore += curScore;
    p1ScoreBox.innerText = p1TotalScore;
  } else if (game === "p2") {
    p2TotalScore += curScore;
    p2ScoreBox.innerText = p2TotalScore;
  }
  curScore = 0; // Reset the current score after holding
  // Reset current score display for both players
  p1CurrentScore.innerText =
    game === "p1" ? curScore : p1CurrentScore.innerText;
  p2CurrentScore.innerText =
    game === "p2" ? curScore : p2CurrentScore.innerText;
});
