import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'santiago tovar';
  public nameUpper: string = 'SANTIAGO TOVAR';
  public nameComplete: string = 'SanTiago TovAr';

  public customDate: Date = new Date();
}
