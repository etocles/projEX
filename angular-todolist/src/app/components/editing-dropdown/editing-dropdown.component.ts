import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Project, ProgressBar, Bench, NestedBar } from 'src/app/models/Todo';

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

  addBench(event){ //add a benchmark between two benchmarks
    //obtaining the id from the element
    var target = event.srcElement;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    let bench_insert = new Bench(-1, this.proj.due_date);
    bench_insert.title = "[Name Here]"
    this.benchmarks.splice(value,0,bench_insert)
    this.benchmarks = this.reID(this.benchmarks);
    this.benchmarks = this.updateCompleted(this.benchmarks);
    // console.log(this.benchmarks);
  }

  delBench(event){
    //obtaining the id from the element
    var target = event.srcElement;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.benchmarks = this.benchmarks.filter(t => t.id != value);
    this.benchmarks = this.reID(this.benchmarks);
    // console.log(this.benchmarks);
  }

  correlateBenchmarks(){
    //a little costly, but go through each benchmark, and:
    // if nested parts have been removed, remove them
    // if nested parts have been added/changed, modify them
    var benchmarksCopy = this.benchmarks;
    for (let i = 0; i < benchmarksCopy.length; i++){
      var b = benchmarksCopy[i];
      //bench isn't nested but needs to be
      if (!b.isnested){
        if(b.parts_summary!=null){
          console.log(b.title+"falls under case 1");
          var namesOfParts = b.parts_summary.split(",");
          namesOfParts = namesOfParts.filter(t => t.trim().length != 0);
          //sanity check
          if (namesOfParts.length ==0) continue;
          b.isnested = true;
          b.nested_bar = new NestedBar(namesOfParts.length);
          for (let n = 0; n < b.nested_bar.parts.length; n++){
            b.nested_bar.parts[n].name = namesOfParts[n];
            b.nested_bar.parts[n].completed = b.completed;
          }
          continue;
        }
      }
      else{
        //bench is nested but doesn't need to be
        if(b.parts_summary==""){
          console.log(b.title+"falls under case 2");
          b.isnested = false;
          b.nested_bar = null;
          continue;
        }
        //bench is nested but needs updating (length or content different)
        if (b.parts_summary != b.nested_bar.AllNames()){
          console.log(b.title+"falls under case 3");
          var namesOfParts = b.parts_summary.split(",");
          namesOfParts = namesOfParts.filter(t => t.trim().length != 0);
          //sanity check
          if (namesOfParts.length ==0) continue;
          b.isnested = true;
          b.nested_bar = new NestedBar(namesOfParts.length);
          for (let n = 0; n < b.nested_bar.parts.length; n++){
            b.nested_bar.parts[n].name = namesOfParts[n];
            b.nested_bar.parts[n].completed = b.completed;
          }
          continue;
        }
      }
    }
    return benchmarksCopy;
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
    //iterate through the benchmarks starting at the end
    for (let i = benchmarks.length-1; i >= 0 ; i--){
      if (benchmarks[i].completed) startCheckingCompleted = true;
      benchmarks[i].ToggleTo(startCheckingCompleted)
    }
    return benchmarks
  }

}
