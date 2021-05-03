import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-bankertransaction',
  templateUrl: './bankertransaction.component.html',
  styleUrls: ['./bankertransaction.component.css']
})
export class BankertransactionComponent implements OnInit {
  BankerTransactionForm: FormGroup;
  accountNo: number;
  amount:number;
  transactionType: String;
  message:String;
  flag: boolean=false;

  constructor( private fb: FormBuilder, private empService: EmployeeService) { }

  ngOnInit(): void {

    this.BankerTransactionForm = this.fb.group({
      accountNo: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      transactionType: ['', Validators.required]
    });
  }
  update(){
    
    this.accountNo=this.BankerTransactionForm.get('accountNo').value;
    this.amount=this.BankerTransactionForm.get('amount').value;
    this.transactionType=this.BankerTransactionForm.get('transactionType').value;
    this.empService.makeTransaction(this.accountNo,this.amount,this.transactionType).subscribe(data=>{
      this.message=data;  
    }
    );
    this.flag=true;

  }
  }


