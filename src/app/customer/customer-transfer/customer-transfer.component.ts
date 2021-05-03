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
  message:String;
  customerAccounts: IBankAccount[];
  fromAcc1:String;

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
    
     this.fromAcc1=this.customerTransferForm.get('fromAcc').value;
     this.fromAcc1=(this.fromAcc1.substring(0,this.fromAcc1.indexOf("-"))).trim();

     this.fromAcc=Number (this.fromAcc1);
    this.toAcc=this.customerTransferForm.get('toAcc').value;
    this.amount=this.customerTransferForm.get('amount').value;
    this.custService.transfer(this.fromAcc,this.toAcc,this.amount).subscribe(data=>{
      this.message=data;
      console.log(this.message);
    });
  }

}
