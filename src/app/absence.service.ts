import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private apiUrl = "https://gp-backendapi.herokuapp.com/api/absences";
  constructor(private http : HttpClient ) { }

  absencelist() : Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  create(absence :  Object): Observable<Object> {
    return this.http.post(`${this.apiUrl}/create`, absence);
  }

  update(id:string, value:any ): Observable<Object> {
    return this.http.put(`${this.apiUrl}/update/${id}`, value);
  }

  delete(id:string) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`,{ responseType: 'text' });
  }

  details(id:string) : Observable<any> {
    return this.http.get(`${this.apiUrl}/details/${id}`);
  }
}
