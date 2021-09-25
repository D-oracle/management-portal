import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/service.service';

@Component({
  selector: 'app-view-applicants',
  templateUrl: './view-applicants.component.html',
  styleUrls: ['./view-applicants.component.css']
})
export class ViewApplicantsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private api: ServicesService,
    private toastrService: NbToastrService
    ) { }

  applicant$: any;

  ngOnInit(): void {
    this.applicant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getApplicant(params.get('id')))
    );
  }

  update(id: string, data: string) {
    this.api.updateApplicant(id, {status: data}).subscribe(
      () => {
        this.showToast('top-right', 'success', 'Updated')
        // this.getApplicants();
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
