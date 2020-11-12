//import { Timer } from './Timer.js';

const timerEl = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const newGameBtn = document.getElementById('new-game');
const scoreEl = document.getElementById('score');
const gameField = document.getElementById('game-field');

const cubeHeight = 40;
const cubeWidth = 40;

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

  for(let i = 1; i < 100; i++) {
    cube();
  }

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
  gameField.innerHTML = '';
});

function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cube() {
  const cube = document.createElement('div');
  const colorsCube = ['red', 'green', 'yellow'];

  const randomColor = colorsCube[getRandomValue(0, colorsCube.length-1)];
  cube.classList.add('cube');
  cube.classList.add(`cube-${randomColor}`);

  const top = getRandomValue(0, 100) + '%';
  const left = getRandomValue(0, 100) + '%';
  const right = getRandomValue(0, 100) + '%';
  const bottom = getRandomValue(0, 100) + '%';

  cube.style.top = top;
  cube.style.left = left;
  cube.style.right = right;
  cube.style.bottom = bottom;

  cube.style.width = cubeWidth + 'px';
  cube.style.height = cubeHeight + 'px';

  gameField.appendChild(cube);
}
