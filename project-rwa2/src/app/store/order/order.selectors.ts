import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./order.reducer";

export const selectOrderState = createFeatureSelector<OrderState>('order');

export const selectAllOrders = createSelector(
    selectOrderState,
    (state) => {
        return Object.values(state.entities);
    }
);