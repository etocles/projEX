import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/ProjectClasses';

@Component({
  selector: 'app-archive-form',
  templateUrl: './archive-form.component.html',
  styleUrls: ['./archive-form.component.css']
})
export class ArchiveFormComponent implements OnInit {
  archprojects: Project[];

  constructor() { }

  ngOnInit(): void {
    this.archprojects = JSON.parse(localStorage.getItem("archivedProjects"));
  }

}
