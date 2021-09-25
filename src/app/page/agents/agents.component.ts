import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  data: any;
  constructor(private api: ServicesService) { }

  ngOnInit(): void {

    this.getAgents()
  }

  settings = {
    columns: {
      id: {
        title: 'No.'
      },
      name: {
        title: 'Agents Full Name'
      },
      email: {
        title: 'Agents Email'
      },

      location: {
        title: 'Location'
      },

      request_type: {
        title: 'Services Rendered'
      },
      status: {
        title: 'Status'
      },
    },

    actions: {
      add: false,
    }
  };

  getAgents() {
    this.api.getAllAgents()
    .subscribe((data: any) => {
      this.data = JSON.parse(JSON.stringify(data));
    })    
  }
}
