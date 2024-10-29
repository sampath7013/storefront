import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs'; 
import { PaginationParams } from '../../types';
import { response } from 'express';
import { products } from '../../types';
import { ApiService } from '../service/api.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) { }
  getProducts=(url:string,params:PaginationParams):Observable< products>=>{
    return this.apiService.get(url,{
      params,
      responseType: 'json'
    })
  }

addProduct=(url:string,body:any):Observable<any>=>{
  return this.apiService.post(url,body,{})}

editProduct=(url:string,body:any):Observable<any>=>{
  return this.apiService.put(url,body,{});
}

deleteProduct=(url:string):Observable<any>=>{
  return this.apiService.delete(url,{})
}

}
