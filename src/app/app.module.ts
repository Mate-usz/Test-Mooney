import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './modules/dashboard/components/product/product.component';
import { ListProductComponent } from './modules/dashboard/components/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
