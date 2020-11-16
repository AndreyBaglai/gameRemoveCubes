export default class Timer {
  constructor(timerEl) {
    this.time = 0;
    this.timerId = null;
    this.timerEl = timerEl;
  }

  start(modal) {
    this.timerId = setInterval(() => {
      if (this.time <= 0) {
        this.stop();
        modal.show();
      } else {
        if (this.time < 10) {
          this.timerEl.textContent = this.formatTime(this.time);
        }
        
        this.timerEl.textContent = this.formatTime(this.time);
      }
      --this.time;
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  setTime() {
    const [min, _ ] = this.timerEl.textContent.split(':');

    if (min > 0) {
      this.time = min * 59;
    }
  }

  formatTime(n) {
    return n < 10 ? `00:0${n}` : `00:${n}`;
  }

  refreshTime() {
    this.timerEl.textContent = '01:00';
  }
}
