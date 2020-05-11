import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, Bench } from 'src/app/models/Todo'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() proj: Project;

  bar: ProgressBar;
  benchmarks:Bench[];

  constructor() {
  }

  ngOnInit(): void {
    this.bar = this.proj.progbar;
    this.benchmarks = this.proj.progbar.benchmarks;
  }

  markUpTo(b:Bench){
    //if the order doesn't matter, don't worry about updating the elements
    if(!this.proj.order_matters) return;
    //if the previous elements have already been checked, don't uncheck them
    if(b.completed == false) return;
    console.log("recieved: " + b.title + " " + b.completed);

    //otherwise, edit the components
    let benchmarksCopy = this.benchmarks;
    //make appropriate modifications
    for (var i of benchmarksCopy) {
        if (i.id > b.id) break;
        i.completed = true;
    }
    //apply changes
    this.benchmarks = benchmarksCopy;

    console.log("testing to see changes were carried through:");
    for (var i of this.benchmarks) {
        console.log(i.title + " " + i.completed);
    }
    console.log("debugging finished");
  }

}
