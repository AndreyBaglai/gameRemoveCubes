export default class Modal {
  constructor(modalEl, blackBgEl) {
    this.modalEl = modalEl;
    this.blackBgEl = blackBgEl;
    this.scoreEl = document.getElementById('score');
    this.totalScoreEl = document.getElementById('total-score');
    this.totalScore = '';
    this.nameInput = document.getElementById('name');
    this.name = '';

    this.nameInput.addEventListener('input', (e) => {
      this.name = e.target.value.trim();
    });
  }

  checkName() {
    if(!this.name) {
      this.name = 'Default name';
    }
  }

  show() {
    this.modalEl.style.display = 'block';
    this.blackBgEl.style.display = 'block';

    this.totalScore = this.scoreEl.textContent;
    this.totalScoreEl.textContent = this.totalScore;
  }

  close() {
    this.modalEl.style.display = '';
    this.blackBgEl.style.display = '';
    this.nameInput.value = '';
    this.name = '';
  }
}