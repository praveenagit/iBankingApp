import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { Customer } from '../model/customer';

@Component({
  //selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated: Boolean;
  customer: Customer;
  errorMessage: string;
  customerId: number;
  employeeId: number;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  customerLogin(event) {
    event.preventDefault()
    const target = event.target
    this.customerId = target.querySelector('#customerId').value
    const password = target.querySelector('#password').value
    this.auth.customerLogin(this.customerId, password).subscribe(
      (res) => {
        console.log(res);
        //this.isAuthenticated=res;
        if (res === "login success")
          //this.router.navigate(['customer/', this.customerId ]);
          this.router.navigate(['customer/'+this.customerId+'/home'])
        else
          //this.router.navigate(['']);
          alert(res);
      },
      (err) => this.errorMessage = err
    );


  }
  employeeLogin(event) {
    event.preventDefault()
    const target = event.target
    this.employeeId = target.querySelector('#employeeId').value
    const password = target.querySelector('#password').value
    this.auth.employeeLogin(this.employeeId, password).subscribe(
      (res) => {
        console.log(res);
        //this.isAuthenticated=res;
        if (res === "login success")
          this.router.navigate(['employee/' + this.employeeId + '/employeeHome'])
        // this.router.navigate(['employee',this.employeeId] );
        else
          //this.router.navigate(['']);
          alert(res);
      },
      (err) => this.errorMessage = err
    );

  }
  getCustomerId() {
    return this.customerId;
  }

}
