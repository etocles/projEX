import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Bench, NestedBar } from 'src/app/models/Todo';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {
  @Input() bench: Bench;
  @Output() markUpTo: EventEmitter<any> = new EventEmitter();

  nested:boolean;
  nested_bar:NestedBar;

  constructor() { }

  ngOnInit(): void {
    this.nested = this.bench.isnested;
    if(this.nested){
      this.nested_bar=this.bench.nested_bar;
    }
  }

  setClasses(){
    let classes ={
      todo:true,
      'checked':this.bench.completed
    }
    return classes
  }

  onMark(){
    // console.log("tadah!"+this.bench.title); debugging
    this.bench.completed = true;
    this.markUpTo.emit(this.bench);
    //broadcast the markUpTo message downwards
  }

}
