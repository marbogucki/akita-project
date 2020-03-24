import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(catchError(this.handleError));
  }

  public add<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body).pipe(catchError(this.handleError));
  }

  public update<T>(url: string, body: T): Observable<T> {
    return this.http.put<T>(url, body).pipe(catchError(this.handleError));
  }

  public remove<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage: string = error.error instanceof ErrorEvent
      ? `An error occurred: , ${error.error.message}`
      : `Backend returned code ${error.status}, body was: ${error.error}`;

    return throwError({
      status: error.status,
      statusText: errorMessage
    });
  }
}
