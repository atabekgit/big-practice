import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterComponent } from './filter/filter.component';
import { CapitalizePipe } from '../shared/capitalize.pipe';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { OrdersModule } from '../orders/orders.module';



@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,SharedModule,FormsModule,CustomersRoutingModule
  ],
  exports:[CustomersComponent]
})
export class CustomersModule { }
