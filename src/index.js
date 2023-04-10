import Controller from './scripts/controller.js';

const todo = new Controller;
const authTodo = document.querySelector('.auth-todo');

async function loginTextHendler (event) {
    const authTodoText = document.querySelector('.auth-todo__text');

    if (event.target.className === 'auth-todo__login') {
        event.preventDefault();
        const loginText = authTodoText.value.trim();
        await todo.handleLogin(loginText, 'dream');
        document.location = './todo-list.html';
    }
}

authTodo.addEventListener('click', loginTextHendler);

