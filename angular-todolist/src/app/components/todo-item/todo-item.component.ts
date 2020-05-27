import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, Bench } from 'src/app/models/Todo';

import { EditingDropdownComponent }  from '../editing-dropdown/editing-dropdown.component';
import { ProgressBarComponent }  from '../progress-bar/progress-bar.component';

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
  @ViewChild(ProgressBarComponent)
  private barComponent: ProgressBarComponent;

  bar:ProgressBar;
  editing:boolean;
  benchBackup:Bench;

  constructor() {
  }

  ngOnInit(): void {
      this.bar = this.proj.progbar;
      this.editing = false;
      this.benchBackup = null;
  }

  //Set Dynamic Classes //aka set attributes of the div based on the todo that's being passed in
  setClasses(){
    let classes ={
      todo:true,
      'is-complete':this.proj.completed
    }
    return classes
  }

  onToggle(proj){// TODO: erases completed parts...
    //Toggle in UI
    proj.completed = !proj.completed;
    if (proj.completed){ //if project should transition to a finished state
      this.benchBackup = this.bar.benchmarks[proj.progbar.num_done-1];
      this.bar.MarkUpTo(this.bar.benchmarks[this.bar.benchmarks.length-1]);
    }
    else{//if it should transition back to being not done, go back to the way it was
      this.bar.MarkDownTo(this.bar.benchmarks[this.benchBackup.id]);
      this.benchBackup = null;
    }
  }

  onDelete(proj){
    this.deleteTodo.emit(proj);
  }

  onEdit(){
    //onOpen:
    //toggle editing mode to on
    this.editing = !this.editing;
    //change dropdown icon
    var editBtn = document.getElementById('edit');
    editBtn.innerHTML = (!this.editing)? '🔽':'🆗';

    //onClose:
    if(this.editing == false){
      //set current progressbar to new progressBar provided by form
      console.log(this.dropdownForm.myFunction());
      this.bar.benchmarks = this.dropdownForm.myFunction();
      this.barComponent.numDoneRecount(); //sanity check to make sure the num_done isn't thrown off
    }

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
