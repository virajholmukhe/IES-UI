import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CitizenApplication } from '../models/CitizenApplication';

@Injectable({
  providedIn: 'root'
})
export class ArService {

  API_BASE_URL: string = 'http://localhost:8003/application-registration';

  constructor(private http: HttpClient) { }

  public createApplication(citizenApplication: CitizenApplication): Observable<any> {
    return this.http.post(this.API_BASE_URL + '/create-application', citizenApplication)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getApplications(): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/get-all-applications')
      .pipe(
        tap((data)=> console.log('Data Fetched: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public updatePlan(caseNumber: string, planId: string, planName: string): Observable<any> {
    return this.http.put(this.API_BASE_URL + "/update-plan-selection?caseNumber=" + caseNumber + "&planId=" + planId + "&planName=" + planName, {})
      .pipe(
        tap((data) => console.log('Data Fetched: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // console.log('An error occured: ', err.error.message);
      errMsg = err.error.message;
    } else {
      // console.log(err.error.message);
      // console.log(`Backend returned code ${err.error.substring(12).slice(0,-2)}`);
      errMsg = err.error.message;
      // console.log(errMsg);
    }
    return throwError(() => errMsg);
  }
}
