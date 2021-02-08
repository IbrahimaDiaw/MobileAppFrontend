import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongesService {
 private apiUrl = "https://gp-backendapi.herokuapp.com/api/conges";
  constructor(private http:HttpClient) { }

  congeslist():Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  create(conges : Object):Observable<Object>{
    return this.http.post(`${this.apiUrl}/create`, conges);
  }

  details(id:string):Observable<any> {
    return this.http.get(`${this.apiUrl}/details/${id}`);
  }

  update(id:string, value:any):Observable<Object> {
    return this.http.put(`${this.apiUrl}/update/${id}`, value);
  }

  delete(id:string):Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }
}
