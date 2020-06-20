import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, Bench, Part } from 'src/app/models/ProjectClasses'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() proj: Project;
  @Input() benchmarks: Bench[];
  @Output() updateDB: EventEmitter<any> = new EventEmitter();

  bar: ProgressBar;

  constructor() {
  }

  ngOnInit(): void {
    this.bar = this.proj.progbar;
  }

  markUpTo(b:Bench){
    if(this.proj.order_matters){
      this.bar.MarkUpTo(b);
    }
    this.bar.numDoneRecount();
    this.updateDB.emit();
  }

  markDownTo(b:Bench){
    if(this.proj.order_matters){
      this.bar.MarkDownTo(b);
    }
    this.bar.numDoneRecount();
    this.updateDB.emit();
  }

  outputBubbler(){
    this.updateDB.emit();
  }

}
