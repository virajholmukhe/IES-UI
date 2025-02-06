import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationRequest } from '../models/AuthenticationRequest';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/User';
import { JwtUtils } from '../../utils/jwtUtils';
import { Router } from '@angular/router';
import { UpdatePasswordRequest } from '../models/UpdatePasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_BASE_URL: string = 'http://localhost:8082';

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(body: AuthenticationRequest): Observable<any> {
    return this.http.post(this.API_BASE_URL+'/auth/authenticate', body, {responseType: 'json'})
    .pipe(
      tap((data)=> console.log('Data Fetched: ' + data)),
      catchError(this.handleError)
    );
  }

  register(body: User): Observable<any> {
    return this.http.post(this.API_BASE_URL+'/auth/register', body)
    .pipe(
      // tap((data)=> console.log('Data Fetched: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updatePassword(updatePasswordRequest: UpdatePasswordRequest): Observable<any> {
    return this.http.post(this.API_BASE_URL+'/auth/update-password', updatePasswordRequest)
    .pipe(
      catchError(this.handleError)
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (!token) {
      return false;
    }

    // Check if token is expired
    const isExpired = JwtUtils.isTokenExpired();
    if (isExpired) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isTokenValid(username: string): Observable<any>{
    return this.http.get(this.API_BASE_URL+'/auth/validate/'+username)
    .pipe(
      catchError(this.handleError)
    )
  }

  validateUsername(token: string): Observable<any>{
    return this.http.get(this.API_BASE_URL + '/auth/validate-token?token='+token)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse): Observable<any>{
    let errMsg = '';
    if(err.error instanceof Error){
      // console.log('An error occured: ', err.error.message);
      errMsg = err.error.message;
    }else{
      // console.log(err.error.message);
      // console.log(`Backend returned code ${err.error.substring(12).slice(0,-2)}`);
      errMsg = err.error.message;
      // console.log(errMsg);
    }
    return throwError(()=> errMsg);
  }
}
