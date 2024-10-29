import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Options } from '../../types';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpclient: HttpClient
  ) { }
  get<T>(url: string,options: Options): Observable<T> {
    return this.httpclient.get<T>(url,options) as Observable<T>;
  }

  post<T>(url: string,body: Product,options: Options): Observable<T> {
    return this.httpclient.post<T>(url,body,options) as Observable<T>;
  }

  put<T>(url: string,body: Product,options: Options): Observable<T> { 
    return this.httpclient.put<T>(url,body,options) as Observable<T>;
  }

  delete<T>(url: string,options: Options): Observable<T> {
    return this.httpclient.delete<T>(url,options) as Observable<T>;
  }
}
