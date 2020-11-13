export function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function changeDisabledBtn(btn, value) {
  btn.disabled = value;
}

export function setToLS(item) {
  let gameResults = JSON.parse(localStorage.getItem('gameResults'));
  if(!gameResults) {
     gameResults = [];
  }
  gameResults.push(item);
  localStorage.setItem('gameResults', JSON.stringify(gameResults));
}

export function getFromLS() {
  let results = JSON.parse(localStorage.getItem('gameResults'));

  if(!results) {
    return [];
  }

  return results;
}
