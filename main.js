var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var description = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.append(' ');
  li.appendChild(document.createTextNode(description));
 //create edit button
 var editBtn = document.createElement('button');

//add class to edit button
editBtn.className = 'btn btn-sm float-right edit';

//append textnode
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);
itemList.appendChild(li);

// Create del button element
var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter items
function filterItems(e){
  //convert to lowerCase
  var text = e.target.value.toLowerCase();
  // get li
  var items = itemList.getElementsByTagName('li');
  //convert into array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemDes = item.childNodes[2].textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1 || itemDes.toLowerCase().indexOf(text) != -1 ){
      item.style.display ='block';
    }
    else {
      item.style.display ='none';
    }
  });
}