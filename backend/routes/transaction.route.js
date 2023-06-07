const transactionCtrl = require('./../controllers/transaction.controller');

const express = require('express');
const router = express.Router();

router.post('/', transactionCtrl.createTransaction);
router.get('/', transactionCtrl.getTransactions);
router.get('/email', transactionCtrl.getTransactionsByEmail);
router.get('/monedas/:m', transactionCtrl.getTransactionsByMon);
module.exports = router;
