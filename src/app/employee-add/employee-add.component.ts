import { Component, OnInit } from '@angular/core';
import { Employee, Skill } from '../interfaces/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  constructor(private employeeService: EmployeeService, private router: Router) {}

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
  name: string = '';
  type: string = '';
  experience: number = 0;

  skills: Skill[] = [];

  ngOnInit(): void {}

  addSkill(): void {
    let skill: Skill = {
      id: '',
      field: { id: '', name: this.name, type: this.type },
      experience: this.experience,
    };
    this.skills.push(skill);
    this.name = '';
    this.type = '';
    this.experience = 0;
  }

  deleteSkill(index: number): void {
    this.skills.splice(index, 1);
  }

  addEmployee(): void {
    let employee: Employee = {
      id: null,
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
      skills: this.skills,
    };
    this.employeeService.addEmployee(employee).subscribe(
      (data: Employee) => console.log(data),
      (error) => console.log(error)
    );
    this.router.navigate(['/employees']);
  }
}
