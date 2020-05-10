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
    this.benchmarks = this.bar.benchmarks;
  }

  markUpTo(b:Bench){
    //if the order doesn't matter, don't worry about updating the elements
    if(!proj.order_matters) return;
    //otherwise, edit the components
    let benchmarksCopy = this.benchmarks;
    //make appropriate modifications
    for (var i of benchmarksCopy) {
        if (i.id > b.id) break;
        i.completed = true;
    }
    //apply changes
    this.benchmarks = benchmarksCopy;
  }

}
