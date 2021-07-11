import { createAction, props } from "@ngrx/store"
import { Seller } from "src/app/models/Seller"

export const GetSellerInfo = createAction(
    '[Seller Profile Page] Get Seller Info',
    props<{email:string}>()
)

export const SellerInfo = createAction(
    '[Seller Profile Page] Seller Info',
    props<{seller:Seller}>()
)

export const RemoveSellerInfo = createAction(
    '[Seller Page] Remove Seller Info'
)