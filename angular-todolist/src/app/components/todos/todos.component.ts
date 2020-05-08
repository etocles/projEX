import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor(private todoservice:TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoservice.getTodos();
  }

  deleteTodo(todo:Todo){
    //Removes from UI
    //returns all todos that are not the specified id in the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    //Removes from server
    this.todoservice.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
    this.todoservice.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
