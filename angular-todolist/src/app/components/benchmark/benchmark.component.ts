import { Component, OnInit, Input } from '@angular/core';
import { Bench } from 'src/app/models/Todo'

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {
  @Input() bench: Bench;

  constructor() { }

  ngOnInit(): void {
  }

}
