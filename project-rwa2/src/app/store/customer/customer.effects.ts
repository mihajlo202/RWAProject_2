import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { Customer } from "src/app/models/Customer";
import { CustomerService } from "src/app/services/customer.service";
import { CustomerInfo, GetCustomerInfo } from "./customer.actions";

@Injectable()
export class CustomerEffects {

  getCustomerByEmail=createEffect(() => this.actions$.pipe(
    ofType(GetCustomerInfo),
    map((action)=>action.email),
        mergeMap((email)=>this.customerService.getCustomerByEmail(email).pipe(
            map((customer : Customer)=> CustomerInfo({customer: customer[0]})))
        )
    ))
  
    constructor(private actions$: Actions,
                private customerService: CustomerService) { }

}