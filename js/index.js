import  Game  from './Game.js';
import  Timer  from './Timer.js';
import  Modal  from './Modal.js';
import  TableResult  from './TableResult.js';

import { changeDisabledBtn } from './utils.js';

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');
const scoreEl = document.getElementById('score');
const gameEl = document.getElementById('game-field');

const modalEl = document.getElementById('modal');
const blackBgEl = document.getElementById('black-bg');
const closeModalBtn = document.getElementById('modal-close');
const saveBtn = document.getElementById('save');

const game = new Game(gameEl, scoreEl);
const timer = new Timer(timerEl);
const modal = new Modal(modalEl, blackBgEl);

startBtn.addEventListener('click', () => {
  timer.setTime();
  timer.start(modal);
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

closeModalBtn.addEventListener('click', () => {
  modal.close();
});

saveBtn.addEventListener('click', (e) => {
  const result = { name: modal.name, score: modal.totalScore };
  const table = new TableResult(result);

  table.addResult();
  modal.close();
});
