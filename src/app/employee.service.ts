import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Would store this in a .gitignored file in a real app
  private apiUrl: string = 'http://localhost:8080/employees';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.httpClient.get<Employee>(this.apiUrl + "/" + id);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiUrl, employee, this.httpOptions);
  }

  editEmployeeById(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.apiUrl + "/" + employee.id, employee, this.httpOptions);
  }

  deleteEmployeeById(id: string): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.apiUrl + "/" + id, this.httpOptions);
  }
}
