import { createAction, props } from "@ngrx/store"
import { Product } from "src/app/models/Product"

export const ProductUpdateSet = createAction(
    '[Product Update] Set product to update',
    props<{product:Product}>()
  )
  
  export const RemoveProductUpdate = createAction(
    '[Product Update] Remove product to update'
  )