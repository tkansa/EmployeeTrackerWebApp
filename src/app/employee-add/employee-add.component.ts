import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  firstName: string = '';
  lastName: string = '';
  street: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  country: string = '';
  companyEmail: string = '';
  birthDate: string = '';
  hiredDate: string = '';
  role: string = '';

  ngOnInit(): void {}

  addEmployee(): void {
    let employee: Employee = {
      id: '',
      firstName: this.firstName,
      lastName: this.lastName,
      address: {
        id: '',
        street: this.street,
        city: this.city,
        region: this.region,
        postal: this.postal,
        country: this.country,
      },
      companyEmail: this.companyEmail,
      birthDate: this.birthDate,
      hiredDate: this.hiredDate,
      role: this.role,
      skills: [],
    };
    this.employeeService.addEmployee(employee).subscribe(
      (data: Employee) =>
      console.log(data),
      error => console.log(error)
    )
  }
}
