import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "https://gp-backendapi.herokuapp.com/api/employees";

  constructor(private http:HttpClient) { }

  getemployeelist():Observable<any>{
    return this.http.get(`${this.apiUrl}/`);
  }

  create(employee:Object):Observable<Object>{
    return this.http.post(`${this.apiUrl}/create`, employee);
  }

  edit(id:string, value:any):Observable<Object>{
    return this.http.put(`${this.apiUrl}/update/${id}`, value);
  }

  delete(id:string):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`, {responseType:'text'});
  }

  get(id:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/details/${id}`);
  }
}
