import {Injectable} from '@angular/core'

export interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
  date?: any
}
@Injectable({providedIn: 'root'})

export class TodoService {
  public todos: Todo[] = [
    {
      id: 1,
      title: "delectus aut autem",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam at in inventore quia sed? Doloremque enim eum facilis fuga illum minima nemo numquam quas, quis quod repudiandae sequi unde voluptatibus! Deserunt dignissimos distinctio ea eligendi fugiat iste labore libero nobis officia quo reiciendis rem sint, tempore, veniam voluptatem!",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam at in inventore quia sed? Doloremque enim eum facilis fuga illum minima nemo numquam quas, quis quod repudiandae sequi unde voluptatibus! Deserunt dignissimos distinctio ea eligendi fugiat iste labore libero nobis officia quo reiciendis rem sint, tempore, veniam voluptatem!",
      completed: false,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam aperiam at in inventore quia sed? Doloremque enim eum facilis fuga illum minima nemo numquam quas, quis quod repudiandae sequi unde voluptatibus! Deserunt dignissimos distinctio ea eligendi fugiat iste labore libero nobis officia quo reiciendis rem sint, tempore, veniam voluptatem!",
      completed: false,
    }]
  constructor() {}
  onToggle(id: number): void {
    const idx = this.todos.findIndex(t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo)
  }
  removeTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id)
  }
}
