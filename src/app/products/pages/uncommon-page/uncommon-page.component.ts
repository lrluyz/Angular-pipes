import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Antonio';
  public gender: 'Male' | 'Female' = 'Male';
  
  public invitationMap = {
    'Male': 'invitarlo',
    'Female': 'invitarla'
  };

  public changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'Female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Juan', 'Isabel', 'Lucas'];
  public myName = 'Antonio';

  public clientsMap = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Hay un cliente esperando...',
    'other': 'Hay # clientes esperando...'
  }

  public deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Antonio',
    age: 30,
    address: 'Toluca 22'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap: ', value)
    )
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("Ya hay datos en la promesa");
      
      console.log("Ya hay datos en la promesa");
    }, 3500);
  });

}
