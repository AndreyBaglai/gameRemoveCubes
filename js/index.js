//import { Timer } from './Timer.js';

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');
const scoreEl = document.getElementById('score');

let timerValue;
let timer;

const createTimer = (value) => {
  timer = setInterval(function () {
    if (value <= 0) {
        clearInterval(timer);
        alert("End time");
    } else { 
        if (value < 10) {
          value = `0${value}`;
        }

        let strTimer = `00:${value}`;
        timerEl.textContent = strTimer;
    }
    --value;
}, 1000);
}

stopBtn.addEventListener('click', (e) => {
  clearInterval(timer);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

startBtn.addEventListener('click', (e) => {
  timerValue = parseInt(timerEl.textContent) * 59;
  stopBtn.disabled = false;
  startBtn.disabled = true;
  if(timerValue < 59) {
    timerValue = parseInt(timerEl.textContent.split(':')[1]);
    console.log('timerValue: ', timerValue);
  }
  createTimer(timerValue);
});

newGameBtn.addEventListener('click', () => {
  clearInterval(timer);
  timerEl.textContent = '01:00';
  scoreEl.textContent = '0';
  startBtn.disabled = false;
  stopBtn.disabled = false;
});
