const generateList = (array) => {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'score-list');

  array.forEach((element) => {
    ul.innerHTML += `<li class="list-items">
   <p><span>${element.name}:</span><span class="score-val">${element.score}</span></p>
   </li>`;
  });

  return ul;
};

export default generateList;