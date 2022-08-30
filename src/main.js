import {getLocalStorage, setLocalStorage} from './module/storage.js';
import Scores from './module/score.js';
import generateList from './module/generate_list.js';


const form = document.getElementById('add-form')
let scores = new Scores()




window.onload = (event) =>{
  scores.data = getLocalStorage()
  let container = document.getElementById('scoreListContainer')
  container.innerHTML = ''
  container.appendChild(generateList(scores.data))
}

form.addEventListener('submit', (event) => {
 event.preventDefault();
 const playerName = form.elements['p-name'].value;
 const playerScores = form.elements['scores'].value;
 scores.add({'name' : playerName, 'score' :playerScores })
 
 // Using promise 
 let promise = new Promise((resolve, reject) =>{
  resolve(generateList(scores.data))
 })

 promise.then(
  result => {
   let container = document.getElementById('scoreListContainer')
   container.innerHTML = ''
   container.appendChild(result)
  }
 )

 setLocalStorage(scores.data)
});
