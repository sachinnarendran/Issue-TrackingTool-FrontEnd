import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  private formatErrors(error:any)
  {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiURL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.apiURL}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log(JSON.stringify(body));
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.http.post(`${environment.apiURL}${path}`, body,config)
      .pipe(catchError(this.formatErrors));
  }

  delete(path, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(`${environment.apiURL}${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }
  
}
