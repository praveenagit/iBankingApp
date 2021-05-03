import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Employee} from '../model/employee'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeId: number;

  constructor(private http: HttpClient) {

  }

  makeTransaction(accountNo, amount, transactionType){
    let url=`http://localhost:8008/bankapi/api/employee/${accountNo}/${amount}/${transactionType}`;
    return this.http.put<any>(url,{  responseType: 'text' });
  } 

  setEmpId(employeeId){
    this.employeeId=employeeId;
  }
  getDetails(){
    console.log(this.employeeId);
    let url = `http://localhost:8008/bankapi/api/employee/${this.employeeId}`;
    return this.http.get<Employee>(url);
  }
}
