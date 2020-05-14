import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, Bench, Part } from 'src/app/models/Todo'

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

    //otherwise, edit the components
    let benchmarksCopy = this.benchmarks;
    //make appropriate modifications
    this.bar.num_done++; //add one for the current bench
    for (var i of benchmarksCopy) {
        if (i.id > b.id) break;
        if (!i.completed){
          i.completed = true;
          this.bar.num_done++;
        }
        if (i.isnested){ //mark all children as complete
          for (let j = 0; j < i.nested_bar.parts.length; j++){
            i.nested_bar.parts[j].completed = true;
          }
        }
    }
    //apply changes
    this.benchmarks = benchmarksCopy;
  }

  markDownTo(b:Bench){
    //if the order doesn't matter, don't worry about updating the elements
    if(!this.proj.order_matters) return;

    //otherwise, edit the components
    let benchmarksCopy = this.benchmarks;
    //make appropriate modifications
    this.bar.num_done--; //subtracts one for the current bench
    for (var i of benchmarksCopy) {
        if (i.id > b.id && i.completed){
          if (i.completed){
            i.completed = false;
            this.bar.num_done--;
          }
          if (i.isnested){ //mark all children as incomplete
            for (let j = 0; j < i.nested_bar.parts.length; j++){
              i.nested_bar.parts[j].completed = false;
            }
          }
        }
    }
    //apply changes
    this.benchmarks = benchmarksCopy;
  }

}
