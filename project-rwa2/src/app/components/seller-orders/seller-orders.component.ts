import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Order } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { Seller } from 'src/app/models/Seller';
import { AppState } from 'src/app/store';
import { DeleteOrder } from 'src/app/store/order/order.actions';
import { selectAllOrders } from 'src/app/store/order/order.selectors';
import { selectAllProducts } from 'src/app/store/product/product.selectors';
import { selectSellerInfo } from 'src/app/store/seller/seller.selectors';

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.css']
})
export class SellerOrdersComponent implements OnInit {
  allOrders: Order[]=[];
  allProducts: Product[]=[];
  myOrderProduct: Product[] = [];
  seller: Seller = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    company: ''
  };

  user$=this.store.pipe(
    select(selectSellerInfo),
    filter(val => val !== undefined)
  );

  order$=this.store.pipe(
    select(selectAllOrders),
    filter(val => val !== undefined)
  )

  products$=this.store.pipe(
    select(selectAllProducts),
    filter(val => val !== undefined)
  );

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.order$.subscribe(
      (events) => events.forEach(u => { this.allOrders.push(u); }))
    this.products$.subscribe(
      (events) => events.forEach(u => { this.allProducts.push(u); }))
    
    this.user$.subscribe((user) => this.seller={...user} );
   
    if(this.allProducts.length!=0) {
      this.allOrders.forEach((order, indexOf ) => {
        this.allProducts.forEach(prod => {
          if(prod.id===order.productId)
            this.myOrderProduct.push(prod);
        })
      })
    }

  }

  deliverOrder(prod: Product){
    var idOrder: number;
    this.allOrders.forEach((order) => {
        if(prod.id===order.productId)
          idOrder = order.id
    })
    this.store.dispatch(DeleteOrder({id:idOrder}))
    this.allOrders = [];
    this.allProducts = [];
    this.order$.subscribe(
      (events) => events.forEach(u => { this.allOrders.push(u); }))
    this.products$.subscribe(
      (events) => events.forEach(u => { this.allProducts.push(u); }))
    this.myOrderProduct = [];
    if(this.allProducts.length!=0) {
      this.allOrders.forEach((order) => {
        this.allProducts.forEach(prod => {
          if(prod.id===order.productId)
            this.myOrderProduct.push(prod);
        })
      })
    }
  }
}