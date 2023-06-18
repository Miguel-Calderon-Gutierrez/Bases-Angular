import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

   public name: string ='ironman';
   public age: number = 45;
   public countChanges:number = 0;
   private heroeslist:string[] = [
   "spider-man",
   "capitán américa",
    "black panther",
   "gamora",
   "hulk",
   "iron man",
  " thor",
   "doctor strange"];

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(): void {
     this.age = this.getRandomInt(1,10);
  }

  changeName(): void {
    this.name = this.getRamdonHeroName();
  }

  private getRamdonHeroName(): string {
    let index:number = this.getRandomIntArray(0, this.heroeslist.length-1);
    console.log(index)
    let newName:string = this.heroeslist[index];
    return newName;
  }

  private getRandomInt(min:number, max:number): number {

    this.countChanges++;

    min = Math.ceil(min);
    max = Math.floor(max);

    let newAge: number = 0

    newAge += this.age + Math.floor(Math.random() * (max - min + 1) + min);
    newAge -= Math.floor(Math.random() * (max - min + 1) + min);

    return newAge;
  }


  private getRandomIntArray(min:number, max:number): number {
    this.countChanges++;

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  resetCountChanges(): void {
    this.name='ironman';
    this.age = 45;
    this.countChanges = 0;

  /*  document.querySelectorAll('td')!.forEach( element =>{
         element.innerHTML = `<h1>${this.name} reset</h1>`;
     }
   )
 */

  }
}
