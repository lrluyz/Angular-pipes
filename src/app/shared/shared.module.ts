import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
      MenuComponent,
    ],
  imports: [
    CommonModule,
    PrimeNGModule,
    BrowserAnimationsModule,
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
