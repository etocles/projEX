import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preferences-form',
  templateUrl: './preferences-form.component.html',
  styleUrls: ['./preferences-form.component.css']
})
export class PreferencesFormComponent implements OnInit {
  sort_type:string;
  view_mode:string;
  notification_frequency:number;
  notification_type:string;
  default_project_name:string;
  default_category_name:string;
  default_benchmark_name:string;

  constructor() { }

  ngOnInit(): void {
    let userPrefs = JSON.parse(localStorage.getItem("userPrefs"));
    this.sort_type = userPrefs.sort_type;
    this.view_mode = userPrefs.view_mode;
    this.notification_frequency = userPrefs.notification_frequency;
    this.notification_type = userPrefs.notification_type;
    this.default_project_name = ('defaultProjectName' in userPrefs) ? userPrefs.defaultProjectName : "New Project" ;
    this.default_category_name = ('defaultCategoryName' in userPrefs) ? userPrefs.defaultCategoryName : "New Category" ;
    this.default_benchmark_name = ('defaultBenchName' in userPrefs) ? userPrefs.defaultBenchName : "Benchmark #" ;
  }

  updateUserPrefs(){
    //update the things in storage

    //remove dirty tag on form
  }

}
