import { createAction, props } from "@ngrx/store"
import { Product } from "src/app/models/Product"

export const LoadAllProducts = createAction(
    '[Product] Load_All_Products'
  )

  export const LoadAllProductsSuccess = createAction(
    '[Product] Load_All_Products_Success',
    props<{products:Product[]}>()
  )

  export const LoadSellerProducts = createAction(
    '[Product] Load_Seller_Products',
    props<{sellerId:number}>()
  )

  export const LoadSellerProductsSuccess = createAction(
    '[Product] Load_Seller_Products_Success',
    props<{products:Product[]}>()
  )

  export const NewProduct = createAction(
    '[Product] New_Product',
    props<{product:Product}>()
  )

  export const NewProductSuccess = createAction(
    '[Product] New_Product_Success',
    props<{product:Product}>()
  )

  export const UpdateProduct = createAction(
    '[Product] Update_Product',
    props<{product:Product}>()
  )

  export const DeleteProduct = createAction(
    '[Product] Delete_Product',
    props<{ product:Product }>()
  )

  export const RemoveAllProducts = createAction(
    '[Product] Remove_All_Products'
  )