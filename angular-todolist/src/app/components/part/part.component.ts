import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Part } from 'src/app/models/Todo'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  @Input() part:Part;
  @Output() partMsg: EventEmitter<Part> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes ={
      'default':true,
      'is-done':this.part.completed,
      'not-done':!this.part.completed
    }
    return classes;
  }

  onMark(){
    this.part.completed = !this.part.completed;
    this.partMsg.emit(this.part);
  }

}
