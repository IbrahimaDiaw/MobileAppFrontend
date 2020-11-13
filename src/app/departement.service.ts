import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiUrl = "https://gp-backendapi.herokuapp.com/api/departements";

  constructor(private http:HttpClient) { }

  getdepartementlist(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);

  }

  create(departement:Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/create`, departement);
  }

  edit(id:string, value:any): Observable<Object>{
    return this.http.put(`${this.apiUrl}/update/${id}`, value);
  }
  
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }

  get(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/details/${id}`);
  }

}
