import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Project, ProgressBar, NestedBar, Part } from '../../models/ProjectClasses';
import { AddProjectComponent }  from '../add-project/add-project.component';
import { IpcRenderer } from 'electron';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild(AddProjectComponent)
  private addComponent: AddProjectComponent;

  projects:Project[];
  notifID: any;

  private ipc: IpcRenderer
  constructor() {
    //adds electron api
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  ngOnInit(): void {
    //uncomment this to revert to backup
    // this.revertToBackup()

    this.projects = [];
    if(localStorage.getItem('projArray') == "undefined") return; //on first bootup, the projects array will be empty

    //grabs the projects from storage
    let projJSON = localStorage.getItem('projArray');
    let pArray = JSON.parse(projJSON);

    //testing out adding something to the array after grabbing
    // pArray.push(new Project('StorageTester',"StorageCAT",8));

    //convert every JSON project to an instance of Project
    for (let i = 0; i < pArray.length; i++){
      this.projects.push(this.JSON_TO_PROJECT(pArray[i]));
    }

    //begin checking for notifications every 30 minutes
    setInterval(this.NotificationService, 30 * 60 * 1000);
  }

  deleteTodo(proj:Project){
    //Removes from UI
    //returns all projects that are not the specified id in the UI
    this.projects = this.projects.filter(t => t.name !== proj.name);
  }

  addProj(){
    //change sorting method to custom
    //grab the temporary project that's stored in localStorage, and add it.
    let proj_JSON = localStorage.getItem('ProjectToBeAdded');
    let proj = this.JSON_TO_PROJECT(JSON.parse(proj_JSON));

    // this.projects.push(proj); //adds new project at the end
    this.projects.unshift(proj); //adds new project at the top

    //cleanup
    localStorage.removeItem('ProjectToBeAdded');
    this.updateStorage();
  }

  drop(event: CdkDragDrop<Project>) {
    //rearranges the list to move the benchmark
    moveItemInArray(this.projects, event.previousIndex, event.currentIndex);
    this.addComponent.sort_type = 'by_custom';
    //update the database
    this.updateStorage();
  }

  /*HELPER FUNCTIONS*/

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

  sortProjects(sortMethod:string){
    let projectsCopy = this.projects;
    switch(sortMethod){
      case "by_custom": //do nothing
        break;
      case "by_due_date":
        projectsCopy.sort(function(a,b){
          if (a.due_date < b.due_date) return -1; //first argument is lesser
          if (a.due_date > b.due_date) return 1; //first argument is greater (placed after second one)
          return 0; //if a==b
        })
        break;
      case "by_importance":
        projectsCopy.sort(function(a,b){
          //should have a predefined importance hash // TODO: change this to a hash
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0; //if a==b
        })
        break;
      case "by_category":
        projectsCopy.sort(function(a,b){
          if (a.category.toLowerCase() > b.category.toLowerCase()) return 1; //first argument is greater
          if (a.category.toLowerCase() < b.category.toLowerCase()) return -1; //first argument is less than second
          return 0; //if a==b
        })
        break;
      case "by_alpha":
        projectsCopy.sort(function(a,b){
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1; //first argument is less than second
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1; //first argument is greater
          return 0; //if a==b
        })
        break;
      case "by_rev_alpha":
        projectsCopy.sort(function(a,b){
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1; //first argument is greater
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1; //first argument is lesser
          return 0; //if a==b
        })
        break;
    }
    this.projects = projectsCopy;
    this.updateStorage();
  }

  updateStorage(){
    localStorage.removeItem('projArray');
    localStorage.setItem('projArray',JSON.stringify(this.projects));
  }

  revertToBackup(){
    localStorage.removeItem('projArray');

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
    localStorage.setItem('projArray',JSON.stringify(projs));
  }

  NotificationService(){
    //because this is working at the window context, it has to remake the projects array and then iterate through it to send notifications
    console.log("beginning notification checking!");
    let projs = JSON.parse(localStorage.getItem('projArray'));
    let ps = []
    for (let i = 0; i < projs.length; i++){
      let obj = projs[i];
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
      ps.push(proj)
    }
    console.dir(ps)
    //figure out which projects to notify for
    for (let i = 0; i < ps.length; i++){
      let p = ps[i];
      let b = p.UpcomingBenchmark();
      if (p.completed) continue;
      //if the project is due soon, send a notification.
      if (p.SoonMeter() != ""){
        var notification = {
          title: 'Project' + p.name + ' due soon!',
          body:
          p.SoonMeter() + ' REMAINING' +
          '\nYou are '+ Math.trunc(p.progbar.num_done/p.progbar.benchmarks.length*100)+'% done with '+ p.name + '.' +
          '\nThe next benchmark you have to get done is: ' + p.UpcomingBenchmark().title + '.'
        }
        var myNotification = new window.Notification(notification.title, notification)
        // myNotification.onclick = () => {
        //   console.log('Notification clicked')
        // }
      }
      if (b.SoonMeter() != ""){
        var notification = {
          title: 'Benchmark' + b.title + ' due soon!',
          body: b.SoonMeter() + ' REMAINING to finish this benchmark!'
        }
        var myNotification = new window.Notification(notification.title, notification)
        // myNotification.onclick = () => {
        //   console.log('Notification clicked')
        // }
      }
    }
    console.log("notification checking finished.");
  }

}
