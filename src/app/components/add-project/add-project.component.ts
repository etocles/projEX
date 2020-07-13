import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Overlay, PositionStrategy, OverlayRef, ScrollStrategyOptions, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';

import { Project } from 'src/app/models/ProjectClasses';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  @Output() addProj: EventEmitter<void> = new EventEmitter();
  @Output() sort: EventEmitter<string> = new EventEmitter();

  sort_type:string;

  overlayRef: OverlayRef;
  overlayPosition: PositionStrategy;
  formComponentPortal: ComponentPortal<AddFormComponent>;
  formComponentRef: any;
  @ViewChild("addButton") addButton: ElementRef;


  constructor(private overlay: Overlay, private readonly sso: ScrollStrategyOptions){}

  ngOnInit(): void {
    this.sort_type = JSON.parse(localStorage.getItem("userPrefs")).sort_type;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.sso.close(),
      width: 600,
      height: 700
    });
    this.formComponentPortal = new ComponentPortal(AddFormComponent);
  }

  emitSort(){
    let userPrefs = JSON.parse(localStorage.getItem("userPrefs"));
    userPrefs.sort_type = this.sort_type;
    localStorage.setItem("userPrefs",JSON.stringify(userPrefs));
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
}
