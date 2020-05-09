import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProgressBar, Bench } from 'src/app/models/Todo'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() bar: ProgressBar;

  benchmarks:Bench[];

  constructor() {
  }

  ngOnInit(): void {
    this.benchmarks = this.bar.benchmarks;
  }

}
