import { randomNumber } from './utils.js';

export default class Cube {
  constructor(maxPosHeight, maxPosWidth) {
    this.maxPosHeight = maxPosHeight;
    this.maxPosWidth = maxPosWidth
    this.colors = ['red', 'green', 'yellow', 'blue'];
    this.size = 40;
  }

  createCube() {
    const cube = document.createElement('div');
    const randomColor = this.getRandomColor();
  
    cube.classList.add('cube');
    cube.classList.add(`cube-${randomColor}`);

    cube.style.width = this.size + 'px';
    cube.style.height = this.size + 'px';

    cube.style.top = this.setRandomPosition('top');
    cube.style.left = this.setRandomPosition('left');

    return cube;
  }

  getRandomColor() {
    const randomIdx = randomNumber(0, this.colors.length - 1);
    return this.colors[randomIdx];
  }

  setRandomPosition(direction) {
    let position = 0;

    if (direction === 'top') {
      position = randomNumber(0, this.maxPosHeight) - this.size;
    }

    if(direction === 'left') {
      position = randomNumber(0, this.maxPosWidth) - this.size;
    }

    if (position < 0) {
      position = 0;
    }

    return position + 'px';
  }
}