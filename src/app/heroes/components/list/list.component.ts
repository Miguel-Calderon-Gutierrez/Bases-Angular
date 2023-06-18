import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroeNames:string[] = [
    "spider-man",
    "capitán américa",
     "black panther",
    "gamora",
    "hulk",
    "iron man",
   " thor",
    "doctor strange"];
    public deleteHero?:string;

    removeLastHero():void {
      this.deleteHero =  this.heroeNames.pop();
    }

}
