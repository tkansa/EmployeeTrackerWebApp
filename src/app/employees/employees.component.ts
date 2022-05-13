import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../interfaces/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (data: Employee[]) => this.employees = data,
      error => console.error(error)
    );
  }

  deleteEmployeeById(id: string): void {
    // update the UI
    this.employees = this.employees.filter(employee => employee.id != id);
    // call the API
    this.employeeService.deleteEmployeeById(id).subscribe();
  }

}
