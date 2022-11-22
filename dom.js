
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

//GETELEMENT BY CLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
//     items[i].style.color = 'brown';    
// }
// items[2].style.backgroundColor = 'green';

// let NthItem = document.querySelector('.list-group-item:nth-child(2)');
// NthItem.style.backgroundColor ='green';

// let NthItem3 = document.querySelector('.list-group-item:nth-child(3)');
// NthItem3.style.visibility = 'hidden';

//  let item1 = document.querySelectorAll('.list-group-item');
//  item1[1].style.color = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');

//  for (let i = 0; i < odd.length; i++) {
//      odd[i].style.backgroundColor= 'green';
// }


//traversing the dom
//var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink';

//parentelement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'pink';

//childnodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = 'yellow';

//firstchild,lastchild,nextsibling
// console.log(itemList.firstChild);
// console.log(itemList.lastChild);
// console.log(itemList.nextSibling);
// console.log(itemList.previousSibling);

//first/last elementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello';
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'world';

// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='red';

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id='hello1';
newDiv.setAttribute('title','hello div');

var newTextDiv = document.createTextNode('HEllo');
newDiv.appendChild(newTextDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);
console.log(newDiv);
var list1 = document.querySelector('body .list-group');

let li = document.querySelector('body li');

list1.insertBefore(newDiv, li);


