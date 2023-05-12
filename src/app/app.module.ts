import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddItemComponent } from './add-item/add-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { CartComponent } from './cart/cart.component';
import { KitchenPrepComponent } from './kitchen-prep/kitchen-prep.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    MenuListComponent,
    CartComponent,
    KitchenPrepComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
