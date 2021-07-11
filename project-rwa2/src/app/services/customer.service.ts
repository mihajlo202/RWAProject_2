import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url-constants";
import { Customer } from "../models/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl=environmentVariables.JSON_URL;

  constructor(private http: HttpClient) { }

  getCustomerByEmail(email: string): Observable<Customer>{
    let url=this.baseUrl+`customer?email=${email}`;
    return this.http.get<Customer>(url);
  }

  registerCustomer(customer:Customer):Observable<Customer>{
    let url=this.baseUrl+`customer`;
    return this.http.post<Customer>(url,customer);
  }

}