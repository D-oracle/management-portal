import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})


export class ViewRequestComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private api: ServicesService,
    private toastrService: NbToastrService
    ) { }

    userId: any
    user: any;
    request$: any;

  ngOnInit(): void {
    this.getUserDetails();
    this.request$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getRequest(params.get('id')))
        )
  }

  update(id: string, data: string) {
    this.api.updateRequest(id, {status: data}).subscribe(
      () => {
        this.showToast('top-right', 'success', 'Updated')
      },
      (err: any) => {
        this.showToast('top-right', 'danger', err.statusText)
      }
    )
  }

  getUserDetails() {
    this.api.getClient(this.userId).subscribe(
      (res: any) => {
        this.user = res;
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
