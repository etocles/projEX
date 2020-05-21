import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Project, ProgressBar, Bench } from 'src/app/models/Todo';

@Component({
  selector: 'app-editing-dropdown',
  templateUrl: './editing-dropdown.component.html',
  styleUrls: ['./editing-dropdown.component.css']
})
export class EditingDropdownComponent implements OnInit {
  @Input() proj: Project;
  @Output() updateBar: EventEmitter<Bench[]> = new EventEmitter();

  bar:ProgressBar;
  benchmarks:Bench[];

  constructor() { }

  ngOnInit(): void {
    this.bar = this.proj.progbar;
    this.benchmarks = this.bar.benchmarks;
  }

  drop(event: CdkDragDrop<Bench>) {
    //rearranges the list to move the benchmark
    moveItemInArray(this.benchmarks, event.previousIndex, event.currentIndex);
    // update ids of the benchmarks
    this.benchmarks = this.reID(this.benchmarks);
    // update completed values
    this.benchmarks = this.updateCompleted(this.benchmarks);
    // update the rest of the bar (rounding corners where needed)
    this.updateBar.emit(this.benchmarks);
  }


  //helper functions
  reID(benchmarks):Bench[]{
    for (let i = 0; i < benchmarks.length; i++){
      benchmarks[i].id = i;
    }
    return benchmarks;
  }

  updateCompleted(benchmarks):Bench[]{
    var startCheckingCompleted=false;
    for (let i = benchmarks.length-1; i >= 0 ; i--){
      if (benchmarks[i].completed) startCheckingCompleted = true;
      benchmarks[i].completed = startCheckingCompleted;
    }
    return benchmarks
  }

  addBench(event){ //add a benchmark between two benchmarks
    //obtaining the id from the element
    var target = event.srcElement;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.benchmarks.splice(value,0,new Bench(0, new Date(Date.now())) )
    this.benchmarks = this.reID(this.benchmarks);
    this.benchmarks = this.updateCompleted(this.benchmarks);
    console.log(this.benchmarks);
  }

  delBench(event){
    //obtaining the id from the element
    var target = event.srcElement;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.benchmarks = this.benchmarks.filter(t => t.id != value);
    this.benchmarks = this.reID(this.benchmarks);
    console.log(this.benchmarks);

  }

}
