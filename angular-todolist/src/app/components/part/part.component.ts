import { Component, OnInit, Input } from '@angular/core';
import { Part } from 'src/app/models/Todo'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  @Input() part:Part;

  constructor() { }

  ngOnInit(): void {
    console.log(this.part.name);

  }

}
