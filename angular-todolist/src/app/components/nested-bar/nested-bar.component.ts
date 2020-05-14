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
    console.log("nested title hello");
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
    console.log("nested bar mark hello");

    // if (p.completed){
    //
    // }
    // else{
    //
    // }
    // if (p.id == this.parts[this.parts.length-1].id){
    //   this.bench.completed = !this.bench.completed;
    // }
  }

}
