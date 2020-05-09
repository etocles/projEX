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


  //   this.todos = [
  //     //First Project
  //     {
  //       name:'ProjectName',
  //       category:'CategoryName',
  //       dueDate: new Date('2020-05-09T23:59:00'),
  //       order_matters:false,
  //       completed:false,
  //       progbar:{
  //         num_done:3,
  //         benchmarks:[
  //           {
  //             id:1,
  //             title:"Bench1",
  //             dueDate: new Date('2019-02-18T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:2,
  //             title:"Bench2",
  //             dueDate: new Date('2019-02-19T23:59:00'),
  //             isdone:true,
  //             isnested:true,
  //             nested_bar:{
  //               miniBar:[
  //                 {
  //                   id:1,
  //                   name:"a",
  //                   completed:true
  //                 },
  //                 {
  //                   id:2,
  //                   name:"b",
  //                   completed:true
  //                 },
  //                 {
  //                   id:3,
  //                   name:"c",
  //                   completed:true
  //                 }
  //               ]
  //             }
  //           },
  //           {
  //             id:3,
  //             title:"Bench3",
  //             dueDate: new Date('2019-02-20T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:4,
  //             title:"Bench4",
  //             dueDate: new Date('2019-02-21T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:5,
  //             title:"Bench5",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //         ]
  //       }
  //     },
  //     //Second Project
  //     {
  //       name:'ProjectName2',
  //       category:'CategoryName2',
  //       dueDate: new Date('2020-06-09T23:59:00'),
  //       order_matters:false,
  //       completed:false,
  //       progbar:{
  //         num_done:1,
  //         benchmarks:[
  //           {
  //             id:1,
  //             title:"Bench2",
  //             dueDate: new Date('2019-02-18T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:2,
  //             title:"Bench2",
  //             dueDate: new Date('2019-02-18T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:3,
  //             title:"Bench3",
  //             dueDate: new Date('2019-02-20T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:4,
  //             title:"Bench4",
  //             dueDate: new Date('2019-02-21T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:5,
  //             title:"Bench5",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //         ]
  //       }
  //     },
  //
  //     //project 3
  //     {
  //       name:'ProjectName3',
  //       category:'CategoryName3',
  //       dueDate: new Date('2020-11-09T23:59:00'),
  //       order_matters:false,
  //       completed:false,
  //       progbar:{
  //         num_done:4,
  //         benchmarks:[
  //           {
  //             id:1,
  //             title:"Bench2",
  //             dueDate: new Date('2019-02-18T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:2,
  //             title:"Bench2",
  //             dueDate: new Date('2019-02-18T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:3,
  //             title:"Bench3",
  //             dueDate: new Date('2019-02-20T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:4,
  //             title:"Bench4",
  //             dueDate: new Date('2019-02-21T23:59:00'),
  //             isdone:true,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:5,
  //             title:"Bench5",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:6,
  //             title:"Bench6",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:7,
  //             title:"Bench7",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:8,
  //             title:"Bench8",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:9,
  //             title:"Bench9",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //           {
  //             id:10,
  //             title:"Bench10",
  //             dueDate: new Date('2019-02-22T23:59:00'),
  //             isdone:false,
  //             isnested:false,
  //             nested_bar:new NestedBar()
  //           },
  //         ]
  //       }
  //     }
  //   ]
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
