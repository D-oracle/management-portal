import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/service.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  details: any = '';
  selectedId: number;
  constructor(private api: ServicesService, private route: ActivatedRoute, private toastrService: NbToastrService) { }


  ngOnInit(): void {
    this.getApplicants()
  }

  getApplicants () {
    this.api.getApplications()
      .subscribe((data: any) => {
        this.dataSource = data;
      })
  }

  displayedColumns: string[] = ['position', 'fullname', 'role', 'variant', 'city', 'status', 'email', 'actions'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(id: string) {
    this.api.deleteApplicant(id).subscribe(() => {
      this.showToast('top-right', 'success', 'Deleted')
      this.getApplicants();
    },
    (err: any) => {
      this.showToast('top-right', 'danger', err.statusText)
      this.getApplicants();
    });
  }

  update(id: string, data: string) {
    this.api.updateApplicant(id, {status: data}).subscribe(
      () => {
        this.showToast('top-right', 'success', 'Updated')
        this.getApplicants();
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.statusText)
      }
    )
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
}
