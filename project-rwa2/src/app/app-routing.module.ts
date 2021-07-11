import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MainComponent } from './components/main/main.component';
import { SellerOrdersComponent } from './components/seller-orders/seller-orders.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { SellerComponent } from './components/seller/seller.component';
import { AuthRoleGuard } from './services/auth-role.guard';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {
    path: 'seller',
    component: SellerComponent,
    canActivate:[AuthRoleGuard],
    children: [
      {path: '', component: SellerProfileComponent },
      {path: 'profil', component: SellerProfileComponent},
      {path: 'main', component: SellerOrdersComponent}
    ],
    data: { role: 'seller'}
  },
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      {path: '', component: CustomerProfileComponent },
      {path: 'profil', component: CustomerProfileComponent},
      {path: 'main', component: CustomerOrdersComponent}
    ],
    canActivate:[AuthRoleGuard],
    data: { role: 'customer'}
  },
  {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
