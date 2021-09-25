import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {

  newRequests: any = [];
  constructor(private api: ServicesService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.getNewRequests();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;

  displayedColumns: string[] = ['position', 'refId', 'cost', 'type', 'date', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getNewRequests() {
    this.api.getRequests()
    .subscribe((data: any) => {
      this.dataSource = JSON.parse(JSON.stringify(data));
    })
  };

  delete(id: any) {
    this.api.deleteRequest(id).subscribe(() => {
      this.showToast('top-right', 'success', 'Deleted')
      this.getNewRequests();
    },
    (err: any) => {
      this.showToast('top-right', 'danger', err.statusText)
      this.getNewRequests();
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

  getUser() {
    this.dataSource.data.forEach((s: any) => {
      this.api.getClient(s.userId).subscribe((r) => {
        
      })
    })
  }

}


