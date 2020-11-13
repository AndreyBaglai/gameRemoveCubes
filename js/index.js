import  Game  from './Game.js';
import  Timer  from './Timer.js';

import { randomNumber } from './utils.js'

const timerEl = document.getElementById('timer');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');

const scoreEl = document.getElementById('score');

const game = new Game(scoreEl);
const timer = new Timer(timerEl);

// const gameField = document.getElementById('game-field');

// const gameFieldWidth = gameField.offsetWidth;
// const gameFieldHeight = gameField.offsetHeight;

// const cubeHeight = 40;
// const cubeWidth = 40;

// let timerValue;
// let timer;

stopBtn.addEventListener('click', () => {
  timer.stop();
  // startBtn.disabled = false;
  // stopBtn.disabled = true;
});

startBtn.addEventListener('click', () => {
  timer.setTime(timerEl);
  timer.start(timerEl);
});

newGameBtn.addEventListener('click', () => {
  timer.stop();
  timer.refreshTime();
  game.clearScore();
  // startBtn.disabled = false;
  // stopBtn.disabled = false;
  // gameField.innerHTML = '';
});

// function createCube() {
//   const cube = document.createElement('div');
//   const colorsCube = ['red', 'green', 'yellow', 'blue'];

//   const randomColor = colorsCube[getRandomValue(0, colorsCube.length-1)];
//   cube.classList.add('cube');
//   cube.classList.add(`cube-${randomColor}`);

//   let top = getRandomValue(0, gameFieldHeight) - cubeHeight;
//   let left = getRandomValue(0, gameFieldWidth) - cubeWidth;

//   if (top < 0) {
//     top = '0';
//   }

//   if (left < 0) {
//     left = '0';
//   }

//   cube.style.top = top + 'px';
//   cube.style.left = left+ 'px';

//   cube.style.width = cubeWidth + 'px';
//   cube.style.height = cubeHeight + 'px';

//   cube.addEventListener('click', (e) => {
//     if(e.target.classList.contains('cube')) {
//       if(gameField.childElementCount < 5) {
//         for(let i = 0; i < getRandomValue(0, 3); i++) {
//           createCube();
//         }
//       }

//       scoreEl.textContent = +scoreEl.textContent + 1;
//       e.target.remove();
//     }
//   });

//   gameField.appendChild(cube);
// }
