import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  
 

  loginUser(customerId, password){
    const requestOptions: Object = {
      responseType: 'text'
    }

    let loginUrl=`http://localhost:8008/bankapi/api/customer/${customerId}/${password}`;

    return this.http.get<any>(loginUrl, requestOptions);
    
  }
}
