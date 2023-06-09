import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketFormEditComponent} from "./components/ticket-form-edit/ticket-form-edit.component";
import {TicketListComponent} from "./components/ticket-list/ticket-list.component";

const routes: Routes = [
  {path: "",redirectTo:'home',pathMatch:'full'},
  {path: "home", component: TicketListComponent},
  {path: "edit", component: TicketFormEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
