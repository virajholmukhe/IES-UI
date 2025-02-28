import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IncomeDetails } from '../models/IncomeDetails';
import { EducationDetails } from '../models/EducationDetails';
import { FamilyDetails } from '../models/FamilyDetails';
import { BankDetails } from '../models/BankDetails';

@Injectable({
  providedIn: 'root'
})
export class DcService {

  API_BASE_URL: string = 'http://localhost:8004/data-collection';

  constructor(private http: HttpClient) { }

  public getPlanList(): Observable<any> {
    return this.http.get(this.API_BASE_URL + "/get-plan-list")
      .pipe(
        tap((data) => console.log('Data Fetched: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public getIncomeDetails(caseNumber: string): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/get-income-details/' + caseNumber)
      .pipe(
        tap((data) => console.log('Data Fetched: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public updateIncomeDetails(incomeDetails: IncomeDetails): Observable<any> {
    return this.http.post(this.API_BASE_URL + '/update-income-details', incomeDetails)
      .pipe(
        tap((data) => console.log('Data Updated: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public saveIncomeDetails(incomeDetails: IncomeDetails): Observable<any> {
    return this.http.post(this.API_BASE_URL + '/save-income-details', incomeDetails)
      .pipe(
        tap((data) => console.log('Data Saved: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public saveEducationDetails(educationDetails: EducationDetails): Observable<any> {
    return this.http.post(this.API_BASE_URL + '/save-education-details', educationDetails)
      .pipe(
        tap((data) => console.log('Data Saved: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public saveFamilyDetails(familyDetails: FamilyDetails): Observable<any> {
    return this.http.post(this.API_BASE_URL + '/save-family-details', familyDetails)
      .pipe(
        tap((data) => console.log('Data Saved: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public saveBankDetails(bankDetails: BankDetails): Observable<any> {
    return this.http.post(this.API_BASE_URL + '/save-bank-details', bankDetails)
      .pipe(
        tap((data) => console.log('Data Saved: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public getSummaryDetails(caseNumber: string): Observable<any> {
    return this.http.get(this.API_BASE_URL + '/get-summary-details/' + caseNumber)
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
