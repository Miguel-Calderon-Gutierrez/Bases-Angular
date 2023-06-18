import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 0;


  changeValueCounter(value:number):void{
   this.counter+=value;
  }

  resetCounter():void{
   this.counter = 0;
  }
}
