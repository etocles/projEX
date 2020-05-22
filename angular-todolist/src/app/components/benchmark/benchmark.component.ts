import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ProgressBar, Bench, NestedBar } from 'src/app/models/Todo';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})
export class BenchmarkComponent implements OnInit {
  @Input() bench: Bench;
  @Input() prog: ProgressBar;
  @Input() first: boolean;
  @Input() last: boolean;
  @Input() nested: boolean;
  @Output() markUpTo: EventEmitter<Bench> = new EventEmitter();
  @Output() markDownTo: EventEmitter<Bench> = new EventEmitter();

  nested:boolean;
  nested_bar:NestedBar;
  percent:number;


  constructor() {
  }

  ngOnInit(): void {
    if(this.nested){
      this.nested_bar=this.bench.nested_bar;
    }
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

  onMark(bench){
    //toggle current bench state
    this.bench.completed = !this.bench.completed;
    //update rest of progress bar
    if(this.bench.completed)this.markUpTo.emit(this.bench);
    else this.markDownTo.emit(this.bench);
  }

  nestedMark(b:Bench){
    if (b.completed == true)this.markUpTo.emit(this.bench);
    else this.markDownTo.emit(this.bench);
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
