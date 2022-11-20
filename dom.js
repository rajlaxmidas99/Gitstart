
let header= document.getElementById('main-header');
let headerTitle = document.getElementById('header-title');
console.log(headerTitle);
console.log(header);
//headerTitle.innerText='goodbye';
//headerTitle.textContent='hello';
//console.log(headerTitle.innerHTML);
//headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';
let add = document.getElementsByClassName('title');
console.log(add[0]);
add[0].style.fontWeight = 'bold';
add[0].style.color = 'green';
