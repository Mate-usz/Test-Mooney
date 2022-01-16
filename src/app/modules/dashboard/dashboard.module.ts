import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './pages/dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    ProductComponent,
    ListProductComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
