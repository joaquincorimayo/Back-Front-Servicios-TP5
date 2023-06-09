import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketFormEditComponent} from "./components/ticket-form-edit/ticket-form-edit.component";
import {TicketListComponent} from "./components/ticket-list/ticket-list.component";
import {ProductSliderComponent} from "./components/product-slider/product-slider.component";
import {HomeComponent} from "./components/common/home/home.component";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {DivisasFormComponent} from "./components/divisas-form/divisas-form.component";
import {TicketFormComponent} from "./components/ticket-form/ticket-form.component";

const routes: Routes = [
  {path: "",redirectTo:'home',pathMatch:'full'},
  {path: "home", component: HomeComponent},
  {path: "products", component: ProductSliderComponent},
  {path: "new-product", component: ProductFormComponent},
  {path: "transactions", component: DivisasFormComponent},
  {path: "tickets", component: TicketListComponent},
  {path: "new-ticket", component: TicketFormComponent},
  {path: "edit", component: TicketFormEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
