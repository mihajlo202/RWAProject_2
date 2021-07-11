import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";
import { SellerService } from "src/app/services/seller.service";
import { GetSellerInfo, SellerInfo } from "./seller.actions";

@Injectable()
export class SellerEffects {
  getSellerByEmail = createEffect(() => this.actions$.pipe(
    ofType(GetSellerInfo),
    map((action)=>action.email),
        switchMap((email:string)=>this.sellerService.getSellerByEmail(email)
        .pipe(
            map((seller)=>SellerInfo({seller: seller[0]})))
        )
    ))
  
    constructor(private actions$: Actions,
                private sellerService: SellerService) { }

}