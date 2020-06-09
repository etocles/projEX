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
    this.bar.num_done++; //add one for the current bench
    if(!this.proj.order_matters){
      this.updateDB.emit()
      return;
    }
    this.bar.MarkUpTo(b);
    this.updateDB.emit();
  }

  markDownTo(b:Bench){
    this.bar.num_done--; //subtracts one for the current bench
    if(!this.proj.order_matters){
      this.updateDB.emit()
      return;
    }
    this.bar.MarkDownTo(b);
    this.updateDB.emit();
  }

  outputBubbler(){
    this.updateDB.emit();
  }

}
