import { Component, OnInit, Input } from '@angular/core';
import { ProgressBar, Bench } from 'src/app/models/Todo'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() pbar: ProgressBar;

  // benchmarks:Bench[];

  constructor() {
    // this.benchmarks = this.pbar.benchmarks;
  }

  ngOnInit(): void {
  }

}
