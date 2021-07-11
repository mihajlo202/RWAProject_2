import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environmentVariables } from "../constants/url-constants";
import { Product } from "../models/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl=environmentVariables.JSON_URL;

    constructor(private http: HttpClient) { }

    createProduct(product: Product):Observable<Product>{
        let url=this.baseUrl+`product`;
        console.log(product)
        return this.http.post<Product>(url,product);
    }

    updateProduct(product: Product):Observable<Product>{
        let url=this.baseUrl+`product/${product.id}`;
        return this.http.put<Product>(url,product);
    }

    deleteProduct(productId: number):Observable<Product>{
        let url=this.baseUrl+`product/${productId}`;
        return this.http.delete<Product>(url);
    }

    getAllProducts(): Observable<Product[]>{
        let url=this.baseUrl+"product";
        return this.http.get<Product[]>(url);
    }

    getProductsBySellerId( id: number): Observable<Product[]>{
        let url=this.baseUrl+`product?sellerId=${id}`;
        return this.http.get<Product[]>(url);
    }
}