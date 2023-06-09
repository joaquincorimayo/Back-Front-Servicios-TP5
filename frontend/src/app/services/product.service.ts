import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProductsDest(): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/products/dest';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({}), params: new HttpParams()
    };
    return this.http.get(URL, HTTP_OPTIONS);
  }

  createProduct(product: Product): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/products/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }), params: new HttpParams()
    };

    let body = JSON.stringify(product);
    return this.http.post(URL, body, HTTP_OPTIONS);
  }

}
