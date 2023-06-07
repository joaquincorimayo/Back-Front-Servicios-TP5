const mongoose = require('mongoose');
const {Schema} = mongoose;

/**
 * This definition is used for transactions.
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, {image: {type: StringConstructor, required: boolean}, price: {type: NumberConstructor, required: boolean}, name: {type: StringConstructor, required: boolean}, description: {type: StringConstructor, required: boolean}, stock: {type: NumberConstructor, required: boolean}, dest: {default: boolean, type: BooleanConstructor}}, HydratedDocument<FlatRecord<{image: {type: StringConstructor, required: boolean}, price: {type: NumberConstructor, required: boolean}, name: {type: StringConstructor, required: boolean}, description: {type: StringConstructor, required: boolean}, stock: {type: NumberConstructor, required: boolean}, dest: {default: boolean, type: BooleanConstructor}}>, {}>>}
 */
const TransactionSchema = new Schema({
    monedaOrigen:   {type: String, required: true},
    cantidadOrigen: {type: Number, required: true},
    monedaDestino:  {type: String, required: true},
    cantidadDestino:{type: Number, required: true},
    emailCliente:   {type: String, required: true},
    tasaConversion: {type: Number, required: true},
});

module.exports = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);