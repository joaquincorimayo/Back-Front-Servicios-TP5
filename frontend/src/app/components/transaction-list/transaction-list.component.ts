import {Component} from '@angular/core';
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../models/transaction";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  monedaSelected: string = '';
  listTransactions!: Array<Transaction>;

  constructor(private transactionService: TransactionService) {

  }

  getListTransactions() {
    this.transactionService.getTransactions().subscribe({
      next: value => {
        this.assignList(value);
      }, error: err => {
        console.log(err);
      }
    })
  }

  getListTransactionsFilterMoneda() {
    this.transactionService.getTransactionsByMoneda(this.monedaSelected).subscribe({
      next: value => {
        this.assignList(value);
      }, error: err => {
        console.log(err);
      }
    })
  }

  assignList(value: any) {
    let transaction: Transaction = new Transaction();
    this.listTransactions = new Array<Transaction>();
    value.forEach((e: any) => {
      Object.assign(transaction, e);
      this.listTransactions.push(transaction);
      transaction = new Transaction();
    })
  }


}
