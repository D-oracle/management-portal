import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { FileUploader } from 'ng2-file-upload';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';
import { IdCardComponent } from "../../id-card/id-card.component";
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { ServicesService } from 'src/app/service.service';

const token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
const id = JSON.parse(localStorage.getItem('userData'))._id;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  logo: File;
  imageRequired: Boolean;
  imagePreview: string;
  invalidImage: boolean;

  uploader:FileUploader;
  response:string;
  image_url: string;
  profileForm: FormGroup;
  confirmPassword: string;
  changePasswordForm: FormGroup;
  profile: any;
  file: any;
  userId: any;

  constructor(private fb: FormBuilder, private toastrService: NbToastrService, private api: ServicesService, private auth: AuthService, private dialogService: NbDialogService) { 

  }

  firstname: string;
  lastname: string;
  othername: string;
  location: string;
  role: string;
  address:string;
  phone: string;
  email: string;

  async onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    const imgExt: string[] = ['jpg', 'png', 'jpeg'];
    const ext = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
    if (!(imgExt.indexOf(ext) !== -1)) {
      this.invalidImage = true;
      return;
    }
    this.imageRequired = false;
    this.invalidImage = false;
    this.logo = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      othername: [''],
      location: [''],
      role: [''],
      address: [''],
      phone: [''],
      image: ['']
    });
    this.changePasswordForm = this.fb.group({
      new_password: [''],
      old_password: [''],
    })

    this.getProfile()
  }

  
  async updateProfile() {
    if (!this.logo) {
      this.imageRequired = true;
      return;
    }
    if (this.invalidImage) {
      return;
    }

    
    const data = {
      othername: this.profileForm.value.othername,
      logo: this.logo,
      location: this.profileForm.value.location,
      address: this.profileForm.value.address
    }

    this.api.uploadProfile(data, this.userId).subscribe(() => {
      this.showToast('top-right', 'success', 'Service Added Successfully');
      this.profileForm.reset()
    },
    (err: any) => {
      this.showToast('top-right', 'danger', 'Failed,'+ err.statusText)
    });
  }

  showToast(position: any, status: any, message: any) {
    this.toastrService.show(status, message, {
      position,
      status,
    });
  }
  

  changePassword() {
    if (this.changePasswordForm.valid && this.changePasswordForm.value.new_password === this.confirmPassword) {
      this.auth.changePassword(this.changePasswordForm.value)
    }
  }

  getProfile() {
    this.profile = this.auth.getUser()
    this.firstname = this.profile.firstname;
    this.lastname = this.profile.lastname;
    this.othername = this.profile.othername;
    this.location = this.profile.location;
    this.phone = this.profile.phone;
    this.role = this.profile.role;
    this.userId = this.profile._id;
    this.email = this.profile.email;
    this.address = this.profile.address;
  }

  open() {
    this.dialogService.open(IdCardComponent)
  }

}
