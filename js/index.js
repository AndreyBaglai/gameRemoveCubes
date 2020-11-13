import  Game  from './Game.js';
import  Timer  from './Timer.js';
import  GameField  from './GameField.js';

import { changeDisabledBtn } from './utils.js';

const timerEl = document.getElementById('timer');

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');
const scoreEl = document.getElementById('score');
const gameFieldEl = document.getElementById('game-field');

const game = new Game(scoreEl);
const timer = new Timer(timerEl);
const gameField = new GameField(gameFieldEl);

startBtn.addEventListener('click', () => {
  timer.setTime(timerEl);
  timer.start(timerEl);
  gameField.generateCubes();
  changeDisabledBtn(startBtn, true);
  changeDisabledBtn(stopBtn, false);
});

stopBtn.addEventListener('click', () => {
  timer.stop();
  changeDisabledBtn(startBtn, false);
  changeDisabledBtn(stopBtn, true);
});

newGameBtn.addEventListener('click', () => {
  timer.stop();
  timer.refreshTime();
  game.clearScore();
  changeDisabledBtn(startBtn, false);
  changeDisabledBtn(stopBtn, false);
  // gameField.innerHTML = '';
});

// function createCube() {
//
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
