import { Component, OnInit } from '@angular/core'
import {Todo, TodoService} from '../todo.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title = ''
  description = ''
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    const todo: Todo = {
      title: this.title,
      description: this.description,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.todoService.addTodo(todo)
    this.title = ''
    this.description = ''
  }
}
