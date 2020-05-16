import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Project[];

  constructor() {}

  ngOnInit(): void {
    // this.todos = [
    //   {
    //     name:'Homework 7',
    //     category:'FOCS',
    //     due_date: new Date('2020-05-09T23:59:00'),
    //     order_matters:true,
    //     completed:false
    //   },
    //   {
    //     name:'Character Assignment',
    //     category:'3D Modeling',
    //     due_date: new Date('2020-05-20T23:59:00'),
    //     order_matters:true,
    //     completed:false
    //   },
    //   {
    //     name:'Dola\'s Birthday',
    //     category:'Family',
    //     due_date: new Date('2020-05-31T23:59:00'),
    //     order_matters:true,
    //     completed:false
    //   },
    // ];


    this.todos = [
      //First Project
      {
        name:'ProjectName',
        category:'CategoryName',
        due_date: new Date('2020-05-09T23:59:00'),
        order_matters:true,
        completed:false,
        progbar:{
          num_done:3,
          benchmarks:[
            {
              id:1,
              title:"Bench1",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:true,
              isnested:false,
              nested_bar:null
            },
            {
              id:2,
              title:"Bench2",
              due_date: new Date('2019-02-19T23:59:00'),
              completed:true,
              isnested:true,
              nested_bar:{
                parts:[
                  {
                    id:1,
                    name:"a",
                    completed:true
                  },
                  {
                    id:2,
                    name:"b",
                    completed:true
                  },
                  {
                    id:3,
                    name:"c",
                    completed:true
                  }
                ]
              }
            },
            {
              id:3,
              title:"Bench3",
              due_date: new Date('2019-02-20T23:59:00'),
              completed:true,
              isnested:false,
              nested_bar:null
            },
            {
              id:4,
              title:"Bench4",
              due_date: new Date('2019-02-21T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:5,
              title:"Bench5",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
          ]
        }
      },
      //Second Project
      {
        name:'ProjectName2',
        category:'CategoryName2',
        due_date: new Date('2020-06-09T23:59:00'),
        order_matters:true,
        completed:false,
        progbar:{
          num_done:0,
          benchmarks:[
            {
              id:1,
              title:"Bench1",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:2,
              title:"Bench2",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:3,
              title:"Bench3",
              due_date: new Date('2019-02-20T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:4,
              title:"Bench4",
              due_date: new Date('2019-02-21T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:5,
              title:"Bench5",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
          ]
        }
      },

      //project 3
      {
        name:'ProjectName3',
        category:'CategoryName3',
        due_date: new Date('2020-11-09T23:59:00'),
        order_matters:true,
        completed:false,
        progbar:{
          num_done:4,
          benchmarks:[
            {
              id:1,
              title:"Bench1",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:true,
              isnested:false,
              nested_bar:null
            },
            {
              id:2,
              title:"Bench2",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:true,
              isnested:false,
              nested_bar:null
            },
            {
              id:3,
              title:"Bench3",
              due_date: new Date('2019-02-20T23:59:00'),
              completed:true,
              isnested:false,
              nested_bar:null
            },
            {
              id:4,
              title:"Bench4",
              due_date: new Date('2019-02-21T23:59:00'),
              completed:true,
              isnested:false,
              nested_bar:null
            },
            {
              id:5,
              title:"Bench5",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:6,
              title:"Bench6",
              due_date: new Date('2019-02-23T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:7,
              title:"Bench7",
              due_date: new Date('2019-02-24T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:8,
              title:"Bench8",
              due_date: new Date('2019-02-25T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:9,
              title:"Bench9",
              due_date: new Date('2019-02-26T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:10,
              title:"Bench10",
              due_date: new Date('2019-02-27T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
          ]
          // ,
          // dance(){
          //   console.log("tennis ball");
          // }
        }
      },

      //project 4
      {
        name:'ProjectName4',
        category:'CategoryName4',
        due_date: new Date('2020-11-09T23:59:00'),
        order_matters:false,
        completed:false,
        progbar:{
          num_done:0,
          benchmarks:[
            {
              id:1,
              title:"Bench1",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:2,
              title:"Bench2",
              due_date: new Date('2019-02-18T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:3,
              title:"Bench3",
              due_date: new Date('2019-02-20T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:4,
              title:"Bench4",
              due_date: new Date('2019-02-21T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:5,
              title:"Bench5",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:6,
              title:"Bench6",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:7,
              title:"Bench7",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:8,
              title:"Bench8",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:9,
              title:"Bench9",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
            {
              id:10,
              title:"Bench10",
              due_date: new Date('2019-02-22T23:59:00'),
              completed:false,
              isnested:false,
              nested_bar:null
            },
          ]
        }
      }
    ]



    // //some debugging
    // let p = new ProgressBar;
    // // console.log(p.num_done);
    // // console.log(p.benchmarks.length);
    // // console.log(p.benchmarks[1].title);
    //
    // let proj = new Project;
    // proj.progbar = p;
    // console.log(proj instanceof Project);
    // console.log(proj.progbar instanceof ProgressBar);
    //
    //
    // //using constructors
    // this.todos =[proj,proj,proj];
  }

  deleteTodo(proj:Project){
    //Removes from UI
    //returns all todos that are not the specified id in the UI
    this.todos = this.todos.filter(t => t.name !== proj.name);
  }

  addTodo(proj:Project){
    console.log(proj);
    this.todos.push(proj);
  }
}
