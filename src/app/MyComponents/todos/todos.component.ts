import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  localItem;
  todos!: Todo[];

  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [
        // {
        //   sno: 1,
        //   title: 'This is title1',
        //   desc: 'Description1',
        //   active: true,
        // },
        // {
        //   sno: 2,
        //   title: 'This is title2',
        //   desc: 'Description2',
        //   active: true,
        // },
        // {
        //   sno: 3,
        //   title: 'This is title3',
        //   desc: 'Description3',
        //   active: true,
        // },
      ];
    } else {
      // console.log(this.todos);
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
