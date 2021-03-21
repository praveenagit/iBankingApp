import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'
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
  customerId:number;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }
  loginUser(event){
    event.preventDefault()
    const target=event.target
    this.customerId=target.querySelector('#customerId').value
    const password=target.querySelector('#password').value
    this.auth.loginUser(this.customerId,password).subscribe(
      (res) => {
          console.log(res);
          //this.isAuthenticated=res;
          if(res==="login success")
            this.router.navigate(['customer',this.customerId] );
          else
            //this.router.navigate(['']);
            alert(res);
      },
     (err) =>this.errorMessage=err
    );


  }
  getCustomerId(){
    return this.customerId;
  }
}
