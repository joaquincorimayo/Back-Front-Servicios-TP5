import {Component} from '@angular/core';
import {TicketService} from "../../services/ticket.service";
import {Ticket} from "../../models/ticket";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-list', templateUrl: './ticket-list.component.html', styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  listTickets !: Array<Ticket>;
  espectadorSeleccionado: string = '';

  constructor(private ticketService: TicketService, private router: Router) {
  }

  getAllTickets() {
    let ticket: Ticket = new Ticket();
    this.ticketService.getTickets().subscribe({
      next: value => {
        this.listTickets = new Array<Ticket>();
        value.forEach((e: any) => {
          Object.assign(ticket, e);
          this.listTickets.push(ticket);
          ticket = new Ticket();
        });
      },
      error: err => {
        alert(err.msg);
      }
    });
  }

  deleteTicket(_id: string) {
    this.ticketService.deleteTicket(_id).subscribe({
      next: value => {
        alert(value.msg);
        this.getAllTickets();
      },
      error: err => {
        alert(err.msg);
      }
    })
  }

  getEspectadorTickets() {
    let ticket: Ticket = new Ticket();
    this.ticketService.getTicketsByEspectador(this.espectadorSeleccionado).subscribe({
      next: value => {
        this.listTickets = new Array<Ticket>();
        value.forEach((e: any) => {
          Object.assign(ticket, e);
          this.listTickets.push(ticket);
          ticket = new Ticket();
        });
      }, error: err => {
        alert(err.msg);
      }
    });
  }

  async editTicket(ticket: Ticket) {
    await this.router.navigate(['edit'], {state: {t: ticket}});
  }
}
