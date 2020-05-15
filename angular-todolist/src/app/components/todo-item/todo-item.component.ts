import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Project;
  @Output() deleteTodo: EventEmitter<Project> = new EventEmitter();

  bar:ProgressBar;

  constructor() {
  }

  ngOnInit(): void {
      this.bar = this.todo.progbar;
  }

  //Set Dynamic Classes //aka set attributes of the div based on the todo that's being passed in
  setClasses(){
    let classes ={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes
  }

  onToggle(todo){
    //Toggle in UI
    todo.completed = !todo.completed;
    //debugging:
    for (var i of todo.progbar.benchmarks) {
      console.log(i.title+" "+i.completed);
    }
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
