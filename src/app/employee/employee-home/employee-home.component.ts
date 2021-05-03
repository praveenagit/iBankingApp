import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  employeeId: number;
  employee: Employee

  constructor(private empService: EmployeeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.empService.getDetails().subscribe(data=>{
    this.employee=data;
  });
  }

}
