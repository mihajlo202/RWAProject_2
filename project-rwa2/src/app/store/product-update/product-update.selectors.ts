import { createSelector } from "@ngrx/store";
import { AppState } from "..";

export const selectProductUpdateState = (state: AppState) => state.productUpdate;

export const selectProductUpdate = createSelector(
    selectProductUpdateState,
    (state) => state.product
)