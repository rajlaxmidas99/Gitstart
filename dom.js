
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

let NthItem = document.querySelector('.list-group-item:nth-child(2)');
NthItem.style.backgroundColor ='green';

let NthItem3 = document.querySelector('.list-group-item:nth-child(3)');
NthItem3.style.visibility = 'hidden';

 let item1 = document.querySelectorAll('.list-group-item');
 item1[1].style.color = 'green';

let odd = document.querySelectorAll('li:nth-child(odd)');

 for (let i = 0; i < odd.length; i++) {
     odd[i].style.backgroundColor= 'green';
}

let even = document.querySelectorAll('li:nth-child(even)');
for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor= 'yellow';
}