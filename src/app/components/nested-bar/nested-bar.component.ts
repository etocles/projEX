import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProgressBar, Bench, NestedBar, Part } from 'src/app/models/ProjectClasses';


@Component({
  selector: 'app-nested-bar',
  templateUrl: './nested-bar.component.html',
  styleUrls: ['./nested-bar.component.css']
})

export class NestedBarComponent implements OnInit {
  @Input() bench: Bench;
  @Input() parts: Part[];
  @Input() prog: ProgressBar;
  @Input() first: boolean;
  @Input() last: boolean;
  @Output() nestedMsg: EventEmitter<Bench> = new EventEmitter();

  percent:number;

  constructor() { }

  ngOnInit(): void {
    this.percent = this.prog.num_done/this.prog.benchmarks.length;
  }

  setClasses(){
    let classes ={
      'default':true,
      'is-done':this.bench.completed,
      'not-done':!this.bench.completed,
      'firstbench':this.first,
      'lastbench':this.last
    }
    return classes
  }

  onMark(){
    this.bench.completed = !this.bench.completed;
    let partsCopy = this.parts;
    for (let i = 0; i < partsCopy.length; i++){
      partsCopy[i].completed = this.bench.completed;
    }
    this.parts = partsCopy;

    //update progressBar accordingly
    this.nestedMsg.emit(this.bench);
  }

  nestedMark(p:Part){
    if(!p){
      this.nestedMsg.emit(null); //updateDB event
    }
    let temp = true; //flag
    for (let i = 0; i< this.parts.length; i++){
      if (this.parts[i].completed == false){ //if even one part isn't done, the whole benchmark is not done
        temp = false;
      }
    }
    if(this.bench.completed != temp){ //either mark up to or mark down to
      this.bench.completed = temp;
      this.nestedMsg.emit(this.bench);
    }
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
