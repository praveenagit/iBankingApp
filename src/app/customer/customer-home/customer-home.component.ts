import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBankAccount } from 'src/app/model/BankAccount';
import { CustomerComponent } from '../customer.component';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  customerId: number;
  accounts: IBankAccount[];
  errMsg: string;
  
  constructor(private route: ActivatedRoute,private custService:CustomerserviceService) { }

  ngOnInit(): void {

    this.customerId=this.custService.getCustomerId();
    console.log(this.customerId)
    this.custService.getDetails(this.customerId).subscribe({
      next: accounts =>{this.accounts=accounts,
                        console.log(this.accounts)},
      error: err => this.errMsg=err

    });
    //console.log(this.accounts);

  }  

}
