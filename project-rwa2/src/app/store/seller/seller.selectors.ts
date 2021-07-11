import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectSellerState = (state:AppState) => state.seller;

export const selectSellerInfo = createSelector(
  selectSellerState,
  state => state.seller
);
