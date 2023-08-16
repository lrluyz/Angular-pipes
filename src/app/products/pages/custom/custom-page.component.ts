import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export class CustomPageComponent {
  
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' = '';
  public lastSort: keyof Hero | '' = '';
  public boolOrder: boolean = false;

  public heroesList: Hero[] = [
    {
      name: 'Ironman',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Batman',
      canFly: true,
      color: Color.black
    },
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Acuaman',
      canFly: false,
      color: Color.blue
    },
  ];

  public toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(value: keyof Hero): void{
    
    if(this.lastSort === value){
      this.boolOrder = !this.boolOrder;
    }else{
      this.boolOrder = true;
    }

    this.orderBy = value;
    this.lastSort = this.orderBy;
  }
}
