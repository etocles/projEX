import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/ProjectClasses';

@Component({
  selector: 'app-archive-form',
  templateUrl: './archive-form.component.html',
  styleUrls: ['./archive-form.component.css']
})
export class ArchiveFormComponent implements OnInit {
  @Output() restoreProject: EventEmitter<void> = new EventEmitter();
  archprojects: Project[];

  constructor() {
    this.archprojects = JSON.parse(localStorage.getItem("archivedProjects"));
  }

  ngOnInit(): void {
    this.archprojects = JSON.parse(localStorage.getItem("archivedProjects"));
  }

  restoreProj(p){
    //add it back to list of projects
    localStorage.setItem('ProjectToBeAdded',JSON.stringify(p));
    this.restoreProject.emit();

    //remove it from ui
    this.archprojects = this.archprojects.filter(
      t => (
        (t.name !== p.name) ||
        (t.name == p.name && t.progbar.num_done != p.progbar.num_done) ||
        (t.name == p.name && t.category != p.category) ||
        (t.name == p.name && t.due_date != p.due_date)
      )
    );
    //remove it from archived database
    localStorage.setItem('archivedProjects', JSON.stringify(this.archprojects));
    //switch sort mode to custom
    let userPrefs = JSON.parse(localStorage.getItem("userPrefs"));
    userPrefs.sort_type = "by_custom";
    localStorage.setItem("userPrefs",JSON.stringify(userPrefs));
  }

  deleteProj(p){
    let ans = confirm("Are you sure you want to permanently delete "+p.name+ "?");
    if (!ans) return;
    this.archprojects = this.archprojects.filter(
      t => (
        (t.name !== p.name) ||
        (t.name == p.name && t.progbar.num_done != p.progbar.num_done) ||
        (t.name == p.name && t.category != p.category) ||
        (t.name == p.name && t.due_date != p.due_date)
      )
    );
    localStorage.setItem('archivedProjects', JSON.stringify(this.archprojects));
  }
}
