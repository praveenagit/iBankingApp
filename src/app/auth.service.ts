import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  customerLogin(customerId, password){
    const requestOptions: Object = {
      responseType: 'text'
    }
    let loginUrl=`http://localhost:8008/bankapi/api/customer/${customerId}/${password}`;
    return this.http.get<any>(loginUrl, requestOptions);
  }
  employeeLogin(empId, password){
    const requestOptions: Object = {
      responseType: 'text'
    }
    let loginUrl=`http://localhost:8008/bankapi/api/employee/${empId}/${password}`;
    return this.http.get<any>(loginUrl, requestOptions);
  }

}
