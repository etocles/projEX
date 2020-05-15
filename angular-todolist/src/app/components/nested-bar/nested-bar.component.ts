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
  @Output() nestedMsg: EventEmitter<Bench> = new EventEmitter();

  parts:Part[];

  constructor() { }

  ngOnInit(): void {
    this.parts = this.bench.nested_bar.parts;
  }

  setClasses(){
    let classes ={
      'default':true,
      'is-done':this.bench.completed,
      'not-done':!this.bench.completed
    }
    return classes
  }

  onMark(p:Part){
    this.bench.completed = !this.bench.completed;
    let partsCopy = this.parts;
    for (let i = 0; i < partsCopy.length; i++){
      partsCopy[i].completed = this.bench.completed;
    }
    this.parts = partsCopy;

    //update progressBar accordingly
    this.nestedMsg.emit(this.bench);
  }

  nestedMark(p:Part){
    let temp = true; //flag
    for (let i = 0; i< this.parts.length; i++){
      if (this.parts[i].completed == false){ //if even one part isn't done, the whole benchmark is not done
        temp = false;
      }
    }
    if(this.bench.completed != temp){
      this.bench.completed = temp;
      this.nestedMsg.emit(this.bench);
    }
  }

}
