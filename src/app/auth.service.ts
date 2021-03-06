import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { User } from './user.model';
import { environment } from '../environments/environment';

export interface AuthResponseData {
  _id: string;
  firstname: string;
  lastname: string;
  othername: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  role: string;
  token: string;
  expiresIn: string;
}

interface VerifyOTP {
  verifyOtp: boolean;
}

export class UserData {
  // tslint:disable-next-line: variable-name
  _id: string;
  firstname: string;
  lastname: string;
  othername: string;
  location: string;
  address: string;
  email: string;
  phone: string;
  role: string;
  // tslint:disable-next-line: variable-name
  _token: string;
  // tslint:disable-next-line: variable-name
  _tokenExpirationDate: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  getUser() {
    const user = JSON.parse(localStorage.getItem('userData'));
    delete user._token;
    delete user._tokenExpirationDate;
    return user;
  }

  findUser(phone: string, email: any) {
    return this.http.post(environment.server + '/users/findUser', {
      phone,
      email,
    });
  }

  findStaff(id: string) {
    return this.http.get(environment.server + '/users/findStaff/'+id);
  }

  findStaffs() {
    return this.http.get(environment.server + '/users/findStaffs');
  }


  changePassword(data: any) {
    return this.http.post(environment.server + '/users/changePassword', data).pipe(
      tap((res) => {}),
      map((res) => res),
      catchError(this.handleError),
    );
  }

  login(email: string, password: string) {
    const data = {
      email,
      password,
    };

    return this.http
      .post<VerifyOTP | ActivatedRoute>(environment.server + '/users/login', data)
      .pipe(
        catchError(this.handleError),
        tap((resData: any) => {
          if (!resData.verifyOtp) {
            this.handleAuthentication(
              resData._id,
              resData.firstname,
              resData.lastname,
              resData.othername,
              resData.location,
              resData.address,
              resData.email,
              resData.phone,
              resData.role,
              resData.token,
              +resData.expiresIn,
            );
          }
        }),
      );
  }

  loginSuccess(user: AuthResponseData) {
    this.handleAuthentication(
      user._id,
      user.firstname,
      user.lastname,
      user.othername,
      user.location,
      user.address,
      user.email,
      user.phone,
      user.role,
      user.token,
      +user.expiresIn,
    );
  }

  loadUser(userData: UserData) {
    const loadedUser = new User(
      userData._id,
      userData.firstname,
      userData.lastname,
      userData.othername,
      userData.location,
      userData.address,
      userData.email,
      userData.phone,
      userData.role,
      userData._token,
      new Date(userData._tokenExpirationDate),
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
      if (loadedUser.role === 'admin') {
        this.router.navigate(['/admin/dashboard'], {
          relativeTo: this.route,
        });
      } else if (loadedUser.role === 'staff') {
        this.router.navigate(['/pages/dashboard'], { relativeTo: this.route });
      } else {
        this.router.navigate(['/'], { relativeTo: this.route });
      }
      return;
    }
  }

  autoLogin() {
    let token = '';
    if (localStorage.getItem('userData')) {
      token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
    }
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(environment.server + '/users/autoLogin', {}, { headers }).pipe(
      map((response: any) => {
        return response;
      }),
      catchError((err) => {
        let msg = 'SOMETHING BAD HAPPENED';
        if (err.error) {
          if (typeof err.error === 'object') {
            msg = 'Cant Reach Server.., Please Try Again';
          } else {
            msg = err.error;
          }
        }
        return throwError(msg);
      }),
    );
  }

  logout() {
    let token = '';
    let email = '';
    if (localStorage.getItem('userData')) {
      token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
      email = JSON.parse(localStorage.getItem('userData')).email;
    }
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.post(environment.server + '/users/logout', {email}, { headers }).subscribe(
      (resData) => {
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
      },
      (errorMessage) => {},
    );
  }

  removeUser() {
    if (localStorage.getItem('userData')) {
      localStorage.removeItem('userData');
    }
    this.user.next(null);
  }

  logoutAll() {
    let token = '';
    if (localStorage.getItem('userData')) {
      token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
    }
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.post(environment.server + '/users/logoutAll', {}, { headers }).subscribe(
      (resData) => {
        this.user.next(null);
        this.router.navigate(['/login']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
          clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
      },
      (errorMessage) => {},
    );
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    userId: string,
    firstname: string,
    lastname: string,
    othername: string,
    location: string,
    address: string,
    email: string,
    phone: string,
    role: string,
    token: string,
    expiresIn: number,
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(userId, firstname, lastname, othername, location, address, email, phone, role, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (errorRes.error) {
      if (typeof errorRes.error === 'object') {
        errorMessage = 'Cant Reach Server.., Please Try Again';
      } else {
        errorMessage = errorRes.error;
      }
    }
    return throwError(errorMessage);
  }
}
