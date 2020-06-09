import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Project, Bench, NestedBar} from 'src/app/models/ProjectClasses';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @Output() closePanel: EventEmitter<void> = new EventEmitter();
  name: string;
  category: string;
  date: Date;
  order: boolean;
  proj: Project;
  benchmarks: Bench[];
  today: Date;

  constructor() { }

  ngOnInit(): void {
    // TODO: add a create from template option
    this.name = "New Project";
    this.category = "New Category"; // TODO: change this into a dropdown
    this.date = new Date(Date.now());
    this.date.setHours(23,59)
    this.order = true
    this.proj = null; //upon form creation, there should be no project
    this.benchmarks = [];
    this.today = new Date(Date.now());
  }

  createProject(){
      if (!this.name) return;
      if (!this.category) return;
      if (this.benchmarks.length <= 1) return; //sanity check

      this.proj = new Project(this.name, this.category, this.benchmarks.length, this.date);
      this.proj.order_matters = this.order;

      //make nested benchmarks where needed
      for (var b of this.benchmarks){
        //bench isn't nested but needs to be
        if (!b.isnested){
          if(b.parts_summary!=null){
            var namesOfParts = b.parts_summary.split(",");
            namesOfParts = namesOfParts.filter(t => t.trim().length != 0);
            //sanity check
            if (namesOfParts.length ==0) continue;
            b.isnested = true;
            b.nested_bar = new NestedBar(namesOfParts.length);
            for (let n = 0; n < b.nested_bar.parts.length; n++){
              b.nested_bar.parts[n].name = namesOfParts[n];
              b.nested_bar.parts[n].completed = b.completed;
            }
          }
        }
      }

      this.proj.progbar.benchmarks = this.benchmarks;
      localStorage.setItem('ProjectToBeAdded', JSON.stringify(this.proj));
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
