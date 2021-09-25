import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-completed-request',
  templateUrl: './completed-request.component.html',
  styleUrls: ['./completed-request.component.css']
})
export class CompletedRequestComponent implements OnInit {
  newRequests: any = [];
  constructor(private api: ServicesService) { }

  ngOnInit(): void {
    this.getCompletedRequests();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;

  displayedColumns: string[] = ['position', 'name', 'request', 'agent', 'rating', 'date', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCompletedRequests() {
    this.api.getRequests()
    .subscribe((data: any) => {
      this.dataSource = JSON.parse(JSON.stringify(data));
      console.log(this.details)
    })
  };
  
  
}
