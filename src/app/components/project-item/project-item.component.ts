import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Project, ProgressBar, Bench } from 'src/app/models/ProjectClasses';

import { EditingDropdownComponent }  from '../editing-dropdown/editing-dropdown.component';
import { ProgressBarComponent }  from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})

export class ProjectItemComponent implements OnInit {
  @Input() proj: Project;
  @Output() updateDB: EventEmitter<any> = new EventEmitter();
  @Output() deleteTodo: EventEmitter<Project> = new EventEmitter();
  @ViewChild(EditingDropdownComponent)
  private dropdownForm: EditingDropdownComponent;
  @ViewChild(ProgressBarComponent)
  private barComponent: ProgressBarComponent;

  bar:ProgressBar;
  editing:boolean;
  barBackup:ProgressBar;

  constructor() {
  }

  ngOnInit(): void {
      this.bar = this.proj.progbar;
      this.editing = false;
      this.barBackup = new ProgressBar( 2, new Date(Date.now()) );;
  }

  //Set Dynamic Classes //aka set attributes of the div based on the todo that's being passed in
  setClasses(){
    //if all benchmarks are done, the project should also be marked as done
    // let completedTest = true;
    // for (let i = 0; i < this.bar.benchmarks.length; i++){
    //   if (!this.bar.benchmarks[i].completed) {
    //     completedTest = false;
    //     break;
    //   }
    // }
    // this.proj.completed = completedTest;

    let classes ={
      todo:true,
      'is-complete':this.proj.completed
    }
    return classes
  }

  onToggle(proj){// TODO: erases completed parts... and doesn't revert back to where it was for projects w/o order
    //Toggle in UI
    proj.completed = !proj.completed;
    if (proj.completed){ //if project should transition to a finished state
      // let temp = new ProgressBar( 2, new Date(Date.now()) );
      this.barBackup.copy(this.bar);
      this.bar.MarkUpTo(this.bar.benchmarks[this.bar.benchmarks.length-1]);
      // console.dir(this.barBackup)
    }
    else{//if it should transition back to being not done, go back to the way it was
      // let temp = new ProgressBar( 2, new Date(Date.now()) );
      this.bar.copy(this.barBackup);
      this.barBackup = new ProgressBar( 2, new Date(Date.now()) );;
    }
    this.updateDB.emit();
  }

  onDelete(proj){
    this.deleteTodo.emit(proj);
    this.updateDB.emit();
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
      this.bar.benchmarks = this.dropdownForm.correlateBenchmarks();
      this.bar.numDoneRecount(); //sanity check to make sure the num_done isn't thrown off
      this.updateDB.emit();
    }

  }

  setDropdownClasses(){
    let classes ={
      'dropdown-content':true,
      'show': this.editing
    }
    return classes
  }

  outputBubbler(){
    this.updateDB.emit();
  }

}
