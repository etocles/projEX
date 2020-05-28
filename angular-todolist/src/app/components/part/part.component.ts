import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgressBar, Part } from 'src/app/models/Todo'

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements OnInit {
  @Input() part:Part;
  @Input() prog:ProgressBar;
  @Input() first: boolean;
  @Input() last: boolean;
  @Input() firstpart: boolean;
  @Input() lastpart: boolean;
  @Output() partMsg: EventEmitter<Part> = new EventEmitter();
  @Output() partUpdate: EventEmitter<any> = new EventEmitter();

  percent:number;

  constructor() { }

  ngOnInit(): void {
    this.percent = this.prog.num_done/this.prog.benchmarks.length;
  }

  setClasses(){
    let classes ={
      'default':true,
      'is-done':this.part.completed,
      'not-done':!this.part.completed,
      'firstpartfirst': this.first && this.firstpart,
      'lastpartlast':this.last && this.lastpart
    }
    return classes;
  }

  onMark(){
    this.part.completed = !this.part.completed;
    this.partMsg.emit(this.part);
    this.partMsg.emit(null);
  }

  getStyles(){
    this.percent = this.prog.num_done/this.prog.benchmarks.length;
    let h = (this.percent > .9) ? 130*this.percent : 60*this.percent; //better gradient
    let s = 86;
    let l = 56;
    h /= 360;
    s /= 100;
    l /= 100;
    let r, g, b;
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = x => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    let progColor = "#"+toHex(r)+toHex(g)+toHex(b);
    let linGradientText = 'linear-gradient(to left, '+ `${progColor}` +' 50%, #aaaaaa 50%)'
    return{
      'backgroundImage': linGradientText
    };
  }

}
