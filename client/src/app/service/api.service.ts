import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {

  public baseUri /*: string*/ = environment.baseUri;
  public headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  private http: HttpClient;

  constructor( private router: Router,
               http: HttpClient ) {
    this.http = http;
  }

  post(request: string, body: any, options?: object): Observable<any> {
    const url = this.baseUri + request;
    console.log(url);
    return this.http.post(url, body, options).pipe(catchError(this.errorHandler));
  }

  get(request: string, options?: object): Observable<any> {
    const url = this.baseUri + request;
    console.log(url);
    return this.http.get(url, options).pipe(catchError(this.errorHandler));
  }

  put(request: string, body?: any, options?: object): Observable<any> {
    const url = this.baseUri + request;
    console.log(url);
    return this.http.put(url, body, options).pipe(catchError(this.errorHandler));
  }

  delete(request: string, options?: object): Observable<any> {
    const url = this.baseUri + request;
    console.log(url);
    return this.http.delete(url, options).pipe(catchError(this.errorHandler));
  }

  // error handling
  errorHandler(error: HttpErrorResponse): Observable<Error>{
    let errorMessage: {
      error: string,
      status?: number,
      message: string
    } = {
      error: '',
      message: ''
    };
    if (error.error instanceof ErrorEvent) {
      // get client error
      errorMessage = {
        error: 'Client error',
        message: error.error.message,
      };
    } else {
      // get server error
      errorMessage = {
        error: `Error code : ${error.status}\n Message: ${error.message}`,
        status: error.status,
        message: error.error.msg
      };
    }
    return throwError(errorMessage);
  }

}
