import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../models/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  createTicket(ticket: Ticket): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/tickets/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }), params: new HttpParams()
    };
    const body = JSON.stringify(ticket);
    return this.http.post(URL, body, HTTP_OPTIONS);
  }

  actualizarTicket(ticket: Ticket): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/tickets/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      }), params: new HttpParams()
    };
    const body = JSON.stringify(ticket);
    return this.http.put(URL, body, HTTP_OPTIONS);
  }



  getTickets(): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/tickets/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({}), params: new HttpParams()
    };
    return this.http.get(URL, HTTP_OPTIONS);
  }

  deleteTicket(id: string): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/tickets/' + id;
    return this.http.delete(URL);
  }

  getTicketsByEspectador(type: string): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/tickets/category/' + type;
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({}), params: new HttpParams()
    };
    return this.http.get(URL, HTTP_OPTIONS);
  }

  getAllEspectadores(): Observable<any> {
    const URL = 'http://localhost:3000/api/v1/espectadores/';
    const HTTP_OPTIONS = {
      headers: new HttpHeaders({}), params: new HttpParams()
    };
    return this.http.get(URL, HTTP_OPTIONS);
  }

}
