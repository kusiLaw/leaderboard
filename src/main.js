import { getLocalStorage, setLocalStorage } from './module/storage.js';
import Scores from './module/score.js';
import generateList from './module/generate_list.js';

const form = document.getElementById('add-form');
const scores = new Scores();
const data = [
  { name: 'name', score: 100 },
  { name: 'name', score: 20 },
  { name: 'name', score: 50 },
  { name: 'name', score: 78 },
  { name: 'name', score: 125 },
  { name: 'name', score: 77 },
  { name: 'name', score: 42 },
];

window.onload = () => {
  const local = getLocalStorage();
  if (local.length === 0) {
    scores.data = data;
  } else {
    scores.data = local;
  }
  const container = document.getElementById('scoreListContainer');
  container.innerHTML = '';
  container.appendChild(generateList(scores.data));
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const playerName = form.elements['p-name'].value;
  const playerScores = form.elements.scores.value;
  scores.add({ name: playerName, score: playerScores });

  // Using promise
  const promise = new Promise((resolve) => {
    resolve(generateList(scores.data));
  });

  promise.then(
    (result) => {
      const container = document.getElementById('scoreListContainer');
      container.innerHTML = '';
      container.appendChild(result);
    },
  );

  setLocalStorage(scores.data);
});
