import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSliderComponent } from './components/product-slider/product-slider.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DivisasFormComponent } from './components/divisas-form/divisas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSliderComponent,
    ProductFormComponent,
    DivisasFormComponent
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
