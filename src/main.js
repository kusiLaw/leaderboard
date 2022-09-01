import generateList from './module/generate_list.js';
import Api from './module/api.js';

const form = document.getElementById('add-form');
const error = document.getElementById('error');
const api = new Api();

const loadList = async () => {
  try {
    const data = await api.getScores();
    const container = document.getElementById('scoreListContainer');
    container.innerHTML = '';
    container.appendChild(generateList(data));
  } catch {
    error.innerHTML = 'Server not responding';
  }
};

window.onload = () => {
  loadList();
};

document.getElementById('refresh').onclick = () => {
  loadList();
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName = form.elements['p-name'];
  const playerScores = form.elements.scores;
  if (playerName.value !== '' && playerScores.value !== '') {
    api.newScore({
      user: playerName.value,
      score: playerScores.value,
    });
    playerName.value = '';
    playerScores.value = '';
    loadList();
    error.innerHTML = '';
  } else {
    error.innerHTML = 'Name or score should not be empty';
  }
});
