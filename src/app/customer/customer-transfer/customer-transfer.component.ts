import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBankAccount } from 'src/app/model/BankAccount';
import { CustomerComponent } from '../customer.component';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-transfer',
  templateUrl: './customer-transfer.component.html',
  styleUrls: ['./customer-transfer.component.css']
})
export class CustomerTransferComponent implements OnInit {

  customerTransferForm: FormGroup;
  fromAcc: number;
  toAcc: number;
  amount: number;
  Message:String;
  customerAccounts: IBankAccount[];

  constructor(private route:ActivatedRoute, 
    private fb: FormBuilder,
    private custService: CustomerserviceService,
    private customerAcc: CustomerComponent) { 
      
    }

  ngOnInit(): void {
    this.customerAccounts=this.customerAcc.accounts;
    console.log(this.customerAccounts);
    this.customerTransferForm=this.fb.group({
      fromAcc:['',[Validators.required]],
      toAcc: ['',[Validators.required]],
      amount:['',Validators.required]  
    });
    
  }


  transfer(){

    this.fromAcc=this.customerTransferForm.get('fromAcc').value;
    this.toAcc=this.customerTransferForm.get('toAcc').value;
    this.amount=this.customerTransferForm.get('amount').value;
    this.custService.transfer(this.fromAcc,this.toAcc,this.amount).subscribe(data=>{
      this.Message=JSON.stringify(data);
      console.log(this.Message);

    });
  }

}
