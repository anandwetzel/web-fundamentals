var button = document.getElementById('addTodo');
var list = document.getElementById('todoList');
button.onclick = function(){
    var todo = document.getElementById('todo').value;
    if(todo !== ""){
        var li = document.createElement('li');
        li.innerHTML = todo;
        list.appendChild(li);
        document.getElementById('todo').value = "Write your To-Do here";
    }
}