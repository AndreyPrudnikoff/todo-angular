import { Component, OnInit } from '@angular/core'
import { TodoService } from '../todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }
  onChange(id: number): void {
    this.todoService.onToggle(id)
  }
  removeTodo(id: number): void {
    this.todoService.removeTodo(id)
  }
}
