import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Project, ProgressBar, Bench, NestedBar } from 'src/app/models/ProjectClasses';

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
  today:Date;

  constructor() { }

  ngOnInit(): void {
    this.bar = this.proj.progbar;
    this.benchmarks = this.bar.benchmarks;
    this.today = new Date(Date.now());
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

  //helper functions

  correlateBenchmarks(){
    //a little costly, but go through each benchmark, and:
    // if nested parts have been removed, remove them
    // if nested parts have been added/changed, modify them
    // make sure that the project has the same due date as the last benchmark
    var benchmarksCopy = this.benchmarks;
    for (let i = 0; i < benchmarksCopy.length; i++){
      var b = benchmarksCopy[i];
      //bench isn't nested but needs to be
      if (!b.isnested){
        if(b.parts_summary!=null){
          // console.log(b.title+"falls under case 1");
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
          // console.log(b.title+"falls under case 2");
          b.isnested = false;
          b.nested_bar = null;
          continue;
        }
        //bench is nested but needs updating (length or content different)
        if (b.parts_summary != b.nested_bar.AllNames()){
          // console.log(b.title+"falls under case 3");
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

    //grab the furthestmost due-date, and update the project's duedate to that
    var dateSetter = [...benchmarksCopy];
    dateSetter.sort(function(a,b){
      if (a.due_date > b.due_date) return -1; //first argument is lesser
      if (a.due_date < b.due_date) return 1; //first argument is greater (placed after second one)
      return 0; //if a==b
    })
    // console.log(dateSetter[0].title, dateSetter[0].due_date);
    var refDate = new Date(dateSetter[0].due_date);
    // console.log("Override happening: ",refDate > this.proj.due_date);
    // console.log("old due date:", this.proj.due_date);
    if (refDate > this.proj.due_date) this.proj.due_date = refDate;
    // console.log("new due date:", this.proj.due_date);

    return benchmarksCopy;
  }

  timeAdjust(date,event):Date{
    date = new Date(date); //original benchmark due-date, unchanged
    // TODO: add something that auto-initializes to 11:59 pm if time breaks
    if (event.includes("-")){ //date was changed
      var adjust = new Date(event);
      adjust.setHours(date.getHours(), date.getMinutes());
      return adjust;
    }
    if (event.includes(":")){ //date was changed
      let info = event.split(":");
      date.setHours( info[0],info[1] ); //HH:mm
      return date;
    }
  }

  dateOverride(event){
    var dateSetter = [...this.benchmarks];
    //sort it so that the 0th index is the furthestmost date
    dateSetter.sort(function(a,b){
      if (a.due_date > b.due_date) return -1; //first argument is lesser
      if (a.due_date < b.due_date) return 1; //first argument is greater (placed after second one)
      return 0; //if a==b
    })
    let refDate = new Date(dateSetter[0].due_date)
    let newProjDate = new Date(event.srcElement.value);
    // console.log(dateSetter[0].title, refDate);
    // console.log("Confirm should trigger: ",refDate.getTime() > newProjDate.getTime());

    // console.dir(newProjDate);
    // console.dir(refDate);
    // console.dir(this.proj.due_date);
    //
    // console.log(refDate > newProjDate);

    if (refDate.getTime() > newProjDate.getTime()){
      // console.log("confirm did trigger");
      let ans = confirm("The date that you have chosen is earlier than (a benchmarks) due date. \nWould you like to change all of the benchmarks to have this due date?");
      if (ans == false) return; //if user clicks cancel, abandon changing project duedate.
      for (let i = 0; i < this.benchmarks.length; i++){
        this.benchmarks[i].due_date = newProjDate;
      }
    }
    this.proj.due_date = newProjDate;
  }

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
