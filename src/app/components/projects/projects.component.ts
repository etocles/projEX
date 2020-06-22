import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Project, ProgressBar, NestedBar, Part } from '../../models/ProjectClasses';
import { AddProjectComponent }  from '../add-project/add-project.component';
import { IpcRenderer, app } from 'electron';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @ViewChild(AddProjectComponent)
  private addComponent: AddProjectComponent;

  projects:Project[];
  notify_type: string;
  search_filter: string;

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
    // this.revertToBackup();

    this.search_filter = '';
    if(localStorage.getItem("userPrefs") == null){ //on first bootup, initialize default user preferences
      //default user preferences:
      let prefs = {"sort_type":"by_due_date",
                   "view_mode":"light_mode",
                   "notification_frequency":"60",
                   "notification_type":"proj_and_bench"};
      localStorage.setItem("userPrefs",JSON.stringify(prefs));
    }
    /*     PULL STUFF FROM STORAGE     */
    let userPrefs = JSON.parse(localStorage.getItem("userPrefs"));
    /* TOGGLE LIGHTMODE  DARKMODE */
    if (userPrefs.view_mode == "light_mode"){
      document.documentElement.style.setProperty('--name-color', 'black');
      document.documentElement.style.setProperty('--cat-color', '#8794a3');
      document.documentElement.style.setProperty('--percent-color', '#828282');
      document.documentElement.style.setProperty('--background-color', '#aeaeae');
      document.documentElement.style.setProperty('--shadow', '#74747e');
      document.documentElement.style.setProperty('--card', '#f4f4f4');
      document.documentElement.style.setProperty('--gradient-bg', '#aaaaaa');
      document.documentElement.style.setProperty('--bench-text', '#353535 ');
      document.documentElement.style.setProperty('--darkened-bench-text', 'var(--bench-text)');
    }
    else if(userPrefs.view_mode = "dark_mode"){
      document.documentElement.style.setProperty('--name-color', '#cecece');
      document.documentElement.style.setProperty('--cat-color', 'white');
      document.documentElement.style.setProperty('--percent-color', 'white');
      document.documentElement.style.setProperty('--background-color', '#3b3b3b');
      document.documentElement.style.setProperty('--shadow', 'black');
      document.documentElement.style.setProperty('--card', '#515151');
      document.documentElement.style.setProperty('--gradient-bg', '#797979');
      document.documentElement.style.setProperty('--bench-text', '#eeeeee ');
      document.documentElement.style.setProperty('--darkened-bench-text', '#353535');
    }

    /* NOTIFICATION TYPE */
    this.notify_type = userPrefs.notification_type;
    /* LIST OF PROJECTS */
    this.projects = [];
    if(localStorage.getItem('projArray') == "undefined") return; //on first bootup, the projects array will be empty
    //grabs the projects from storage
    let projJSON = localStorage.getItem('projArray');
    let pArray = JSON.parse(projJSON);
    //convert every JSON project to an instance of Project
    for (let i = 0; i < pArray.length; i++){
      this.projects.push(this.JSON_TO_PROJECT(pArray[i]));
    }
    /* SORT PROJECTS */
    this.sortProjects(userPrefs.sort_type);

    /* START NOTIFICATIONS AT USER DEFINED INTERVAL*/
    setInterval(this.NotificationService, userPrefs.notification_frequency * 60 * 1000);
  }

  deleteProj(proj:Project){
    //Removes from UI
    //returns all projects that are not the specified id in the UI
    this.projects = this.projects.filter(p => p.name !== proj.name);

    // let archivedProjects = JSON.parse(localStorage.getItem("archivedProjects"));
    if (localStorage.getItem("archivedProjects") == null){
      let archivedProjects = [proj];
      localStorage.setItem("archivedProjects", JSON.stringify(archivedProjects));
    }
    else{
      let archivedProjects = JSON.parse(localStorage.getItem("archivedProjects"));
      archivedProjects.unshift(proj);
      localStorage.setItem("archivedProjects", JSON.stringify(archivedProjects));
    }

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

  overflowFunction(){
    // var el = document.getElementsByClassName("default");
    // for (let i = 0; i < el.length; i++){
    //   let e = el[i];
    //   var isOverflowing = e.clientWidth < e.scrollWidth;
    //   if (isOverflowing) {
    //       e.innerHTML = e.title.substr(0,1)+"...";
    //      // e.innerHTML = "";
    //      // console.log(e.title);
    //      // console.log("client width, height: ", e.clientWidth, e.clientHeight);
    //      // console.log("scroll width, height: ", e.scrollWidth, e.scrollHeight);
    //   }
    //   else e.innerHTML = e.title;
    // }
  }

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
      case "completed_first":
        projectsCopy.sort(function(a,b){
          if (a.completed && !b.completed) return 1;
          if (!a.completed && b.completed) return -1;
          if (!a.completed && !b.completed && a.due_date < b.due_date) return -1;
          else return 0;
        })
        break;
      case "not_completed_first":
        projectsCopy.sort(function(a,b){
          if (a.completed && !b.completed) return -1;
          if (!a.completed && b.completed) return 1;
          if (!a.completed && !b.completed && a.due_date < b.due_date) return -1;
          else return 0;
        })
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
    proj1.due_date.setHours(23);
    proj1.due_date.setMinutes(59);
    proj1.progbar = new ProgressBar(5,proj1.due_date);
    proj1.progbar.benchmarks[1].isnested = true;
    proj1.progbar.benchmarks[1].nested_bar = new NestedBar(3);
    proj1.progbar.benchmarks[1].PartSummary();
    proj1.progbar.ToggleBenchmark(0);
    proj1.progbar.ToggleBenchmark(1);

    let proj2 = new Project('Character','3D Modeling',5);
    proj2.due_date.setDate(proj2.due_date.getDate()+1)

    let proj3 = new Project('ProjectName3','Category3',10);
    proj3.due_date.setDate(proj3.due_date.getDate()+3)
    proj3.progbar.MarkUpTo(proj3.progbar.benchmarks[4]);

    let proj4 = new Project('ProjectName4','Category4',10);
    proj4.due_date.setDate(proj4.due_date.getDate()+10)
    proj4.order_matters = false;
    proj4.progbar.benchmarks[5].isnested = true;
    proj4.progbar.benchmarks[5].nested_bar = new NestedBar(5);
    proj4.progbar.benchmarks[5].PartSummary();

    let projs  = [proj1,proj2,proj3,proj4];
    localStorage.setItem('projArray',JSON.stringify(projs));
  }

  NotificationService(){
    //because this is working at the window context, it has to remake the projects array and then iterate through it to send notifications
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
    //figure out which projects to notify for
    for (let i = 0; i < ps.length; i++){
      let p = ps[i];
      let b = p.UpcomingBenchmark();
      if (p.completed) continue;
      let pSoon = p.SoonMeter().includes("HOURS") || p.SoonMeter().includes("MINUTES");
      let bSoon = b.SoonMeter().includes("HOURS") || b.SoonMeter().includes("MINUTES");
      var notification = {
        timeoutType: 'never',
        icon: '../../PJX_5.png',
        title: '',
        body: ''
      }
      let myNotification;
      if (pSoon && this.notify_type == "proj"){
        notification.title = `Project ${p.name} due soon!`;
        notification.body = p.SoonMeter() + ' REMAINING' +
        '\nYou are '+ Math.trunc(p.progbar.num_done/p.progbar.benchmarks.length*100)+'% done with '+ p.name + '.' +
        '\nThe next benchmark you have to get done is: ' + b.title + '.'
        myNotification = new window.Notification(notification.title, notification)
        //try pushing this to an array
      }
      if (bSoon && this.notify_type == "bench"){
        notification.title = `Benchmark ${b.title} of ${p.name} due soon!`;
        notification.body = b.SoonMeter() + ' REMAINING to finish this benchmark!'
        myNotification = new window.Notification(notification.title, notification)
        //try pushing this to an array
      }
      if (bSoon && this.notify_type == "proj_and_bench"){
        notification.title = `Project ${p.name} has a pressing benchmark!`;
        notification.body = (p.SoonMeter()=="") ? `The next benchmark you have to get done is: ${b.title}.` : `${p.name} is due in ${p.SoonMeter()} \n` + `The next benchmark you have to get done is: ${b.title}.`
        myNotification = new window.Notification(notification.title, notification)
        //try pushing this to an array
      }
      // if(!pSoon || !bSoon) continue;

      myNotification.onclick = () => { this.ipc.send("notifClicked"); }
    }
  }

}
