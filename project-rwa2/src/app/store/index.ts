import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { authReducer, AuthState } from "./auth/auth.reducer";
import { customerReducer, CustomerState } from "./customer/customer.reducer";
import { orderReducer, OrderState } from "./order/order.reducer";
import { productUpdateReducer, ProductUpdateState } from "./product-update/product-update.reducer";
import { productReducer, ProductState } from "./product/product.reducer";
import { sellerReducer, SellerState } from "./seller/seller.reducer";

export interface AppState {
    auth: AuthState,
    seller: SellerState,
    customer: CustomerState,
    products: ProductState,
    productUpdate: ProductUpdateState,
    order: OrderState
}

export const reducers : ActionReducerMap<AppState> = {
    auth: authReducer,
    seller: sellerReducer,
    customer: customerReducer,
    products: productReducer,
    productUpdate: productUpdateReducer,
    order: orderReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
