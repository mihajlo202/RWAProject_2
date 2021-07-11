import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/Product';
import { AppState } from 'src/app/store';
import { selectProductUpdate } from 'src/app/store/product-update/product-update.selectors';
import { NewProduct, UpdateProduct } from 'src/app/store/product/product.actions';
import { selectSellerInfo } from 'src/app/store/seller/seller.selectors';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    id: undefined,
    name: '',
    description: '',
    sellerId: null
  };

  seller$=this.store.select(selectSellerInfo);

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  @Input() isUpdating: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectProductUpdate).subscribe((prod) => {
      this.product={...prod}});
  }
  
  cancelModal(): void {
    this.cancelClicked.emit(null);
  }

  handleClick(): void {
    if(this.isUpdating)
      this.store.dispatch(UpdateProduct({product: this.product}))
    else
    {
      this.seller$.subscribe(seller =>{
        console.log(seller)
          this.product.sellerId=seller.id;
          this.store.dispatch(NewProduct({product: this.product}))
        })
    }
    this.cancelModal();
  }
 
}
