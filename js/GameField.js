import  Cube  from './Cube.js';

export default class GameField {
  constructor(gameFieldEl) {
    this.gameFieldEl = gameFieldEl;
    this.width = this.gameFieldEl.offsetWidth;
    this.height = this.gameFieldEl.offsetHeight;
    this.countCubes = 100;
  }

  generateCubes() {
    for(let i = 0; i < this.countCubes; i++) {
      const cube = new Cube(this.height, this.width).createCube();
      this.gameFieldEl.appendChild(cube);
    }
  }
}