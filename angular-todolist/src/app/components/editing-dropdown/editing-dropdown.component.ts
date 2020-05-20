import { Component, OnInit, Input } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { Project, ProgressBar, Bench } from 'src/app/models/Todo';

@Component({
  selector: 'app-editing-dropdown',
  templateUrl: './editing-dropdown.component.html',
  styleUrls: ['./editing-dropdown.component.css']
})
export class EditingDropdownComponent implements OnInit {
  @Input() proj: Project;

  bar:ProgressBar;
  benchmarks:Bench[];

  constructor() { }

  ngOnInit(): void {
    this.bar = this.proj.progbar;
    this.benchmarks = this.bar.benchmarks;
  }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.benchmarks, event.previousIndex, event.currentIndex);
  // }

}
