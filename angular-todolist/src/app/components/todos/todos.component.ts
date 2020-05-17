import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, NestedBar } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Project[];

  constructor() {}

  ngOnInit(): void {
    let proj1 = new Project('ProjectName','CategoryName',5);
    proj1.due_date = new Date('2020-05-09T23:59:00');
    proj1.progbar = new ProgressBar(5);
    proj1.progbar.benchmarks[1].isnested = true;
    proj1.progbar.benchmarks[1].nested_bar = new NestedBar(3);
    proj1.progbar.ToggleBenchmark(0);
    proj1.progbar.ToggleBenchmark(1);

    let proj2 = new Project('ProjectName2','CategoryName2',5);
    proj2.due_date = new Date('2020-06-09T23:59:00');

    let proj3 = new Project('ProjectName3','CategoryName3',10);
    proj2.due_date = new Date('2020-11-09T23:59:00');
    proj3.progbar.ToggleBenchmark(0);
    proj3.progbar.ToggleBenchmark(1);
    proj3.progbar.ToggleBenchmark(2);
    proj3.progbar.ToggleBenchmark(3);
    proj3.progbar.ToggleBenchmark(4);

    let proj4 = new Project('ProjectName3','CategoryName3',10);
    proj4.order_matters = false;

    this.todos = [proj1,proj2,proj3,proj4];
  }

  deleteTodo(proj:Project){
    //Removes from UI
    //returns all todos that are not the specified id in the UI
    this.todos = this.todos.filter(t => t.name !== proj.name);
  }

  addTodo(proj:Project){
    this.todos.push(proj);
  }
}
