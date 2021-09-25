import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrls: ['./manage-role.component.css']
})
export class ManageRoleComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  details: any = '';
  selectedId: number;
  constructor(private api: ServicesService, private route: ActivatedRoute, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.getRoles()
  }

  getRoles() {
    this.api.getRoles()
    .subscribe((data: any) => {
      this.dataSource = JSON.parse(JSON.stringify(data));
    })
  }

  delete(id: string) {
    this.api.deleteRole(id).subscribe( (res) => {
      this.showToast('top-right', 'danger', res)
    })
  }

  displayedColumns: string[] = ['position', 'name', 'desc', 'duty', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }

}
