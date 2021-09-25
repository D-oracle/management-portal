import { Component, OnInit } from '@angular/core';
import {NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  constructor() {}

  ngOnInit() {

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
      
      followUpStaff: {
        title: 'Followed Up By'
      },

      followUpDate: {
        title: 'Follow Up Date',
      },
      
    },
    actions: {
      add: false
    }
  };
}
