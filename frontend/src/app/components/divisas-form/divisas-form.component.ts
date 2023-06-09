import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";
import {Convert} from "../../models/convert";
import {Transaction} from "../../models/transaction";
import {Router} from "@angular/router";

@Component({
  selector: 'app-divisas-form',
  templateUrl: './divisas-form.component.html',
  styleUrls: ['./divisas-form.component.css']
})
export class DivisasFormComponent implements OnInit {
  listCurrency !: Array<any>;
  convert !: Convert;

  constructor(private transactionService: TransactionService, private router: Router) {
  }

  getConversion() {
    this.transactionService.convert(this.convert.cantidad, this.convert.desde, this.convert.hasta).subscribe({
      next: value => {
        this.convert.resultado = value['result'];
        let transaction: Transaction = new Transaction();
        transaction.cantidadOrigen = Number(this.convert.cantidad);
        transaction.monedaOrigen = this.convert.desde;
        transaction.monedaDestino = this.convert.hasta;
        transaction.cantidadDestino = Number(this.convert.resultado);
        transaction.emailCliente = "results_front@apu.com.ar";
        transaction.tasaConversion = Number(this.convert.cantidad) / Number(this.convert.resultado);
        this.transactionService.createTransaction(transaction).subscribe({
          next: resultSave => {
            alert(resultSave.msg);
          }, error: errorSave => {
            console.log(errorSave);
          }
        });
      }, error: err => {
        console.log(err.error.message);
      }
    });
    this.router.navigate(['/transactions']);
  }

  getListCurrency() {
    this.listCurrency = new Array<any>();
    this.transactionService.getListCurrency().subscribe({
      next: value => {
        const arr = Object.keys(value['conversion_rates']);
        arr.forEach(element => {
          this.listCurrency.push(element);
        });
      }, error: err => {
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    this.convert = new Convert();
    this.getListCurrency();
  }


}
