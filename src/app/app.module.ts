import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component'
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import {AuthGuard} from './auth.guard';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerTransferComponent } from './customer/customer-transfer/customer-transfer.component';
import { CustomerOnLoadComponent } from './customer/customer-on-load/customer-on-load.component';
import { CustomerStatementComponent } from './customer/customer-statement/customer-statement.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DatePipe } from '@angular/common';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import {CustomerDetailsUpdateComponent} from './customer/customer-details-update/customer-details-update.component';
import { EmployeeComponent } from './employee/employee.component'
import {BankertransactionComponent} from './employee/bankertransaction/bankertransaction.component'
import {EmployeeHomeComponent} from './employee/employee-home/employee-home.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CustomerComponent,
    CustomerHomeComponent,
    CustomerTransferComponent,
    CustomerOnLoadComponent,
    CustomerStatementComponent,
    CustomerDetailsComponent,
    CustomerDetailsUpdateComponent,
    EmployeeComponent,
    BankertransactionComponent,
    EmployeeHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent  },
      {path: 'register', component: RegisterComponent  },
      {path: '', component: HomeComponent },
      {path: 'customer/:id', component: CustomerOnLoadComponent},
      {path: 'employee/:id', component: EmployeeComponent,
      children: [
       {path:'transaction',component: BankertransactionComponent,pathMatch:'full'},
       {path:'employeeHome', component: EmployeeHomeComponent, pathMatch: 'full' }
       ]
    },
      {path: 'customer/:id', component: CustomerComponent,
      children: [
        {path:'updateDetails',component: CustomerDetailsUpdateComponent,pathMatch:'full'},
        { path: 'home', component: CustomerHomeComponent, pathMatch: 'full' },
        { path: 'transfer', component: CustomerTransferComponent,pathMatch: "full" },
        { path: 'statement', component: CustomerStatementComponent,pathMatch: "full" },
        { path: 'customerdetails', component: CustomerDetailsComponent },
        
      ]},
    ])
  ],
  providers: [AuthGuard,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
