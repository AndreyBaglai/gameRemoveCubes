import  Game  from './Game.js';
import  Timer  from './Timer.js';
import  Modal  from './Modal.js';
import  TableResult  from './TableResult.js';

import { changeDisabledBtn, setToLS } from './utils.js';

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');

const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const gameEl = document.getElementById('game-field');

const modalEl = document.getElementById('modal');
const blackBgEl = document.getElementById('black-bg');
const closeModalBtn = document.getElementById('modal-close');
const saveBtn = document.getElementById('save');

const game = new Game(gameEl, scoreEl);
const timer = new Timer(timerEl);
const modal = new Modal(modalEl, blackBgEl);
const table = new TableResult();

table.displayResultsFromLS();

startBtn.addEventListener('click', () => {
  timer.setTime();
  timer.start(modal);

  changeDisabledBtn(startBtn, true);
  changeDisabledBtn(stopBtn, false);

  game.enabledGameField();

  if(game.countCurrentCubes) {
    return;
  }

  game.generateCubes();
});

stopBtn.addEventListener('click', () => {
  timer.stop();

  changeDisabledBtn(startBtn, false);
  changeDisabledBtn(stopBtn, true);

  game.disabledGameField();
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

saveBtn.addEventListener('click', () => {
  if(modal.isEmptyName()) { return; }

  const result = { name: modal.name, score: modal.totalScore };

  setToLS(result);
  table.addResult(result);
  
  modal.close();
  game.disabledGameField();
});
