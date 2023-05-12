import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CartComponent } from './cart/cart.component';
import { KitchenPrepComponent } from './kitchen-prep/kitchen-prep.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menuList',
    pathMatch: 'full',
  },
  {
    path: 'addItem',
    component: AddItemComponent,
  },
  {
    path: 'menuList',
    component: MenuListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'kitchenPrep',
    component: KitchenPrepComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
