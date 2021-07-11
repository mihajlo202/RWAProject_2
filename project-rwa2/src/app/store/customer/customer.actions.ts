import { createAction, props } from "@ngrx/store"
import { Customer } from "src/app/models/Customer"

export const CustomerInfo = createAction(
  '[Customer Profile Page] Customer info',
  props<{customer:Customer}>()
)
  
export const GetCustomerInfo = createAction(
  '[Customer Profile Page] Get Customer info',
  props<{email:string}>()
)

export const RemoveCustomerInfo = createAction(
  '[Customer Profile Page] Remove Customer info'
)