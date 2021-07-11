import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Product } from "src/app/models/Product";
import { DeleteProduct, LoadAllProductsSuccess, LoadSellerProductsSuccess, NewProductSuccess, RemoveAllProducts, UpdateProduct } from "./product.actions";

export interface ProductState extends EntityState<Product> {}

export const adapter : EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ProductState = adapter.getInitialState({
  ids: [],
  entities: {}
});

const reducer = createReducer(
  initialState,
  on(LoadAllProductsSuccess, (state, {products}) => {
    return adapter.addMany( products, state )
  }),
  on(LoadSellerProductsSuccess, (state, {products}) => {
    return adapter.addMany( products, state )
  }),
  on(NewProductSuccess, (state, {product}) => {
    return adapter.addOne(product, state);
  }),
  on(DeleteProduct, (state, {product}) => {
    return adapter.removeOne(product.id, state);
  }),
  on(RemoveAllProducts, (state) => {
    return adapter.removeAll(state);
  }),
  on(UpdateProduct, (state, {product}) => {
    return adapter.updateOne({ id: product.id, changes: product }, state);
  }),
)

export function productReducer(state: ProductState | undefined, action: Action) {
  return reducer(state, action);
}