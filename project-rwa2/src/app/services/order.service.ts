import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url-constants";
import { Order } from "../models/Order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl=environmentVariables.JSON_URL;

  constructor(private http: HttpClient) { }

  createOrder(order: Order):Observable<Order>{
    let url=this.baseUrl+`order`;
    return this.http.post<Order>(url,order);
  }

  getOrders(): Observable<Order[]>{
    let url=this.baseUrl+ `order`;
    return this.http.get<Order[]>(url);
  }

  getOrdersForCustomer( id: number): Observable<Order[]>{
    let url=this.baseUrl+ `order?customerId=${id}`;
    return this.http.get<Order[]>(url);
  }

  getOrdersForSeller( id: number): Observable<Order[]>{
    let url=this.baseUrl+ `order?sellerId=${id}`;
    return this.http.get<Order[]>(url);
  }

  deleteOrder(id: number): Observable<Order>{
    let url=this.baseUrl+`order/${id}`;
    return this.http.delete<Order>(url);
  }

}