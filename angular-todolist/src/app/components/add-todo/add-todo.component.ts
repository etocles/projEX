import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Overlay, PositionStrategy, OverlayRef, BlockScrollStrategy } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';

import { Project } from 'src/app/models/Todo';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Project> = new EventEmitter();
  @Output() sort: EventEmitter<string> = new EventEmitter();

  sort_type:string;

  overlayRef: OverlayRef;
  overlayPosition: PositionStrategy;
  formComponentPortal: ComponentPortal<AddFormComponent>;
  formComponentRef: any;
  @ViewChild("addButton") addButton: ElementRef;

  constructor(private overlay: Overlay) { }

  ngOnInit(): void {
    this.sort_type = localStorage.getItem("sort_type");

    //playing with overlay
    this.overlayRef = this.overlay.create({
      // positionStrategy: this.overlay.position().connectedTo(
      //   this.addButton,
      //   {originX: 'center', originY: 'center'},
      //   {overlayX: 'start', overlayY: 'top'}),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      width: 200,
    });
    this.formComponentPortal = new ComponentPortal(AddFormComponent);
  }

  emitSort(){
    localStorage.setItem("sort_type",this.sort_type);
    this.sort.emit(this.sort_type);
  }

  onSubmit() {
    if (!this.overlayRef.hasAttached()) {
      this.formComponentRef = this.overlayRef.attach(this.formComponentPortal);
    } else {
      // console.dir(this.overlayRef);
      this.overlayRef.detach();
    }
    // console.dir(this.formComponentRef.instance)

    // let name, category, benchNames, date, order;
    // let td = new Date(Date.now());
    // name = prompt("Project Name:");
    // if (!name) return;
    // category = prompt("Category:")
    // if (!category) return; //break out of function if the user clicks cancel
    // benchNames = prompt("Names of Benchmarks: \n(Separated by commas)")
    // if (!benchNames) return; //break out of function if the user clicks cancel
    // benchNames = benchNames.split(",");
    // benchNames = benchNames.filter(t => t.trim().length != 0); //filters out any "blank space" benchmarks
    // if (benchNames.length == 0) return; //sanity check
    // date = prompt("Due Date:", td.getFullYear()+"-"+(td.getMonth()+1)+"-"+td.getDate())
    // if (!date) return; //break out of function if the user clicks cancel
    // date = new Date(Date.parse(date));
    // date.setHours(23,59)
    // order = prompt("Will progress on this project be linear?")
    // if (!order) return;
    // order = (order.toUpperCase()=='Y' || order.toUpperCase()=='YES')? true: false; // TODO: change this to sweetalert or a confirm box
    //
    // let proj = new Project(name, category, benchNames.length, date);
    // proj.order_matters = order;
    // for (let i = 0; i < proj.progbar.benchmarks.length; i++){
    //   proj.progbar.benchmarks[i].title = benchNames[i];
    // }
    //
    // this.addTodo.emit(proj);
  }

}
