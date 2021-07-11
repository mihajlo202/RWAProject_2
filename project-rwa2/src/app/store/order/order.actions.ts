import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/models/Order";

export const CreateOrder = createAction(
    '[Order] Create Order',
    props<{order: Order}>()
)

export const CreateOrderSuccesss = createAction(
    '[Order] Create Order Success',
    props<{order: Order}>()
)

export const LoadAllOrders = createAction(  
    '[Order] Load all orders'
)


export const LoadAllOrdersSuccess = createAction(
    '[Order] Load all orders Success',
    props<{order: Order[]}>()
)

export const LoadOrderForCustomer = createAction(
    '[Order] Load all orders for customer',
    props<{id:number}>()
)

    export const LoadOrderForCustomerSuccess = createAction(
    '[Order] Load all orders for customer success',
    props<{order: Order[]}>()
    )

    export const LoadOrderForSeller = createAction(
    '[Order] Load all orders for customer',
    props<{id:number}>()
)

    export const LoadOrderForSellerSuccess = createAction(
    '[Order] Load all orders for customer success',
    props<{order: Order[]}>()
    )

export const RemoveOrders = createAction(
    '[Order] Remove orders'
)

export const DeleteOrder = createAction(
    '[Order] Delete Order',
    props<{id: number }>()
)
