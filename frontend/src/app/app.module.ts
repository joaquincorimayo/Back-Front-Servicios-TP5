import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { TicketFormEditComponent } from './components/ticket-form-edit/ticket-form-edit.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { HomeComponent } from './components/common/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSliderComponent,
    ProductFormComponent,
    DivisasFormComponent,
    TransactionListComponent,
    TicketListComponent,
    TicketFormComponent,
    TicketFormEditComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
