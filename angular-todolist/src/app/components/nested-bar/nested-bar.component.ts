import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Bench, NestedBar, Part } from 'src/app/models/Todo';


@Component({
  selector: 'app-nested-bar',
  templateUrl: './nested-bar.component.html',
  styleUrls: ['./nested-bar.component.css']
})

export class NestedBarComponent implements OnInit {
  @Input() bench: Bench;
  @Output() markMsg: EventEmitter<Bench> = new EventEmitter();

  parts:Part[];

  constructor() { }

  ngOnInit(): void {
    this.parts = this.bench.nested_bar.miniBar;
  }

  setClasses(){
    let classes ={
      'default':true,
      'is-done':this.bench.completed,
      'not-done':!this.bench.completed
    }
    return classes
  }

  onMark(b:Bench){
    console.log("nested bar hello");
    this.bench.completed = !this.bench.completed;

    //send message to update everything previous to this benchmark
    this.markMsg.emit(this.bench);
  }

}
