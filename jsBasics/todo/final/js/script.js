let todos = [];

let btn = document.querySelector('.add-todo');
let todoField = document.querySelector('.todo-field');

let placeToShow = document.querySelector('#todo-list');

let todoInfo = document.querySelector('.todo-info');


btn.addEventListener('click', function (){
    let enteredTodo = todoField.value;

    if(enteredTodo.length !== 0)
    {
        todoInfo.classList.add('hide-it');
        todoInfo.classList.remove('show-it');
        todos.push(enteredTodo);

        todoField.value = '';

        renderTodos();
    }
    else
    {
        todoInfo.classList.remove('hide-it');
        todoInfo.classList.add('show-it');
    }
} )


function renderTodos() {
    placeToShow.innerHTML = '';
    todos.forEach(todo => {
        let newTodo = document.createElement('li');
        newTodo.classList.add('my-2')
        newTodo.innerHTML = `<i class="fa fa-circle-o mr-3" aria-hidden="true"></i> <span>${todo}</span>`;
        placeToShow.appendChild(newTodo);
    });
}
