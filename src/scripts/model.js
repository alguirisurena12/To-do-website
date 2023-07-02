class Model {
    constructor() {
        // The state of the model, an array of todo objects
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    addTodo(todoText) {
        const todo = {
            id
        }
    }
}