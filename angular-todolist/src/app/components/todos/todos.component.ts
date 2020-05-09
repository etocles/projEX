import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Project[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        name:'Homework 7',
        category:'FOCS',
        dueDate: new Date('2020-05-09T23:59:00'),
        order_matters:true,
        completed:false
      },
      {
        name:'Character Assignment',
        category:'3D Modeling',
        dueDate: new Date('2020-05-20T23:59:00'),
        order_matters:true,
        completed:false
      },
      {
        name:'Dola\'s Birthday',
        category:'Family',
        dueDate: new Date('2020-05-31T23:59:00'),
        order_matters:true,
        completed:false
      },
    ];
  }

  deleteTodo(todo:Project){
    //Removes from UI
    //returns all todos that are not the specified id in the UI
    this.todos = this.todos.filter(t => t.name !== todo.name);
  }

  addTodo(todo:Project){
    this.todos.push(todo);
  }
}
