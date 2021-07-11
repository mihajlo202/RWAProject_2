import { Action, createReducer, on } from "@ngrx/store";
import { Customer } from "src/app/models/Customer";
import { CustomerInfo, RemoveCustomerInfo } from "./customer.actions";

export interface CustomerState {
  customer: Customer
}
  
export const initialState: CustomerState = {
  customer: undefined
};
  
const reducer = createReducer(
  initialState,
  on(CustomerInfo, (state, {customer}) => ({customer: customer})),
  on(RemoveCustomerInfo, (state) => ({customer: undefined}))
)
  
export function customerReducer(state: CustomerState | undefined, action: Action) {
  return reducer(state, action);
}