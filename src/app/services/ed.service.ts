import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdService {

  API_BASE_URL: string = 'http://localhost:8005/eligibility-determination';

  constructor(
    private http: HttpClient
  ) { }

  public determineEligibility(caseNumber: string): Observable<any> {
    console.log('Case Number: ' + caseNumber);
    return this.http.get(this.API_BASE_URL + '/get-eligibility/' + caseNumber)
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
