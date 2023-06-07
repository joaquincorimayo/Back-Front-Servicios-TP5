const Transaction = require('../models/transaction');
const transactionCtrl = {}

/**
 * Permite dar de alta una transaccion.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
transactionCtrl.createTransaction = async (req, res) => {
    let transaction = new Transaction(req.body);
    try {
        await transaction.save();
        res.json({'status': '1', 'msg': 'Transaction saved.'})
    } catch (error) {
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

/**
 * Permite recuperar todas las transacciones registradas.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
transactionCtrl.getTransactions = async (req, res) => {
    let transactions = await Transaction.find();
    res.json(transactions);
}

/**
 * Permite recuperar el historico de transacciones de un determinado cliente, utiliando como clave el email.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
transactionCtrl.getTransactionsByEmail = async (req, res) => {
    try {
        let transactions = await Transaction.find({'emailCliente': req.query.email});
        console.log(transactions.toString());
        res.json(transactions);
    } catch (e) {
        res.status(500).json(
            {
                status: '0',
                msg: 'Error processing operation.',
                error: e.message
            }
        );
    }
}

/**
 * Permite recuperar todas las transacciones que tengan como origen y destino las divisas (monedas).
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
transactionCtrl.getTransactionsByMon = async (req, res) => {
    try {
        let filterMoneda = req.params.m;

        let transactions = await Transaction.find(
            {
                'monedaOrigen' : filterMoneda,
                'monedaDestino': filterMoneda
            }
        );
        res.json(transactions);
    } catch (e) {
        res.status(500).json({
            status: '0',
            msg: 'Error processing operation.',
            error: e.message
        });
    }

}

module.exports = transactionCtrl;