import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application-json'
//   })
// }

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  // todosLimit = '?_limit=5';

  constructor() { }

  //Get todos
  getTodos(){
    // return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    return [
      {
        name:'Todo One',
        category:'Temporary',
        dueDate: new Date('2020-05-09T23:59:00'),
        order_matters:true,
        completed:false
      },
      {
        name:'Todo Two',
        category:'Temporary',
        dueDate: new Date('2020-05-20T23:59:00'),
        order_matters:true,
        completed:false
      },
      {
        name:'Todo Three',
        category:'Temporary',
        dueDate: new Date('2020-05-31T23:59:00'),
        order_matters:true,
        completed:false
      },
    ]
  }

  //Delete todo
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url,httpOptions);
  }

  //Add Todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }

  //Toggle Completed
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url,todo,httpOptions);
  }
}
