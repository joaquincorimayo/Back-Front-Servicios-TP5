import {Component, OnInit} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Espectador} from "../../models/espectador";
import {Ticket} from "../../models/ticket";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-form', templateUrl: './ticket-form.component.html', styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  listEspectadores!: Array<Espectador>;
  ticket!: Ticket;

  constructor(private ticketService: TicketService, private router: Router) {
  }

  getEspectadores() {
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

  altaEspectadores() {
    this.ticketService.createTicket(this.ticket).subscribe({
      next: value => {
        alert(value.msg);
      }, error: err => {
        alert(err.msg);
      }
    });
  }

  ngOnInit(): void {
    this.ticket = new Ticket();
    this.ticket.fechaCompra = new Date();
    this.getEspectadores();
  }

  returnHome() {
    this.router.navigate(['home']);
  }
}
