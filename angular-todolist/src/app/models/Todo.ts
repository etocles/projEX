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
  dueDate: Date;
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
