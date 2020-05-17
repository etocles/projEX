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




    // this.todos = [
    //   //First Project
    //   {
    //     name:'ProjectName',
    //     category:'CategoryName',
    //     due_date: new Date('2020-05-09T23:59:00'),
    //     order_matters:true,
    //     completed:false,
    //     progbar:{
    //       num_done:3,
    //       benchmarks:[
    //         {
    //           id:1,
    //           title:"Bench1",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:true,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:2,
    //           title:"Bench2",
    //           due_date: new Date('2019-02-19T23:59:00'),
    //           completed:true,
    //           isnested:true,
    //           nested_bar:{
    //             parts:[
    //               {
    //                 id:1,
    //                 name:"a",
    //                 completed:true
    //               },
    //               {
    //                 id:2,
    //                 name:"b",
    //                 completed:true
    //               },
    //               {
    //                 id:3,
    //                 name:"c",
    //                 completed:true
    //               }
    //             ]
    //           }
    //         },
    //         {
    //           id:3,
    //           title:"Bench3",
    //           due_date: new Date('2019-02-20T23:59:00'),
    //           completed:true,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:4,
    //           title:"Bench4",
    //           due_date: new Date('2019-02-21T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:5,
    //           title:"Bench5",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //       ]
    //     }
    //   },
    //   //Second Project
    //   {
    //     name:'ProjectName2',
    //     category:'CategoryName2',
    //     due_date: new Date('2020-06-09T23:59:00'),
    //     order_matters:true,
    //     completed:false,
    //     progbar:{
    //       num_done:0,
    //       benchmarks:[
    //         {
    //           id:1,
    //           title:"Bench1",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:2,
    //           title:"Bench2",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:3,
    //           title:"Bench3",
    //           due_date: new Date('2019-02-20T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:4,
    //           title:"Bench4",
    //           due_date: new Date('2019-02-21T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:5,
    //           title:"Bench5",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //       ]
    //     }
    //   },
    //
    //   //project 3
    //   {
    //     name:'ProjectName3',
    //     category:'CategoryName3',
    //     due_date: new Date('2020-11-09T23:59:00'),
    //     order_matters:true,
    //     completed:false,
    //     progbar:{
    //       num_done:4,
    //       benchmarks:[
    //         {
    //           id:1,
    //           title:"Bench1",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:true,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:2,
    //           title:"Bench2",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:true,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:3,
    //           title:"Bench3",
    //           due_date: new Date('2019-02-20T23:59:00'),
    //           completed:true,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:4,
    //           title:"Bench4",
    //           due_date: new Date('2019-02-21T23:59:00'),
    //           completed:true,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:5,
    //           title:"Bench5",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:6,
    //           title:"Bench6",
    //           due_date: new Date('2019-02-23T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:7,
    //           title:"Bench7",
    //           due_date: new Date('2019-02-24T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:8,
    //           title:"Bench8",
    //           due_date: new Date('2019-02-25T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:9,
    //           title:"Bench9",
    //           due_date: new Date('2019-02-26T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:10,
    //           title:"Bench10",
    //           due_date: new Date('2019-02-27T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //       ]
    //       // ,
    //       // dance(){
    //       //   console.log("tennis ball");
    //       // }
    //     }
    //   },
    //
    //   //project 4
    //   {
    //     name:'ProjectName4',
    //     category:'CategoryName4',
    //     due_date: new Date('2020-11-09T23:59:00'),
    //     order_matters:false,
    //     completed:false,
    //     progbar:{
    //       num_done:0,
    //       benchmarks:[
    //         {
    //           id:1,
    //           title:"Bench1",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:2,
    //           title:"Bench2",
    //           due_date: new Date('2019-02-18T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:3,
    //           title:"Bench3",
    //           due_date: new Date('2019-02-20T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:4,
    //           title:"Bench4",
    //           due_date: new Date('2019-02-21T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:5,
    //           title:"Bench5",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:6,
    //           title:"Bench6",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:7,
    //           title:"Bench7",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:8,
    //           title:"Bench8",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:9,
    //           title:"Bench9",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //         {
    //           id:10,
    //           title:"Bench10",
    //           due_date: new Date('2019-02-22T23:59:00'),
    //           completed:false,
    //           isnested:false,
    //           nested_bar:null
    //         },
    //       ]
    //     }
    //   }
    // ]
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
