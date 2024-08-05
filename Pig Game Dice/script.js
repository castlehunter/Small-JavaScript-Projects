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

  if (game === "p1") {
    switch (randomNum) {
      case 1:
        dice.innerHTML = `<img src="dice-1.png"/>`;
        game = "p2";
        curScore = 0;
        break;
      case 2:
        dice.innerHTML = `<img src="dice-2.png"/>`;
        curScore = curScore + 2;
        break;
      case 3:
        dice.innerHTML = `<img src="dice-3.png"/>`;
        curScore = curScore + 3;
        break;
      case 4:
        dice.innerHTML = `<img src="dice-4.png"/>`;
        curScore = curScore + 4;
        break;
      case 5:
        dice.innerHTML = `<img src="dice-5.png"/>`;
        curScore = curScore + 5;
        break;
      case 6:
        dice.innerHTML = `<img src="dice-6.png"/>`;
        curScore = curScore + 6;
        break;
      default:
        break;
    }
    p1CurrentScore.innerText = curScore;
  } else if (game === "p2") {
    switch (randomNum) {
      case 1:
        dice.innerHTML = `<img src="dice-1.png"/>`;
        game = "p1";
        curScore = 0;
        break;
      case 2:
        dice.innerHTML = `<img src="dice-2.png"/>`;
        curScore = curScore + 2;
        break;
      case 3:
        dice.innerHTML = `<img src="dice-3.png"/>`;
        curScore = curScore + 3;
        break;
      case 4:
        dice.innerHTML = `<img src="dice-4.png"/>`;
        curScore = curScore + 4;
        break;
      case 5:
        dice.innerHTML = `<img src="dice-5.png"/>`;
        curScore = curScore + 5;
        break;
      case 6:
        dice.innerHTML = `<img src="dice-6.png"/>`;
        curScore = curScore + 6;
        break;
      default:
        break;
    }
    p2CurrentScore.innerText = curScore;
  }
});

// Incompleted
// holdBtn.addEventListener("click", () => {
//   totalScore = curScore;
//   if (game === "p1") {
//     p1CurrentScore.innerText = 0;
//     totalScore += curScore;
//     p1ScoreBox.innerText = totalScore;
//   } else {
//     p2ScoreBox.innerText = totalScore;
//   }
//   curScore = 0;
// });
