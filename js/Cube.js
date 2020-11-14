import { randomNumber } from './utils.js';

export default class Cube {
  constructor(maxPosHeight, maxPosWidth) {
    this.maxPosHeight = maxPosHeight;
    this.maxPosWidth = maxPosWidth;
    this.colors = ['red', 'green', 'yellow', 'blue'];
    this.maxSize = 60;
    this.minSize = 20;
    this.size = this.setRandomSize(); //20 40 60
    this.point = 0; //1 2 3     0.7rem 1rem 1.5rem
  }

  createCube() {
    const cube = document.createElement('div');
    const randomColor = this.getRandomColor();

    cube.classList.add('cube');
    cube.classList.add(`cube-${randomColor}`);

    this.setPointForCube();

    cube.innerHTML = `<span>+${this.point}</span>`;

    cube.style.width = this.size + 'px';
    cube.style.height = this.size + 'px';

    cube.style.top = this.setRandomPosition('top');
    cube.style.left = this.setRandomPosition('left');

    return cube;
  }

  addValueOfPoint(val) {
    this.point = val;
  }

  setRandomSize() {
    return randomNumber(this.minSize, this.maxSize);
  }

  setPointForCube() {
    if (this.size <= 33) {
      this.point = 3;
    } else if (this.size <= 46 && this.size > 33) {
      this.point = 2;
    } else if (this.size <= 60 && this.size > 46) {
      this.point = 1;
    }
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

    if (direction === 'left') {
      position = randomNumber(0, this.maxPosWidth) - this.size;
    }

    if (position < 0) {
      position = 0;
    }

    return position + 'px';
  }
}
