import { createReducer, on, Action } from "@ngrx/store";
import { Seller } from "src/app/models/Seller";
import { RemoveSellerInfo, SellerInfo } from "./seller.actions";

export interface SellerState {
    seller: Seller
}

export const initialState: SellerState = {
  seller: undefined
};

const reducer = createReducer(
  initialState,
  on(SellerInfo, (state, {seller}) => ({seller : seller})),
  on(RemoveSellerInfo, (state) => ({seller: undefined}))
)

export function sellerReducer(state: SellerState | undefined, action: Action) {
  return reducer(state, action);
}