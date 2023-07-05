import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getAllSubjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/subject`);
  }

  getSubjectById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/subject/${id}`);
  }

  createSubject(subject: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post`, subject);
  }

  deleteSubjectById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/subject/delete/${id}`);
  }

  updateSubjectById(id: string, subject: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, subject);
  }
}
