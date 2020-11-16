import { getFromLS } from './utils.js';

export default class TableResult {
  constructor() {
    this.name = '';
    this.score = 0;
    this.tbody = document.getElementById('tbody');
    this.results = getFromLS();
  }

  addResult(result) {
    this.name = result.name;
    this.score = result.score;
    
    this.tbody.innerHTML += `<tr>
      <th scope="row">${this.name}</th>
      <td>${this.score}</td>
    </tr>`;
  }

  displayResultsFromLS() {
    if (this.results.length) {
      this.tbody.innerHTML = '';
      
      for (let i = 0; i < this.results.length; i++) {
        this.name = this.results[i].name;
        this.score = this.results[i].score;

        this.tbody.innerHTML += `<tr>
          <th scope="row">${this.name}</th>
          <td>${this.score}</td>
        </tr>`;
      }
    }
  }
}
