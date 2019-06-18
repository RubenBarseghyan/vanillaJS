var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

var filter = document.getElementById('filter');
//filter element
filter.addEventListener('keyup', filterItems);

//function filterItems
function filterItems(e){
  //convert textto lowerCase
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!==-1){
      item.style.display = "block";
    } else {
      item.style.display = "none"
    }
  });
}
//form submit Event
form.addEventListener("submit", addItem);

//delete item
itemList.addEventListener('click', removeItem);

//removeItem
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }

}

//addItem
function addItem(e){
  e.preventDefault();
  console.log(1);
  var newItem = document.getElementById('item').value;

  //create new li element
  var li = document.createElement('li');
  //add className
  li.className = "list-group-item";
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //create delete button element;
  var deleteBtn = document.createElement('button');
  //add className to deleteBtn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //appendChild text to button
  deleteBtn.appendChild(document.createTextNode('x'));
  li.appendChild(deleteBtn);
  //appendChild
  itemList.appendChild(li);
  // document.getElementById('item').value = "";
}
