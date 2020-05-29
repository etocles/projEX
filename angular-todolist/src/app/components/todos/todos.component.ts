import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, NestedBar } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  projects:Project[];

  constructor() {}

  ngOnInit(): void {
    let proj1 = new Project(localStorage.getItem('temp'),'FOCS',5);
    proj1.due_date = new Date('2020-05-09T23:59:00');
    proj1.progbar = new ProgressBar(5,proj1.due_date);
    proj1.progbar.benchmarks[1].isnested = true;
    proj1.progbar.benchmarks[1].nested_bar = new NestedBar(3);
    proj1.progbar.benchmarks[1].CorrelateParts();
    proj1.progbar.ToggleBenchmark(0);
    proj1.progbar.ToggleBenchmark(1);

    let proj2 = new Project('Character','3D Modeling',5);
    proj2.due_date = new Date('2020-06-09T23:59:00');

    let proj3 = new Project('ProjectName3','Category3',10);
    proj3.due_date = new Date('2020-11-09T23:59:00');
    proj3.progbar.MarkUpTo(proj3.progbar.benchmarks[4]);

    let proj4 = new Project('ProjectName4','Category4',10);
    proj4.due_date = new Date('2020-11-20T23:59:00');
    proj4.order_matters = false;
    proj4.progbar.benchmarks[5].isnested = true;
    proj4.progbar.benchmarks[5].nested_bar = new NestedBar(5);
    proj4.progbar.benchmarks[5].CorrelateParts();

    let proj5 = new Project('ProjectName5','Category5',2);
    let proj6 = new Project('Test','YEST',1);

    this.projects = [proj1,proj2,proj3,proj4,proj5,proj6];
  }

  deleteTodo(proj:Project){
    //Removes from UI
    //returns all projects that are not the specified id in the UI
    this.projects = this.projects.filter(t => t.name !== proj.name);
  }

  addTodo(proj:Project){
    this.projects.push(proj);
  }

}
