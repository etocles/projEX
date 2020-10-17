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
    this.default_project_name = ('default_project_name' in userPrefs) ? userPrefs.defaultProjectName : "New Project" ;
    this.default_category_name = ('default_category_name' in userPrefs) ? userPrefs.defaultCategoryName : "New Category" ;
    this.default_benchmark_name = ('default_benchmark_name' in userPrefs) ? userPrefs.defaultBenchName : "Benchmark #" ;
  }

  updateUserPrefs(){
    //update the things in storage
    let prefs = {
      "sort_type": this.sort_type,
      "view_mode": this.view_mode,
      "notification_frequency": this.notification_frequency,
      "notification_type": this.notification_type,
      "default_project_name": this.default_project_name,
      "default_category_name": this.default_category_name,
      "default_benchmark_name": this.default_benchmark_name
    };
    //remove dirty tag on form
  }

}
