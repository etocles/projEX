import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar } from 'src/app/models/Todo';
import { EditingDropdownComponent }  from '../editing-dropdown/editing-dropdown.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})

export class TodoItemComponent implements OnInit {
  @Input() proj: Project;
  @Output() deleteTodo: EventEmitter<Project> = new EventEmitter();
  @ViewChild(EditingDropdownComponent)
  private dropdownForm: EditingDropdownComponent;

  bar:ProgressBar;
  editing:boolean;

  constructor() {
  }

  ngOnInit(): void {
      this.bar = this.proj.progbar;
      this.editing = false;
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

  onEdit(){
    this.editing = !this.editing;
    // var btn = document.getElementById('edit');
    // btn.style.content = "🔼";

    //onOpen:
    //toggle editing mode to on
    //change dropdown icon to downwards chevron by rotation

    //onClose:
    //this.bar = this.dropdownForm.getNewProgressBar();
    //set current progressbar to new progressBar provided by form
    //this.updateBar()
  }


  setDropdownClasses(){
    let classes ={
      'dropdown-content':true,
      'show': this.editing
    }
    return classes
  }

  updateBar(event){
    //should reapply styles to the progressBar, such as rounding corners and completing
    //needs to set the current progressbar's benchmarks to event
    //update num_done
    console.log(event);
  }

}
