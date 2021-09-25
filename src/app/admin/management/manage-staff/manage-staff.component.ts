import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;
  constructor(private api: ServicesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStaffs()
  }

  getStaffs() {
    this.details = this.api.getAllStaff()
    this.dataSource = this.details;
  }

  delete(id: string) {
    this.api.deleteStaff(id)
  }

  displayedColumns: string[] = ['position', 'fullname', 'role', 'state', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
