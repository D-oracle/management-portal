import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-active-request',
  templateUrl: './active-request.component.html',
  styleUrls: ['./active-request.component.css']
})
export class ActiveRequestComponent implements OnInit {

  activeRequests: any = [];
  constructor(private api: ServicesService) { }

  ngOnInit(): void {
    this.getActiveRequests();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;

  displayedColumns: string[] = ['position', 'request','status', 'agent', 'date', 'email', 'name', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getActiveRequests() {
    this.api.getRequests()
    .subscribe((data: any) => {
      this.dataSource = JSON.parse(JSON.stringify(data));
      console.log(this.details)
    })
  };

}

