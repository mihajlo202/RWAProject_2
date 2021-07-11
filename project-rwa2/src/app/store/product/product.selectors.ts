import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";

export const selectJobsState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
    selectJobsState,
    (state) => {
        return Object.values(state.entities);
    }
);