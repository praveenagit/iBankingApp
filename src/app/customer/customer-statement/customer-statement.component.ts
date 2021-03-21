import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IBankAccount } from 'src/app/model/BankAccount';
import { CustomerComponent } from '../customer.component';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-statement',
  templateUrl: './customer-statement.component.html',
  styleUrls: ['./customer-statement.component.css']
})
export class CustomerStatementComponent implements OnInit {

  customerStatementForm: FormGroup;
  AccNo: number;
  fromDate: Date;
  toDate: Date;
  Message:String;
  customerAccounts: IBankAccount[];

  constructor(private route:ActivatedRoute, 
    private fb: FormBuilder,
    private custService: CustomerserviceService,
    private customerAcc: CustomerComponent) { }

  ngOnInit(): void {
    this.customerAccounts=this.customerAcc.accounts;
    console.log(this.customerAccounts);
    this.customerStatementForm=this.fb.group({
      fromAcc:['',[Validators.required]],
      fromDate: ['',[Validators.required]],
      toDate:['',Validators.required]  
    });
    
  }

  getStatement(){
    this.AccNo=this.customerStatementForm.get('fromAcc').value;
    this.fromDate=this.customerStatementForm.get('fromDate').value;
    this.toDate=this.customerStatementForm.get('toDate').value;
    this.custService.getStatement(this.AccNo,this.fromDate,this.toDate).subscribe(data=>{
      this.Message=JSON.stringify(data);
      console.log(this.Message);

    });
  }
}

