document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo');
    const todoInput = document.getElementById('new-todo');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodoItem);
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    });

    function addTodoItem() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', toggleComplete);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTodoItem);

            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(todoText));
            listItem.appendChild(deleteButton);

            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    function toggleComplete(event) {
        const listItem = event.target.parentElement;
        if (event.target.checked) {
            listItem.classList.add('completed');
            todoList.appendChild(listItem);
        } else {
            listItem.classList.remove('completed');
        }
    }

    function deleteTodoItem(event) {
        const listItem = event.target.parentElement;
        todoList.removeChild(listItem);
    }
});
