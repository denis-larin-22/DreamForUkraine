const toListBtn = document.querySelector('#goToList');

toListBtn.addEventListener('click', () => {
    const checkStorage = localStorage.getItem('token');

    if (checkStorage) {
        document.location = './todo-list.html';
    }

    document.location = '#idAuth';
});