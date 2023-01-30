var toggleCheck = function(){
  let parent = this.parentNode;
  parent.classList.toggle('checked');
};

var deleteTodo = function(){
  let todoLi = this.parentNode;
  todoLi.remove();
};

var addTodo = function(todo) {
  let li = document.createElement('li');

  let label = document.createElement('label');
  label.innerHTML = todo;
  
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.onclick = toggleCheck;

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete";
  deleteButton.onclick = deleteTodo;

  li.appendChild(checkbox); 
  li.appendChild(label);
  li.appendChild(deleteButton);

  let todolist = document.querySelector('#todoList');
  todolist.appendChild(li);
};

document.getElementById('add').onclick = function() {
  var parent = this.parentNode;
  var addTextInput = parent.children[0];
  if(addTextInput.value === "") {
    return;
  } else {
    addTodo(addTextInput.value);
    addTextInput.value = "";
  }
};