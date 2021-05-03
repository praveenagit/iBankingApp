import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-details-update',
  templateUrl: './customer-details-update.component.html',
  styleUrls: ['./customer-details-update.component.css']
})
export class CustomerDetailsUpdateComponent implements OnInit {

  customer: Customer;
  Name: String;
  message: String;
  customerDetailsUpdateForm: FormGroup;
  formBuilder: any;
  sharepointService: any;
  itemData: any;
  editForm: any;
  flag: Boolean=false;



  constructor(private custService: CustomerserviceService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.customerDetailsUpdateForm = this.fb.group({
      customerName: ['', [Validators.required]],
      customerEmail: ['', [Validators.required]],
      phoneNumber: ['', Validators.required]
    });
    this.custService.getCustomerDetails().subscribe(data => {
      this.customer = data;
    });  
  }

  update() {
    console.log(this.customer);
    this.custService.updateDetails(this.customer).subscribe(
      data=>this.message=data
    );
    this.flag=true;
      
  }


}
