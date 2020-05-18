import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})

export class TodoItemComponent implements OnInit {
  @Input() proj: Project;
  @Output() deleteTodo: EventEmitter<Project> = new EventEmitter();

  bar:ProgressBar;

  constructor() {
  }

  ngOnInit(): void {
      this.bar = this.proj.progbar;
  }

  //Set Dynamic Classes //aka set attributes of the div based on the todo that's being passed in
  setClasses(){
    let classes ={
      todo:true,
      'is-complete':this.proj.completed
    }
    return classes
  }

  onToggle(proj){
    //Toggle in UI
    proj.completed = !proj.completed;
    // this.bar.MarkUpTo(this.bar.benchmarks[this.bar.benchmarks.length-1]); // TODO: needs to be fully implemented
  }

  onDelete(proj){
    this.deleteTodo.emit(proj);
  }

}
