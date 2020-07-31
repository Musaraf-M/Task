import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  customer: any;

  constructor() { }

  
  ngOnInit() {}

  public customers: any[] = [
    {"id": 'Musaraf', "subject": 'Invitaion to join CYSO'}
  ]
}
