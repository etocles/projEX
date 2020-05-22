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
  @Input() benchmarks: Bench[];

  bar: ProgressBar;

  constructor() {
  }

  ngOnInit(): void {
    this.bar = this.proj.progbar;
  }

  markUpTo(b:Bench){
    this.bar.num_done++; //add one for the current bench
    if(!this.proj.order_matters) return;
    this.bar.MarkUpTo(b);
  }

  markDownTo(b:Bench){
    this.bar.num_done--; //subtracts one for the current bench
    if(!this.proj.order_matters) return;
    this.bar.MarkDownTo(b);
  }

  numDoneRecount(){ //costly, but a necessary catch-all reset
    var temp_num_done = 0;
    for (let i = 0; i < this.bar.benchmarks.length; i++){
      if (this.bar.benchmarks[i].completed) temp_num_done++;
    }
    this.bar.num_done = temp_num_done;
  }

}
