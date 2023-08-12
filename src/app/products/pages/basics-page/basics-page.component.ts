import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'luis';
  public nameUpper: string = 'LUIS';
  public fullName: string = 'lUiS ANTonIO LoPeZ';

  public customDate: Date = new Date();
}
