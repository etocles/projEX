import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Overlay, PositionStrategy, OverlayRef, BlockScrollStrategy, ScrollStrategy, ScrollStrategyOptions, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';

import { Project } from 'src/app/models/Todo';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addProj: EventEmitter<void> = new EventEmitter();
  @Output() sort: EventEmitter<string> = new EventEmitter();

  sort_type:string;

  overlayRef: OverlayRef;
  overlayPosition: PositionStrategy;
  formComponentPortal: ComponentPortal<AddFormComponent>;
  formComponentRef: any;
  @ViewChild("addButton") addButton: ElementRef;

  constructor(private overlay: Overlay, private readonly sso: ScrollStrategyOptions) {}

  ngOnInit(): void {
    this.sort_type = localStorage.getItem("sort_type");

    //playing with overlay
    // this.overlayRef = this.overlay.create({
    //   // positionStrategy: this.overlay.position().connectedTo(
    //   //   this.addButton,
    //   //   {originX: 'center', originY: 'center'},
    //   //   {overlayX: 'start', overlayY: 'top'}),
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.sso.close(),
      width: 600
    });
    this.formComponentPortal = new ComponentPortal(AddFormComponent);
  }

  emitSort(){
    localStorage.setItem("sort_type",this.sort_type);
    this.sort.emit(this.sort_type);
  }

  openForm() {
    if (!this.overlayRef.hasAttached()) {
      this.formComponentRef = this.overlayRef.attach(this.formComponentPortal);
      //allows closing of the form from within form
      // this.formComponentRef.instance.closePanel.subscribe(() => this.overlayRef.detach());
      this.overlayRef.backdropClick().subscribe(_ => this.overlayRef.detach());
      this.formComponentRef.instance.closePanel.subscribe(() => {
        this.addProj.emit();
        this.overlayRef.detach();
      })
    } else { //close the panel if the plus button is clicked again
      this.overlayRef.detach();
    }
  }

  // onClick(event) {
  //  if (!this.overlayRef.contains(event.target)) // or some similar check
  //    console.log("ha");
  // }
}
