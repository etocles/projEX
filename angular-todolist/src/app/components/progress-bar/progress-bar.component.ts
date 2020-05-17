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
    this.bar.num_done++; //add one for the current bench
    if(!this.proj.order_matters) return;
    this.bar.MarkUpTo(b);
  }

  markDownTo(b:Bench){
    this.bar.num_done--; //subtracts one for the current bench
    if(!this.proj.order_matters) return;
    this.bar.MarkDownTo(b);
  }

}
