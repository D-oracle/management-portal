import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  roles: [];
  agentForm: FormGroup;
  locations: any;
  services: any;
  constructor(private fb: FormBuilder, private api: ServicesService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.agentForm = this.fb.group({
      email: [''],
      othername: [''],
      location: [''],
      password: [''],
      agent_role: [],
      firstname: [''],
      lastname: [''],
      phone: ['']
    })
  }

  createAgentAccount() {
    let agent = this.agentForm.value;
    this.api.addAgents({
      email: agent.email,
      othername: agent.othername,
      location: agent.location,
      password: agent.passowrd,
      role: 'agent',
      addProp: {
        name: 'Services Rendered',
        value: agent.agent_role,
      },
      lastname: agent.lastname,
      firstname: agent.firstname,
      phone: agent.phone
    }).subscribe(() => {
      this.showToast('top-right', 'success', 'Agent Added Successfully');
      this.agentForm.reset()
    },
    (err: any) => {
      this.showToast('top-right', 'danger', 'Failed,'+ err.statusText)
    });
  }

  getLocation() {
    this.api.getLocations()
    .subscribe((data) => {
      this.locations = data;
    })
  }

  getServices() {
    this.api.getServices()
    .subscribe((data) => {
      this.services = data;
    })
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
