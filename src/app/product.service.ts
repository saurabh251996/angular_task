import { Injectable } from '@angular/core';
import  {HttpClient}  from '@angular/common/http'
import { Observable, } from 'rxjs';
import {base} from "../static/baseUrl"

import { map } from 'rxjs/operators';
import { getLocaleDateFormat } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) {

   }
   addProduct(body:any){
    const url=`${base}/addProduct`
    return this.http.post(url,body)
  }
  getData(){
    const url=`${base}/getProduct`
    return this.http.get(url)
  }



}
