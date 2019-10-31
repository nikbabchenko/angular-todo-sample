import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  onDelete(id: number) {
    this.todosService.deleteTodoById(id);
  }

  onToggle(id: number) {

  }

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

}
