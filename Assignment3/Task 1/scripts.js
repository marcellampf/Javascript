document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
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
        console.log("Add button clicked");
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', toggleComplete);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteTodoItem);

            const span = document.createElement('span');
            span.textContent = todoText;

            listItem.appendChild(checkbox);
            listItem.appendChild(span);
            listItem.appendChild(deleteButton);

            todoList.appendChild(listItem);
            todoInput.value = '';

            // Effect
            console.log("Triggering confetti");
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            console.log("Confetti triggered");
        }
    }

    function toggleComplete(event) {
        console.log("Checkbox toggled");
        const listItem = event.target.parentElement;
        if (event.target.checked) {
            listItem.classList.add('completed');
            todoList.appendChild(listItem);
        } else {
            listItem.classList.remove('completed');
        }
    }

    function deleteTodoItem(event) {
        console.log("Delete button clicked");
        const listItem = event.target.parentElement;
        todoList.removeChild(listItem);
    }
});
