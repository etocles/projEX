import { Component, OnInit } from '@angular/core';
import { ProgressBar } from 'src/app/models/Todo'

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  // @Input() pbar: ProgressBar;

  constructor() { }

  ngOnInit(): void {
  }

}
