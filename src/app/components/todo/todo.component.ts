import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'My first todo',
        completed: false,
      },
      {
        content: 'My second todo',
        completed: true,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((item, key) => {
      if (key === id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((item, key) => {
      return key !== id;
    });
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ""
  }
}
