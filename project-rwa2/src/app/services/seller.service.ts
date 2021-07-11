import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url-constants";
import { Seller } from "../models/Seller";

@Injectable({
    providedIn: 'root'
})
export class SellerService {
  private baseUrl = environmentVariables.JSON_URL;

  constructor(private http:HttpClient) {}

  getSellerByEmail(email: string): Observable<Seller>{
    let url=this.baseUrl+`seller?email=${email}`;
    return this.http.get<Seller>(url);
  }
  
  registerSeller(seller:Seller):Observable<Seller>{
    let url=this.baseUrl+`seller`;
    return this.http.post<Seller>(url,seller);
  }
}