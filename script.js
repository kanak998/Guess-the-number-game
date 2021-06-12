'use strict';
// DOM is a web api
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const scoreBoard = document.querySelector('.score');

let secretNo = Math.round(Math.random() * 30 + 1);
console.log(secretNo);
let score = 20;
let highscore = 0;
checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (guess == '') {
    message.textContent = 'No Number...';
  } else if (guess === secretNo) {
    message.textContent = 'Correct Number...';
    number.textContent = secretNo;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
  } else if (guess !== secretNo) {
    if (score > 1) {
      message.textContent = guess > secretNo ? 'Too high!...' : 'Too low!...';
      score--;
      scoreBoard.textContent = score;
    } else {
      scoreBoard.textContent = '0';
      message.textContent = 'You lose the game!';
      document.querySelector('body').style.backgroundColor = 'red';
      number.style.width = '30rem';
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNo = Math.round(Math.random() * 20 + 1);
  scoreBoard.textContent = score;
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222222';
  message.textContent = 'Start guessing....';
  document.querySelector('.guess').value = '';
});
