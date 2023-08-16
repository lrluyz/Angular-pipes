import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(listHeroes: Hero[], sortBy: keyof Hero | '', changeOrder: boolean): Hero[] {
   
    let x = -1;
    let y = 1

    if(changeOrder){
      x *= -1;
      y *= -1;
    }

    switch(sortBy){
      case 'name':
        return listHeroes.sort((a,b) => (a.name > b.name) ? x : y );
    
      case 'canFly':
        return listHeroes.sort((a,b) => (a.canFly > b.canFly) ? x : y );
    
      case 'color':
        return listHeroes.sort((a,b) => (a.color > b.color) ? x : y );
      
    }

    return listHeroes;
  }

}
