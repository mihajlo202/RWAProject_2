import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectCustomerState = (state:AppState) => state.customer;

export const selectCustomerInfo = createSelector(
  selectCustomerState,
  state => state.customer
);