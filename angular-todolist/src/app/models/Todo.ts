//Project
export class Project{
  name:string; //name of the assignment
  category:string;
  dueDate: Date;
  order_matters:boolean; //commented until implementation
  completed:boolean;
  // progbar:ProgressBar; //commented until implementation
}

export class ProgressBar{
  benchmarks:Bench[];
  num_done:number;
}

export class Bench{
  id:number //the 3rd benchmark in a project will have id=3
  title:string; //title of this benchmark
  dueDate: Date; //some have duedates
  isdone:boolean;

  //nested progress bar
  isnested:boolean;
  nested_bar:NestedBar;
}

export class NestedBar{
  miniBar: Part[];
}

export class Part{
  id:number;
  name:string;
  completed:boolean;
}

//
// //sample class creation
// let proj:Project = {
//   name:'ProjectName',
//   category:'CategoryName',
//   dueDate: new Date('2020-05-09T23:59:00'),
//   order_matters:false,
//   completed:false,
//   progbar:{
//     num_done:3,
//     benchmarks:[
//       {
//         id:1,
//         title:"Bench1",
//         dueDate: new Date('2019-02-18T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:2,
//         title:"Bench2",
//         dueDate: new Date('2019-02-19T23:59:00'),
//         isdone:true,
//         isnested:true,
//         nested_bar:{
//           miniBar:[
//             {
//               id:1,
//               name:"a",
//               completed:true
//             },
//             {
//               id:2,
//               name:"b",
//               completed:true
//             },
//             {
//               id:3,
//               name:"c",
//               completed:true
//             }
//           ]
//         }
//       },
//       {
//         id:3,
//         title:"Bench3",
//         dueDate: new Date('2019-02-20T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:4,
//         title:"Bench4",
//         dueDate: new Date('2019-02-21T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:5,
//         title:"Bench5",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//     ]
//   }
// };
//
// let proj2:Project = {
//   name:'ProjectName2',
//   category:'CategoryName2',
//   dueDate: new Date('2020-06-09T23:59:00'),
//   order_matters:false,
//   completed:false,
//   progbar:{
//     num_done:1,
//     benchmarks:[
//       {
//         id:1,
//         title:"Bench2",
//         dueDate: new Date('2019-02-18T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:2,
//         title:"Bench2",
//         dueDate: new Date('2019-02-18T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:3,
//         title:"Bench3",
//         dueDate: new Date('2019-02-20T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:4,
//         title:"Bench4",
//         dueDate: new Date('2019-02-21T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:5,
//         title:"Bench5",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//     ]
//   }
// };
//
// let proj3:Project = {
//   name:'ProjectName3',
//   category:'CategoryName3',
//   dueDate: new Date('2020-11-09T23:59:00'),
//   order_matters:false,
//   completed:false,
//   progbar:{
//     num_done:4,
//     benchmarks:[
//       {
//         id:1,
//         title:"Bench2",
//         dueDate: new Date('2019-02-18T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:2,
//         title:"Bench2",
//         dueDate: new Date('2019-02-18T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:3,
//         title:"Bench3",
//         dueDate: new Date('2019-02-20T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:4,
//         title:"Bench4",
//         dueDate: new Date('2019-02-21T23:59:00'),
//         isdone:true,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:5,
//         title:"Bench5",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:6,
//         title:"Bench6",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:7,
//         title:"Bench7",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:8,
//         title:"Bench8",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:9,
//         title:"Bench9",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//       {
//         id:10,
//         title:"Bench10",
//         dueDate: new Date('2019-02-22T23:59:00'),
//         isdone:false,
//         isnested:false,
//         nested_bar:new NestedBar()
//       },
//     ]
//   }
// };
