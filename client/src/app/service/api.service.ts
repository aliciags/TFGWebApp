import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  public baseUri: string = 'http://localhost:5000/api';
  public headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  private http: HttpClient;
  
  constructor( http: HttpClient ) { 
    this.http = http;
  }

  post(request: string, body: any, options?: Object): Observable<any> {
    let url = this.baseUri + request;
    console.log(url);
    return this.http.post(url, body, options);
  }

  get(request: string, options?: Object): Observable<any> {
    let url = this.baseUri + request;
    console.log(url);
    return this.http.get(url, options);
  }

  put(request: string, body?: any, options?: Object): Observable<any> {
    let url = this.baseUri + request;
    console.log(url);
    return this.http.put(url, body, options);
  }

  //error handling
  /*errorUser(error: HttpErrorResponse){
    var errorMessage: string = '';
    if(error.error instanceof ErrorEvent) {
      //get client error
      errorMessage = error.error.message;
    }else {
      //get server error
      errorMessage = `Error code : ${error.status}\n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }*/

}
