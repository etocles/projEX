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
  @Output() markUpTo: EventEmitter<Bench> = new EventEmitter();
  @Output() markDownTo: EventEmitter<Bench> = new EventEmitter();

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
      'default':true,
      'is-done':this.bench.completed,
      'not-done':!this.bench.completed
    }
    return classes
  }

  onMark(bench){
    //toggle current bench state
    this.bench.completed = !this.bench.completed;
    //update rest of progress bar
    if(this.bench.completed)this.markUpTo.emit(this.bench);
    else this.markDownTo.emit(this.bench);
  }

  nestedMark(b:Bench){
    if (b.completed == true)this.markUpTo.emit(this.bench);
    else this.markDownTo.emit(this.bench);

  }

}
