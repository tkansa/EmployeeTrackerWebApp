import { Component, OnInit } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee;
  id: string;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // get the id off of the url
    this.route.params.subscribe(params => this.id = params['id']);

    // get the employee
    this.employeeService.getEmployeeById(this.id).subscribe(
      (data: Employee) => this.employee = {...data},
      error => console.error(error)
    );
  }

}
