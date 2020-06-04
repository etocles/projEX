import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Project, Bench} from 'src/app/models/Todo';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() closePanel: EventEmitter<void> = new EventEmitter();
  name: string;
  category: string;
  benchNames:any;
  date: Date;
  order: boolean;
  proj: Project;
  benchmarks: Bench[];

  constructor() { }

  ngOnInit(): void {
    // TODO: add a create from template option
    this.name = "New Project";
    this.category = "New Category"; // TODO: change this into a dropdown
    this.benchNames = "a,b,c";
    this.date = new Date(Date.now());
    this.date.setHours(23,59)
    this.order = true
    this.proj = null; //upon form creation, there should be no project
    this.benchmarks = [];
  }

  createProject(){
      if (!this.name) return;
      if (!this.category) return;
      if (!this.benchNames) return; //break out of function if the user clicks cancel
      this.benchNames = this.benchNames.split(",");
      this.benchNames = this.benchNames.filter(t => t.trim().length != 0); //filters out any "blank space" benchmarks
      if (this.benchNames.length == 0) return; //sanity check
      if (!this.date) return; //break out of function if the user clicks cancel
      if (!this.order) return;

      this.proj = new Project(this.name, this.category, this.benchNames.length, this.date);
      this.proj.order_matters = this.order;
      for (let i = 0; i < this.proj.progbar.benchmarks.length; i++){
        this.proj.progbar.benchmarks[i].title = this.benchNames[i];
      }
      console.log(this.proj);
      this.closePanel.emit();
  }

  addBench(){
    this.benchmarks.push(new Bench(this.benchmarks.length,this.date));
  }

  delBench(event){
    var target = event.srcElement;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    this.benchmarks = this.benchmarks.filter(t => t.id != value);
    this.benchmarks = this.reID(this.benchmarks)
  }

  reID(benchmarks):Bench[]{
    for (let i = 0; i < benchmarks.length; i++){
      benchmarks[i].id = i;
    }
    return benchmarks;
  }
}
