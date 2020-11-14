import Cube from './Cube.js';

import { randomNumber } from './utils.js';

export default class Game {
  constructor(gameFieldEl, scoreEl) {
    this.gameFieldEl = gameFieldEl;

    this.width = this.gameFieldEl.offsetWidth;
    this.height = this.gameFieldEl.offsetHeight;

    this.countCubes = 5;
    this.countCurrentCubes = 0;

    this.scoreEl = scoreEl;
    this.score = scoreEl.textContent;
  }

  generateCubes() {
    for (let i = 0; i < this.countCubes; i++) {
      const cube = new Cube(this.height, this.width)
      const cubeEl = cube.createCube(score);

      cubeEl.addEventListener('click', (e) => {
        const currentCube = e.target.closest('.cube');
        if (currentCube) {
          currentCube.remove();
          
          this.addToScore(cube.point);
          this.countCurrentCubes--;

          if(!this.countCurrentCubes) {
            this.countCubes = randomNumber(0, this.countCubes);
  
            if(!this.countCubes) {
              this.countCubes = 3;
            }
            
            this.generateCubes();
          }
        }
      });

      this.gameFieldEl.appendChild(cubeEl);
    }
    this.countCurrentCubes = this.gameFieldEl.childElementCount;
  }

  clearGameFields() {
    this.gameFieldEl.innerHTML = '';
    this.countCurrentCubes = 0;
    this.clearScore();
  }

  addToScore(n) {
    this.score = +this.score + n;
    this.scoreEl.textContent = this.score;
  }

  clearScore() {
    this.scoreEl.textContent = 0;
    this.score = 0;
  }
}
