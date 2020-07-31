import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  customer: any;

  constructor() {}

  public customers: any[] = [
    {"id": 'Musaraf', "subject": 'Invitaion to join CYSO'}
  ]

}
