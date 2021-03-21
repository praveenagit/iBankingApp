import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from '../customer/customerservice.service';
import { IBankAccount } from '../model/BankAccount';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  

  customerId: number;
  @Input() 
  public accounts: IBankAccount[];
  errMsg: string;
  
  constructor( private route: ActivatedRoute,private custService:CustomerserviceService) {
   
        
   }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.customerId = Number(paramMap.get('id'));
  })
   this.custService.getDetails(this.customerId).subscribe({
      next: accounts =>this.accounts=accounts,
      error: err => this.errMsg=err

    });
    //this.customerId=+this.route.snapshot.paramMap.get('id');
    //console.log(this.customerId);
  }
 


  
}
