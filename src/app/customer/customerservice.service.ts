import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, ReplaySubject, throwError } from 'rxjs';
import { catchError, map, share, tap } from 'rxjs/operators';
import { IBankAccount } from '../model/BankAccount';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  customerId: number;
  cust: Customer;
  customer: Customer;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }


  getDetails(customerId: number): Observable<IBankAccount[]> {
    let url = `http://localhost:8008/bankapi/api/customerAcc/${customerId}`;
    this.customerId = customerId;

    return this.http.get<IBankAccount[]>(url).pipe(share());

  }

  getCustomerId(): number {
    return this.customerId;
  }

  transfer(fromAcc: number, toAcc: number, amount: number): Observable<any> {
    console.log(fromAcc, toAcc, amount);
    let url = `http://localhost:8008/bankapi/api/customer/${fromAcc}/${toAcc}/${amount}`;
    return this.http.put<any>(url, { responseType: 'text' }).pipe(share());

  }


  getStatement(AccNo: number, fromDate: Date, toDate: Date) {
    var fromDateToDB = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
    var toDateToDB = this.datePipe.transform(toDate, 'yyyy-MM-dd');
    console.log(AccNo, fromDateToDB, toDateToDB);
    let url = `http://localhost:8008/bankapi/api/customer/${AccNo}/${fromDateToDB}/${toDateToDB}`;
    return this.http.get<String>(url, { responseType: 'text' as 'json' });


  }
  getCustomerDetails() {
    let url = `http://localhost:8008/bankapi/api/customer/${this.customerId}`;
    //this.cust= this.http.get<Customer>(url);
    return this.http.get<Customer>(url);


  }
  updateDetails(cust: Customer) {
    let url = `http://localhost:8008/bankapi/api/customer/${this.customerId}`;
    const body = JSON.stringify(cust);
    let HTTPOptions: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    }
    return this.http.put<any>(url, body, HTTPOptions).pipe(
      catchError(this.handleError)
    );
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }

}
