import { Component } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  msg = '';

  constructor(private todosService: TodosService) {}

  addTodo() {
    if (!this.msg.length) {
      return;
    }

    this.todosService.addTodo(this.msg);
    this.msg = '';
  }

  get isButtonDisabled() {
    return !this.msg.length;
  }
}
