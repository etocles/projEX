import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project, ProgressBar } from 'src/app/models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Project;
  @Output() deleteTodo: EventEmitter<Project> = new EventEmitter();

  // bar:ProgressBar;

  constructor() {
      // this.bar = this.todo.progbar;
  }

  ngOnInit(): void {}

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
  }

  onDelete(todo){
    this.deleteTodo.emit(todo);
  }

}
