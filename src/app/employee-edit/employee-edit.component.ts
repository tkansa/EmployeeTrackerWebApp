import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { emit } from 'process';
import { EmployeeService } from '../employee.service';
import { Employee, Skill } from '../interfaces/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee: Employee;
  id: string;
  name: string = '';
  type: string = '';
  experience: number = 0;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     // get the id off of the url
     this.route.params.subscribe(params => this.id = params['id']);

     // get the employee
     this.employeeService.getEmployeeById(this.id).subscribe(
       (data: Employee) => this.employee = {...data},
       error => console.error(error)
     );
  }
  addSkill(): void {
    let skill: Skill = {
      id: '',
      field: { id: '', name: this.name, type: this.type },
      experience: this.experience,
    };
    this.employee.skills.push(skill);
    this.name = '';
    this.type = '';
    this.experience = 0;
  }
  deleteSkill(index: number): void {
    this.employee.skills.splice(index, 1);
  }

  editEmployee(): void {
    this.employeeService.editEmployeeById(this.employee).subscribe(
      (data: Employee) => console.log(data),
      (error) => console.log(error)
    );
    this.router.navigate(['/employees']);
  }

}
