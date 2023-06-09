import {Espectador} from "./espectador";

export class Ticket {
  _id!: string;
  precioTicket !: string;
  categoriaEspectador !: string;
  fechaCompra!: Date;
  espectador!: Espectador;
}
