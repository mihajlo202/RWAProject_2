import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/order.service';
import { AppState } from 'src/app/store';
import { selectCustomerInfo } from 'src/app/store/customer/customer.selectors';
import { DeleteOrder } from 'src/app/store/order/order.actions';
import { selectAllOrders } from 'src/app/store/order/order.selectors';
import { selectAllProducts } from 'src/app/store/product/product.selectors';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  allOrders: Order[]=[];
  allProducts: Product[]=[];
  myOrderProduct: Product[] = [];
  customer: Customer = {
    id: undefined,
    name: '',
    surname: '',
    email: '',
    address: ''
  };

  user$=this.store.pipe(
    select(selectCustomerInfo),
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

  constructor(private store: Store<AppState>, private orderSerice: OrderService) { }

  ngOnInit(): void {

    this.order$.subscribe(
      (events) => events.forEach(u => { this.allOrders.push(u); }))
    this.products$.subscribe(
      (events) => events.forEach(u => { this.allProducts.push(u); }))
    
    this.user$.subscribe((user) => this.customer={...user} );
   
    if(this.allProducts.length!=0) {
      this.allOrders.forEach((order, indexOf ) => {
        this.allProducts.forEach(prod => {
          if(prod.id===order.productId)
            this.myOrderProduct.push(prod);
        })
      })
    }

  }

  cancelOrder(pro: Product){
    var idOrder: number;
    this.allOrders.forEach((order, indexOf ) => {
      this.allProducts.forEach(prod => {
        if(prod.id===order.productId)
          idOrder = order.id
      })
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
      this.allOrders.forEach((order, indexOf ) => {
        this.allProducts.forEach(prod => {
          if(prod.id===order.productId)
            this.myOrderProduct.push(prod);
        })
      })
    }
  }

}