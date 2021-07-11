import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { ProductService } from "src/app/services/product.service";
import { RemoveProductUpdate } from "../product-update/product-update.actions";
import { DeleteProduct, LoadAllProducts, LoadAllProductsSuccess, LoadSellerProducts, LoadSellerProductsSuccess, NewProduct, NewProductSuccess, UpdateProduct } from "./product.actions";

@Injectable()
export class ProductEffects {

    getAllProducts=createEffect(()=> this.actions$.pipe(
        ofType(LoadAllProducts),
        mergeMap(()=>this.productService.getAllProducts().pipe(
        map((prod)=> LoadAllProductsSuccess({products:prod})))
    )))

    getSellerProducts=createEffect(() => this.actions$.pipe(
        ofType( LoadSellerProducts),
        map((action) => action.sellerId),
        mergeMap((sellerId)=>this.productService.getProductsBySellerId(sellerId)
            .pipe(
                map((prod)=>LoadSellerProductsSuccess({products:prod})
            ))
        )
    ))

    addNewProduct=createEffect(() => this.actions$.pipe(
        ofType(NewProduct),
        tap((action) => console.log(action.product)),
        map((action) => action.product),
            mergeMap((product)=>this.productService.createProduct(product)
            .pipe(
                map((product)=> NewProductSuccess({product:product})))
        )
    ))

    updateProduct= createEffect(() => this.actions$.pipe(
        ofType(UpdateProduct),
        mergeMap((product)=>this.productService.updateProduct(product.product)
        .pipe(
        map((event)=> RemoveProductUpdate()))
    )))

    deleteProduct = createEffect(() => this.actions$.pipe(
        ofType(DeleteProduct),
        tap(action => this.productService.deleteProduct(action.product.id)
        .subscribe(
            () => {},
            err => alert("Doslo je do greske pri brisanju posla iz baze!")
        ))), {dispatch:false});


    constructor(private actions$: Actions,
                private productService : ProductService
                ) { }

}