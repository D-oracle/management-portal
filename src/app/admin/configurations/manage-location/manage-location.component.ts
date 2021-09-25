import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-location',
  templateUrl: './manage-location.component.html',
  styleUrls: ['./manage-location.component.css']
})
export class ManageLocationComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;
  constructor(private api: ServicesService, private route: ActivatedRoute, private toastrService: NbToastrService) { }

  ngOnInit(): void {

    this.getLocations()
  }

  getLocations() {
    this.api.getLocations()
    .subscribe((data: any) => {
      this.dataSource = JSON.parse(JSON.stringify(data));
    })
  }

  delete(id: any) {
    this.api.deleteLocation(id)
    .subscribe((data) => {
      this.showToast('top-right', 'success', 'Location Deleted Successfully');
      
    },
    (err: any) => {
      this.showToast('top-right', 'danger', err.statusText)
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

  displayedColumns: string[] = ['position', 'city', 'state', 'elc', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
