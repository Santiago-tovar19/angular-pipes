import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  public name: string = 'santiago';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'maria';
    this.gender = 'female';
  }

  public clients: string[] = [
    'santiago',
    'maria',
    'pedro',
    'juan',
    'laura',
    'carlos',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient(): void {
    this.clients.pop();
  }

  public person = {
    name: 'santiago',
    age: 18,
    address: 'calle 123',
  };

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promesa resuelta');
    }, 3000);
  });
}
