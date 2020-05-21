//Project
export class Project{
  name:string; //name of the assignment
  category:string;
  due_date: Date;
  order_matters:boolean; //commented until implementation
  completed:boolean;
  progbar:ProgressBar; //commented until implementation

  constructor(name:string, cat:string, length:number){
    this.name = name;
    this.category = cat;
    this.due_date = new Date(Date.now());
    this.order_matters = true;
    this.completed = false;
    this.progbar = new ProgressBar(length,this.due_date);
  }
}

export class ProgressBar{
  benchmarks:Bench[];
  num_done:number;

  constructor(length:number,date:Date){
    this.benchmarks=[new Bench(-1,date)];
    for (let i = 0; i < length; i++){
      this.benchmarks.push(new Bench(i,date));
    }
    this.benchmarks.shift();
    this.num_done = 0;
  }

  MarkUpTo(b:Bench):void{
    //otherwise, edit the components
    let benchmarksCopy = this.benchmarks;
    //make appropriate modifications
    for (var i of benchmarksCopy) {
        if (i.id > b.id) break;
        if (!i.completed){
          this.num_done++;
          i.ToggleTo(true);
        }
    }
    //apply changes
    this.benchmarks = benchmarksCopy;
  }

  MarkDownTo(b:Bench):void{
    //otherwise, edit the components
    let benchmarksCopy = this.benchmarks;
    //make appropriate modifications
    for (var i of benchmarksCopy) {
        if (i.id > b.id && i.completed){
          this.num_done--;
          i.ToggleTo(false);
        }
    }
    //apply changes
    this.benchmarks = benchmarksCopy;
  }

  ToggleBenchmark(index:number, state = true):void{ //manual toggling for projects where order doesn't matter
    //if completing a benchmark, state is true
    if (state){
      this.num_done++;
      this.benchmarks[index].ToggleTo(state);
    }
    //if uncompleting a benchmark, state is false
    else{
      this.num_done--;
      this.benchmarks[index].ToggleTo(state);
    }
  }
}

export class Bench{
  id:number //the 3rd benchmark in a project will have id=3
  title:string; //title of this benchmark
  due_date: Date; //some have duedates
  completed:boolean;

  //nested progress bar
  isnested:boolean;
  nested_bar:NestedBar;
  parts_summary:string;

  constructor(id:number,date:Date){
    this.id = id;
    this.title = "Bench"+this.id;
    this.due_date = date; // TODO: DATE NEEDS TO BE ADDED TO CONSTRUCTOR
    this.completed = false;
    this.isnested = false;
    this.nested_bar = null;
    this.parts_summary = null;
  }

  ToggleTo(state:boolean):void{
    //this should only be called through the ProgressBar's CompleteBenchmark function
    this.completed = state;
    if (this.isnested){
      this.nested_bar.ToggleAll(state);
    }
  }

  CorrelateParts(){
    //sets the parts summary equal to the names of all the nested bar's parts.
    //If there are none, it will return an empty string
    let s = "";
    if (!this.isnested) return s;
    for (let i = 0; i< this.nested_bar.parts.length; i++){
      s+=this.nested_bar.parts[i].name+",";
    }
    s = s.substring(0, s.length - 1);
    this.parts_summary= s;
  }
}

export class NestedBar{
  parts: Part[];

  constructor(length:number){
    this.parts = [new Part(-1)];
    for (let i = 0; i < length; i++){
      this.parts.push(new Part(i));
    }
    this.parts.shift();
  }

  ToggleAll(state:boolean):void{
    for (let i = 0; i< this.parts.length; i++){
      this.parts[i].Toggle(state);
    }
  }
}

export class Part{
  id:number;
  name:string;
  completed:boolean;

  constructor(n:number){
    this.name = String.fromCharCode(97 + n);
    this.id = n;
    this.completed = false;
  }

  Toggle(state:boolean):void{
    this.completed = state;
  }
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
