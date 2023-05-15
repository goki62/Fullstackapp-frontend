import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  api: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
   return this.http.get<Employee[]>(this.api + '/api/employees')
  }

  addEmployee(addEmployeeReq: Employee): Observable<Employee>{
    addEmployeeReq.id = '00000000-0000-0000-0000-000000000000';
  return this.http.post<Employee>(this.api + '/api/employees', addEmployeeReq)
  }

  getEmployee(id: string): Observable<Employee>{
   return this.http.get<Employee>(this.api + '/api/employees/' + id)
  }

  updateEmployee(id: string, updateEmployeeReq: Employee): Observable<Employee> {
   return this.http.put<Employee>(this.api + '/api/employees/' + id, updateEmployeeReq);
  }

  deleteEmplyee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.api + '/api/employees/' + id);
  }
}
