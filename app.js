'use strict';

let secretNumber = Math.trunc(Math.random() * 31);
let score = 30;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const displaySecretNumber = function () {
  document.querySelector(`.number`).textContent = secretNumber;
};
const setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 31);
};
const changeBackgroundColor = function (color) {
  document.querySelector(`body`).style.backgroundColor = color;
};
const changeSecretNumberBoxSize = function (resize) {
  document.querySelector(`.number`).style.width = resize;
};

//  WhHEN CLICKING THE `CHECK!` BUTTON
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //  WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage(`⛔ No Number!`);
  }

  //  WHEN PLAYER WINS
  else if (guess === secretNumber) {
    displayMessage(`🎉 You Win!`);
    changeBackgroundColor(`#60b437`);
    changeSecretNumberBoxSize(`30rem`);
    displaySecretNumber();

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }

  //  WHEN GUESS IS WRONG
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent =
        guess > secretNumber ? `📈 Too High` : `📉 Too Low`;
      score--;
      document.querySelector(`.score`).textContent = score;
    }
    //  WHEN PLAYER LOSES THE GAME
    else {
      displayMessage(`😭 You lost the game!`);
      changeBackgroundColor(`#ff0000`);
      displaySecretNumber();
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

//  RESET GAME BUTTON
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 30;
  setSecretNumber();
  changeBackgroundColor(`#222`);
  displayMessage(`Start guessing...`);
  changeSecretNumberBoxSize(`15rem`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});