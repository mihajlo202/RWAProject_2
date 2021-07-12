import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, tap } from "rxjs/operators";
import { RemoveCustomerInfo } from "../customer/customer.actions";
import { RemoveOrders } from "../order/order.actions";
import { RemoveAllProducts } from "../product/product.actions";
import { RemoveSellerInfo } from "../seller/seller.actions";
import { LogOut } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) {}

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(LogOut),
    switchMap(()=> [
       RemoveCustomerInfo(),
       RemoveSellerInfo(),
       RemoveAllProducts(),
       RemoveOrders()
    ]),
    tap(() => {
      this.router.navigateByUrl('/main');
    }))
  );
}