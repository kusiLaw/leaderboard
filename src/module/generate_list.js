const generateList = (array) =>{
 let ul = document.createElement('ul')
 ul.setAttribute('class', 'score-list')

 array.forEach(element => {
  ul.innerHTML += `<li class="list-items">
   <p><span>${element.name}:</span><span>${element.score}</span></p>
   </li>`
 });

 return ul
}

export default generateList