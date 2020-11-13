export default class Game {
  constructor(scoreEl) {
    this.scoreEl = scoreEl;
    this.score = scoreEl.textContent;
  }

  start() {

  }

  stop() {

  }

  clearScore() {
    this.scoreEl.textContent = 0;
    this.score = 0;
  }

  newGame() {

  }
}