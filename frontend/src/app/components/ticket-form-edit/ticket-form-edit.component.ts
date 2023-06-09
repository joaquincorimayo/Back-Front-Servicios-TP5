import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Ticket} from "../../models/ticket";
import {Espectador} from "../../models/espectador";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-ticket-form-edit',
  templateUrl: './ticket-form-edit.component.html',
  styleUrls: ['./ticket-form-edit.component.css']
})
export class TicketFormEditComponent implements OnInit {
  ticket!: Ticket;
  listEspectadores!: Array<Espectador>;

  constructor(private ticketService: TicketService, private router: Router) {

  }

  getAllViewers() {
    this.ticketService.getAllEspectadores().subscribe({
      next: value => {
        this.listEspectadores = new Array<Espectador>();
        let espectador: Espectador = new Espectador();
        value.forEach((e: any) => {
          Object.assign(espectador, e);
          this.listEspectadores.push(espectador);
          espectador = new Espectador();
        });
      }, error: err => {
        alert(err.msg);
      }
    });
  }


  ngOnInit(): void {
    this.ticket = history.state.t;
    this.getAllViewers();
  }

  editTicket() {
    this.ticket.fechaCompra = new Date();
    this.ticketService.actualizarTicket(this.ticket).subscribe({
      next: value => {
        alert(value.msg);
        this.returnHome();
      }, error: err => {
        alert(err.msg);
      }
    });
  }

  returnHome() {
    this.router.navigate(['tickets']);
  }
}
