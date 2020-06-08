import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Project } from 'src/app/models/Todo';
import { IpcRenderer } from 'electron';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Project> = new EventEmitter();
  name:string;

  // constructor() { }
  private ipc: IpcRenderer
  constructor(){
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
  }

  onSubmit() {
    //template for adding a Todo
    const proj = new Project(this.name, "CategoryTemp", 6);
    this.name = '';
    this.addTodo.emit(proj);
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
