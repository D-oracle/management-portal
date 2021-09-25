import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Location } from "@angular/common";
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {

  constructor(private api: ServicesService, private toastrService: NbToastrService, private location: Location, private route: ActivatedRoute) { }

  agent: any
  locations: any;
  roles: any;

  id: any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getAgent();
    this.getLocation();
    this.getServices();
  }

  getAgent() {
    this.api.getAgent(this.id).subscribe(
      (agent) => {
        this.agent = agent;
      }
    )
  }

  getServices() {
    this.api.getServices()
    .subscribe((data) => {
      this.roles = data;
    })
  }

  getLocation() {
    this.api.getLocations()
    .subscribe((data) => {
      this.locations = data;
    })
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.api.updateAgent(this.id, this.agent)
      .subscribe(() => this.goBack());
  }
}
