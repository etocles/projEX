import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {
        id:1,
        title: 'ToDo One',
        completed:false
      },
      {
        id:2,
        title: 'ToDo Two',
        completed:true
      },
      {
        id:3,
        title: 'ToDo Three',
        completed:false
      },
    ]
  }
}
