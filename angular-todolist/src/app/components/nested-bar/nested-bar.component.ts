import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Bench, NestedBar, Part } from 'src/app/models/Todo';


@Component({
  selector: 'app-nested-bar',
  templateUrl: './nested-bar.component.html',
  styleUrls: ['./nested-bar.component.css']
})
export class NestedBarComponent implements OnInit {
  @Input() bench: Bench;

  parts:Part[];

  constructor() { }

  ngOnInit(): void {
    this.parts = this.bench.nested_bar.miniBar;
  }

  setClasses(){
    let classes ={
      '.complete':this.bench.completed
    }
    return classes
  }

}
