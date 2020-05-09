import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  name:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    //template for adding a Todo
    const todo = {
      name: this.name,
      completed: false,
      dueDate: new Date('1990-03-20T23:59:00'),
      category:"Added"
    }

    this.addTodo.emit(todo);
  }

}
