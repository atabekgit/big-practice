import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule, CustomersModule, OrdersModule, SharedModule, CoreModule, AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
