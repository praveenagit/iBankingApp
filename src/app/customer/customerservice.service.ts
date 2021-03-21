import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, map, share, tap } from 'rxjs/operators';
import { IBankAccount } from '../model/BankAccount';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  customerId:number;
  cust:Customer;
  //itemData = new ItemData();
 /* private itemDataSource = new ReplaySubject<Customer>(1);
  cust$ = this.itemDataSource.asObservable();*/

  constructor(private http: HttpClient,private datePipe: DatePipe ) { }
  

  getDetails(customerId: number): Observable<IBankAccount[]> {
    let url=`http://localhost:8008/bankapi/api/customerAcc/${customerId}`;
    this.customerId=customerId;

    return this.http.get<IBankAccount[]>(url).pipe(share());
  /*  pipe(tap (data=>console.log('All: '+JSON.stringify(data))),
    catchError(this.handleError)).pipe(share());*/

  }
 /* private handleError(err: HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof ErrorEvent)
        errorMessage=`An error occured ${err.error.message}`;
    else{
        errorMessage=`server returned code ${err.status} and error is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
    
}*/

  getCustomerId(): number{
  return this.customerId;
}

  transfer(fromAcc:number,toAcc:number,amount:number): Observable<any>{
    console.log(fromAcc,toAcc,amount);
    let url=`http://localhost:8008/bankapi/api/customer/${fromAcc}/${toAcc}/${amount}`;
    return this.http.put<any>(url,{ responseType: 'text'as 'json'}).pipe(share());
     
  }
  handleObjectResponse(res: any) {
    throw new Error('Method not implemented.');
  }

  getStatement(AccNo: number,fromDate: Date,toDate: Date){
    var fromDateToDB=this.datePipe.transform(fromDate,'yyyy-MM-dd');
    var toDateToDB=this.datePipe.transform(toDate,'yyyy-MM-dd');
    console.log(AccNo,fromDateToDB,toDateToDB);
    let url=`http://localhost:8008/bankapi/api/customer/${AccNo}/${fromDateToDB}/${toDateToDB}`;
    return this.http.get(url,{ responseType: 'text'as 'json'}).pipe(share());

    
  }
  getCustomerDetails(){
    let url=`http://localhost:8008/bankapi/api/customer/${this.customerId}`;
    //this.cust= this.http.get<Customer>(url);
    return this.http.get<Customer>(url);

   
  }

}
