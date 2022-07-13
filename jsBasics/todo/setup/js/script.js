let todoInfo = document.querySelector('.todo-info');
let todoField = document.querySelector('.todo-field');
let btn = document.querySelector('.add-todo');

let showHere = document.querySelector('#todo-list')


btn.addEventListener('click', function (){
    let todoData = todoField.value;

    let newTodo = document.createElement('li');
    newTodo.innerHTML = '<i class="fa fa-circle-o mr-3" aria-hidden="true"></i> <span> '+ todoData + ' </span>';

    // showHere.innerHTML = newTodo.innerHTML;
    showHere.appendChild(newTodo);

    todoField.value = '';



} )