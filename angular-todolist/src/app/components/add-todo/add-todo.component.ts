import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Project} from 'src/app/models/Todo'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<Project> = new EventEmitter();
  name:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    //template for adding a Todo
    const proj = new Project(this.name, "CategoryTemp");
    this.addTodo.emit(proj);
  }

}
