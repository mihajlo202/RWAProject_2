import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Order } from "src/app/models/Order";
import { CreateOrderSuccesss, DeleteOrder, LoadAllOrdersSuccess, LoadOrderForCustomerSuccess, LoadOrderForSellerSuccess, RemoveOrders } from "./order.actions";

export const eventsSignedUpFeatureKey = 'order';

export interface OrderState extends EntityState<Order> {}

export const adapter : EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: OrderState= adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(LoadAllOrdersSuccess, (state, {order}) => {
    return adapter.addMany( order, state )
  }),
  on(LoadOrderForCustomerSuccess, (state, {order}) => {
    return adapter.addMany( order, state )
  }),
  on(LoadOrderForSellerSuccess, (state, {order}) => {
    return adapter.addMany( order, state )
  }),
  on(RemoveOrders, (state) => {
    return adapter.removeAll(state)
  }),
  on(CreateOrderSuccesss, (state, {order}) => {
    return adapter.addOne( order , state);
  }),
  on(DeleteOrder, (state, {id}) => {
    return adapter.removeOne(id , state);
  })
)

export function orderReducer(state: OrderState | undefined, action: Action) {
  return reducer(state, action);
}