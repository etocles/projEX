import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, NestedBar, Part } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  projects:Project[];

  constructor() {}

  ngOnInit(): void {
    //grabs the projects from storage
    let projArray = localStorage.getItem('projArray');
    let pArray = JSON.parse(projArray);
    console.log(pArray);

    pArray.push(new Project('StorageTester',"StorageCAT",8));
    let projs = [];
    console.log(Array.isArray(projs));

    for (let i = 0; i < pArray.length; i++){
      projs.push(this.JSON_TO_PROJECT(pArray[i]));
    }
    projs.shift();
    this.projects = projs;
  }

  deleteTodo(proj:Project){
    //Removes from UI
    //returns all projects that are not the specified id in the UI
    this.projects = this.projects.filter(t => t.name !== proj.name);
  }

  addTodo(proj:Project){
    this.projects.push(proj);
  }

  //helper functions
  JSON_TO_PROJECT(obj):Project{
    //takes in a JSON object and turn it into a project
    // console.log("%c TRANSCRIPTINO BEGINS HERE",'font-weight:bold;background-color:yellow;');
    let proj = new Project(obj.name, obj.category, obj.progbar.benchmarks.length);
    proj.due_date = new Date(obj.due_date);
    proj.order_matters = obj.order_matters;
    proj.completed = obj.completed;
    proj.progbar = new ProgressBar(obj.progbar.benchmarks.length,proj.due_date);
    proj.progbar.num_done = obj.progbar.num_done;
    //now go through the progressbar's benchmarks
    for (let i = 0; i < proj.progbar.benchmarks.length; i++){
      let curr = proj.progbar.benchmarks[i];
      let ref = obj.progbar.benchmarks[i];
      //copy all values (except id)
      curr.title = ref.title;
      curr.due_date = ref.due_date;
      curr.completed = ref.completed;
      curr.parts_summary = ref.parts_summary;
      curr.isnested = ref.isnested;
      //create a NestedBar if necessary
      curr.nested_bar = (ref.isnested)? new NestedBar(ref.nested_bar.parts.length): null;
      if(ref.isnested){
        //copy all values (except id)
        for (let j = 0; j < ref.nested_bar.parts.length; j++){
          curr.nested_bar.parts[j].name = ref.nested_bar.parts[j].name;
          curr.nested_bar.parts[j].completed = ref.nested_bar.parts[j].completed;
        }
      }
      proj.progbar.benchmarks[i] = curr;
    }
    // console.dir(proj);
    return proj;
  }


  //old Backup:
  /*
  let proj1 = new Project('Homework 7','FOCS',5);
  proj1.due_date = new Date('2020-05-09T23:59:00');
  proj1.progbar = new ProgressBar(5,proj1.due_date);
  proj1.progbar.benchmarks[1].isnested = true;
  proj1.progbar.benchmarks[1].nested_bar = new NestedBar(3);
  proj1.progbar.benchmarks[1].PartSummary();
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
  proj4.progbar.benchmarks[5].PartSummary();

  let proj5 = new Project('ProjectName5','Category5',2);
  let proj6 = new Project('Test','YEST',1);

  let projs  = [proj1,proj2,proj3,proj4,proj5,proj6];

  localStorage.setItem('projArray',JSON.stringify(this.projects));
  */

}
