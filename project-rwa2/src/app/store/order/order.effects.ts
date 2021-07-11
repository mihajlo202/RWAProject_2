import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { OrderService } from "src/app/services/order.service";
import { CreateOrder, CreateOrderSuccesss, DeleteOrder, LoadAllOrders, LoadAllOrdersSuccess, LoadOrderForCustomer, LoadOrderForCustomerSuccess, LoadOrderForSeller, LoadOrderForSellerSuccess } from "./order.actions";

@Injectable()
export class OrderEffects {

    getAllOrders=createEffect(()=> this.actions$.pipe(
        ofType(LoadAllOrders),
        mergeMap(()=>this.orderService.getOrders().pipe(
        map((events) => LoadAllOrdersSuccess({order: events})))
    )))

    getAllOrdersForCustomer=createEffect(()=> this.actions$.pipe(
        ofType(LoadOrderForCustomer),
        map(action => action.id),
        mergeMap((idUser)=>this.orderService.getOrdersForCustomer(idUser).pipe(
            tap((val) => {console.log(val)}),
        map((events)=>LoadOrderForCustomerSuccess({order:events}))),
    )))

    getAllOrdersForSeller=createEffect(()=> this.actions$.pipe(
        ofType(LoadOrderForSeller),
        map(action => action.id),
        mergeMap((idUser)=>this.orderService.getOrdersForSeller(idUser).pipe(
            map((events)=>LoadOrderForSellerSuccess({order:events})))
    )))

    createOrder=createEffect(()=> this.actions$.pipe(
        ofType(CreateOrder),
        map(action => action.order),
        mergeMap((order)=>this.orderService.createOrder(order).pipe(
            map((order)=>CreateOrderSuccesss({order: order})))
    )))

    deleteOrder = createEffect(() => this.actions$.pipe(
        ofType(DeleteOrder),
        tap(action => this.orderService.deleteOrder(action.id)
        .subscribe(
            () => {},
            err => alert("Doslo je do greske pri brisanju posla iz baze!")
        ))), {dispatch:false});

    constructor(private actions$: Actions,
        private orderService: OrderService) { }
}