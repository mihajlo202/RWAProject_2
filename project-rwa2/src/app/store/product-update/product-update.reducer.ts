import { Action, createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/Product";
import { ProductUpdateSet, RemoveProductUpdate } from "./product-update.actions";

export interface ProductUpdateState {
    product: Product;
  }
  
  export const initialState: ProductUpdateState = {
    product: undefined
  }

  const reducer = createReducer(
    initialState,
    on(ProductUpdateSet, (state, {product}) => ({product: product})),
    on(RemoveProductUpdate, (state) => ({product: undefined}))
)
  
export function productUpdateReducer(state: ProductUpdateState | undefined, action: Action) {
    return reducer(state, action);
}
  