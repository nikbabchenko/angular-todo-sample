import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor() {
    console.log(this.todos);
   }

  todos: Todo[] = [
    new Todo(1, 'Learn Angular'),
    new Todo(2, 'Learn React'),
    new Todo(3, 'Go to Brazil', true),
    new Todo(4, 'Visit Spain')
  ];

  deleteTodoById(id: number) {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  addTodo(msg: string) {
    this.todos.push(new Todo(this.todos.length + 1, msg));
  }

}
