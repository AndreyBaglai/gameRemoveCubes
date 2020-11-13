import  Timer  from './Timer.js';
import  Game  from './Game.js';

import { changeDisabledBtn } from './utils.js';

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');
const scoreEl = document.getElementById('score');
const gameEl = document.getElementById('game-field');

const timer = new Timer(timerEl);
const game = new Game(gameEl, scoreEl);

startBtn.addEventListener('click', () => {
  timer.setTime(timerEl);
  timer.start(timerEl);
  changeDisabledBtn(startBtn, true);
  changeDisabledBtn(stopBtn, false);

  if(game.countCurrentCubes) {
    return;
  }

  game.generateCubes();
});

stopBtn.addEventListener('click', () => {
  timer.stop();
  changeDisabledBtn(startBtn, false);
  changeDisabledBtn(stopBtn, true);
});

newGameBtn.addEventListener('click', () => {
  timer.stop();
  timer.refreshTime();
  changeDisabledBtn(startBtn, false);
  changeDisabledBtn(stopBtn, false);
  game.clearGameFields()
});

// function createCube() {
//
//   cube.addEventListener('click', (e) => {
//     if(e.target.classList.contains('cube')) {
//       if(Game.childElementCount < 5) {
//         for(let i = 0; i < getRandomValue(0, 3); i++) {
//           createCube();
//         }
//       }

//       scoreEl.textContent = +scoreEl.textContent + 1;
//       e.target.remove();
//     }
//   });
// }
