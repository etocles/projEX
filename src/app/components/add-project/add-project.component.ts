import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Overlay, PositionStrategy, OverlayRef, BlockScrollStrategy, ScrollStrategy, ScrollStrategyOptions, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal} from '@angular/cdk/portal';

import { Project } from 'src/app/models/ProjectClasses';
import { AddFormComponent } from 'src/app/components/add-form/add-form.component';
import { IpcRenderer } from 'electron';


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

  // constructor() { }
  private ipc: IpcRenderer
  constructor(private overlay: Overlay, private readonly sso: ScrollStrategyOptions){
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  ngOnInit(): void {
    this.sort_type = JSON.parse(localStorage.getItem("userPrefs")).sort_type;

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
      width: 600,
      height: 700
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

  myFunction(){
    const notification = {
      title: 'Basic Notification',
      body: 'Short message part'
    }
    const myNotification = new window.Notification(notification.title, notification)
    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
  }

}
