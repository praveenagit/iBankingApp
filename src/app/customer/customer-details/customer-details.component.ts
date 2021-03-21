import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId: number;
  customer: Customer;
  message: String;


  constructor(private route: ActivatedRoute,private router: Router,private custService:CustomerserviceService) { }

  ngOnInit(): void {
      this.customerId=this.custService.getCustomerId();
      this.custService.getCustomerDetails().subscribe({
        next: cust=>{
          this.customer=cust;
          console.log(this.customer)
        },
        error: err=>this.message=err   
       
    });
      
   //console.log(this.customer,this.customerId);
   /* this.productService.getProductsById(id).subscribe({
      next: product=>this.product=product,
      error: err=>this.errorMessage=err   
     
  });  */ 


  }
  updateDetails(){
    this.router.navigate(['customer/'+this.customerId+'/updateDetails']);
    
  }

}
