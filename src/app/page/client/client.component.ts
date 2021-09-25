import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name'
      },
      email: {
        title: 'Email'
      },
      location: {
        title: 'Location'
      },
      date: {
        title: "Date"
      }
    },
    actions: {
      add: false
    }
  };

}
