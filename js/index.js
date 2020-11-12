//import { Timer } from './Timer.js';

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');

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

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
});

startBtn.addEventListener('click', () => {
  timerValue = parseInt(timerEl.textContent) * 59;

  if(timerValue < 59) {
    timerValue = parseInt(timerEl.textContent.split(':')[1]);
    console.log('timerValue: ', timerValue);
  }
  createTimer(timerValue);
});
