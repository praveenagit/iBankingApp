import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-details-update',
  templateUrl: './customer-details-update.component.html',
  styleUrls: ['./customer-details-update.component.css']
})
export class CustomerDetailsUpdateComponent implements OnInit {

  customer: Customer={
    Name:"",
    Id:"",
    email:"",
    phone:""
  };
  message: String;
  customerDetailsUpdateForm: FormGroup;
  formBuilder: any;
  sharepointService: any;
  itemData: any;
  editForm: any;



  constructor(private custService: CustomerserviceService ,private fb: FormBuilder) {
    //this.customerDetailsUpdateForm.get('customerName').setValue(this.customer.Name);
    
    //console.log(this.customer);
  }

  ngOnInit(): void {
    this.custService.getCustomerDetails().subscribe({
      next: customer=>{
        this.customer=customer;
        /*console.log(this.customer);
        this.customerDetailsUpdateForm.get('customerName').setValue(this.customer.Name);
        this.createFormGroup(customer);
        console.log(this.customer);*/
        
      },
      error: err=>this.message=err   
     
  });
  //console.log(this.customer);
 this.customerDetailsUpdateForm=this.fb.group({
    customerName:['',[Validators.required]],
    customerEmail: ['',[Validators.required]],
    phoneNumber:['',Validators.required]  
  });

  }

 /* createFormGroup(cust:Customer){
    console.log(cust);
    this.customer=cust;
    console.log(cust.Name);
    this.customerDetailsUpdateForm.patchValue({
      customerName: cust.Name,
      customerEmail:cust.email,
      phoneNumber: cust.phone
    });
    this.customerDetailsUpdateForm.get('customerName').setValue(this.customer.Name);

  }*/
  
  update(){
    
  }
  

}
