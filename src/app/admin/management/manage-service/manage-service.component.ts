import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;
  constructor(private api: ServicesService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.getService()
  }

  getService() {
    this.api.getServices()
    .subscribe((data: any) => {
      this.dataSource = JSON.parse(JSON.stringify(data));
      console.log(this.details)
    })
  }

  delete(id: string) {
    this.api.deleteService(id)
    .subscribe((res) => {
      this.showToast('top-right', 'success', 'Service Deleted Successfully')
      this.getService()
    })
  }

  displayedColumns: string[] = ['position', 'name', 'cost', 'location', 'category', 'sub-category', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status
    });
  }
}
