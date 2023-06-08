import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Transaction} from "../models/transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) {
  }

  public convert(value: string, from_type: string, to_type: string): Observable<any> {
    const API_KEY: string = '6402057fb6msh6f97fa15f597b2ep14c7acjsnaf54dbc66841';
    const HOST: string = 'community-neutrino-currency-conversion.p.rapidapi.com';
    const CONTENT_TYPE: string = 'application/x-www-form-urlencoded';
    const URL: string = 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert';

    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': CONTENT_TYPE,
        'X-RapidAPI-Host': HOST,
        'X-RapidAPI-Key': API_KEY
      })
    };

    const body = new HttpParams()
      .set('from-value', value)
      .set('from-type', from_type)
      .set('to-type', to_type);

    return this.http.post(URL, body, httpOptions);
  }

  getListCurrency(): Observable<any> {
    return this.http.get('https://v6.exchangerate-api.com/v6/ffe269672cbf5099377acda0/latest/USD');
  }

  createTransaction(transaction: Transaction): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/transactions/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }), params: new HttpParams()
    };

    let body = JSON.stringify(transaction);
    return this.http.post(URL, body, HTTP_OPTIONS);
  }

  getTransactions(): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/transactions/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({}), params: new HttpParams()
    };
    return this.http.get(URL, HTTP_OPTIONS);
  }

  getTransactionsByMoneda(moneda: string): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/transactions/monedas/' + moneda;
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({}), params: new HttpParams()
    };
    return this.http.get(URL, HTTP_OPTIONS);
  }

}
