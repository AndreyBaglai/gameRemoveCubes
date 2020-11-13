export default class TableResult {
  constructor(result) {
    this.name = result.name;
    this.score = result.score;
    this.tbody = document.getElementById('tbody');
  }

  addResult() {
    this.tbody.innerHTML += `<tr>
      <th scope="row">${this.name}</th>
      <td>${this.score}</td>
    </tr>`;
  }
}