const generateList = (array) => {
  array = array.result;

  const ul = document.createElement('ul');
  ul.setAttribute('class', 'score-list');

  for (let i = 0; i < array.length; i += 1) {
    ul.innerHTML += `<li class="list-items">
   <p><span>${array[i].user}:</span><span class="score-val">${array[i].score}</span></p>
   </li>`;
  }
  return ul;
};

export default generateList;