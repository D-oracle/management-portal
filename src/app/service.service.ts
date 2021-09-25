import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const token = 'Bearer ' + JSON.parse(localStorage.getItem('userData'))._token;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: token
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  uri = environment.server;

  

  private handleError(error: any) {
    return throwError(error);
  }

  //Requests Api
 
  getRequestsByStatus(status: string) {
    return this.http
      .get(this.uri + '/requests/', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getRequests() {
    return this.http
      .get(this.uri + '/requests/', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getRequest(id: string) {
    return this.http
      .get(this.uri + `/requests/${id}`, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  updateRequest(id: string, data: any) {
    return this.http 
      .put(this.uri + `/requests/${id}`, data, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  deleteRequest(id: string) {
    return this.http
      .delete(this.uri + '/requests/'+id, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  //Staffs Api
  addStaff(staff: any) {
    return this.http.post(this.uri + '/users/signup', staff, httpOptions).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  uploadProfile(data: any, id: string) {
    const postData = new FormData();
    postData.append('logo', data.logo, id);
    postData.append('address', JSON.stringify(data.address));
    postData.append('location', JSON.stringify(data.location));
    postData.append('othername', JSON.stringify(data.othername));
    postData.append('id', id)
    return this.http.post(this.uri + '/users/uploadProfile/', postData, httpOptions).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    )
  }

  getAllStaff() {
    return this.http
      .get(this.uri + '/users/findStaffs', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getStaff(id: string) {
    return this.http
      .get(this.uri + '/users/getStaff'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  deleteStaff(id: string) {
    return this.http
      .delete(this.uri + '/users/deleteAgent'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  //Agents Api
  addAgents(agent: any) {
    return this.http.post(this.uri + '/users/addAgents', agent, httpOptions).pipe(
      tap((res: any) => {}),
      catchError(this.handleError),
    );
  }

  getAllAgents() {
    return this.http 
      .get(this.uri + '/users/getAgents', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  updateAgent(id: string, data: any) {
    return this.http
    .put(this.uri + '/users/updateAgents/'+id, data, httpOptions)
    .pipe(tap(), catchError(this.handleError));
  }

  getAgent(id: string) {
    return this.http
      .get(this.uri + '/users/getAgents/'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  deleteAgent(id: string) {
    return this.http
      .delete(this.uri + '/users/deleteAgent'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  //applications Api
  getApplications() {
    return this.http
      .get(this.uri + '/applications/', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getApplicant(id: string) {
    return this.http
      .get(this.uri + `/applications/${id}`, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  updateApplicant(id: string, data: any) {
    return this.http 
      .put(this.uri + `/applications/${id}`, data, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  deleteApplicant(id: string) {
    return this.http
      .delete(this.uri + '/applications/'+id, httpOptions)
  }

  //services Api
  addService(service: any) {
    return this.http
      .post(this.uri + '/services/addService', service, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getServices() {
    return this.http
      .get(this.uri + '/services/', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getService(id: string) {
    return this.http  
      .get(this.uri + '/services/'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  updateService(id: string, data: any) {
    return this.http 
      .put(this.uri + `/services/${id}`, data, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  deleteService(id: string) {
    return this.http
      .delete(this.uri + '/services/'+id, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  //leads Api
  getLeads() {
    return this.http
      .get(this.uri + '/leads', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  // clients Api
  getClients() {
    return this.http
      .get(this.uri + '/services', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getClient(id: string) {
    return this.http  
      .get(this.uri + '/services/'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  updateClient(id: string, data: any) {
    return this.http 
      .put(this.uri + `/clients/${id}`, data, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  deleteClient(id: string) {
    return this.http
      .delete(this.uri + '/clients/'+id, httpOptions)
  }

  //roles Api
  getRoles() {
    return this.http 
      .get(this.uri + '/role', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  addRole(role: any) {
    return this.http.post(this.uri + '/role', role, httpOptions).pipe(
      tap((res: any) => {}),
      catchError(this.handleError)
    );
  }

  getRole(id: string) {
    return this.http  
      .get(this.uri + '/role/'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  updateRole(id: string, data: any) {
    return this.http 
      .put(this.uri + `/role/${id}`, data, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  deleteRole(id: string) {
    return this.http
      .delete(this.uri + '/role/'+id, httpOptions)
  }

  //location Api
  getLocations() {
    return this.http 
      .get(this.uri + '/locations', httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  getLocation(id: string) {
    return this.http  
      .get(this.uri + '/locations/'+id, httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  addLocation(location: any) {
    return this.http.post(this.uri + '/locations', location, httpOptions).pipe(
      tap((res: any) => {}),
      catchError(this.handleError)
    );
  }

  updateLocation(id: string, data: any) {
    return this.http 
      .put(this.uri + `/locations/${id}`, data, httpOptions)
      .pipe(tap((res: any) => {}),
      catchError(this.handleError));
  }

  deleteLocation(id: string) {
    return this.http
      .delete(this.uri + '/locations/'+id, httpOptions)
  }
}