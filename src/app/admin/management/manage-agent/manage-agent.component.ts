import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-agent',
  templateUrl: './manage-agent.component.html',
  styleUrls: ['./manage-agent.component.css']
})
export class ManageAgentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;
  constructor(private api: ServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAgents()
  }

  getAgents() {
    this.details = this.api.getAllAgents()
    this.dataSource = this.details;
  }

  delete(id: string) {
    this.api.deleteAgent(id)
  }

  displayedColumns: string[] = ['position', 'fullname', 'role', 'state', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
