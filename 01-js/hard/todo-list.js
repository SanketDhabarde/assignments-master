/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(index) {
    this.todoList = this.todoList.filter((todo, i) => i !== index);
  }

  update(index, updatedTodo) {
    this.todoList = this.todoList.map((todo, i) =>
      index === i ? updatedTodo : todo
    );
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    const todo = this.todoList.find((v, i) => i === indexOfTodo);
    return todo ? todo : null;
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
