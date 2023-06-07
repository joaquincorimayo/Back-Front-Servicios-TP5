const mongoose = require('mongoose');
const {Schema} = mongoose;
const Espectador = require('./espectador');
/**
 * This definition is used for tickets.
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, {emailCliente: {type: StringConstructor, required: boolean}, monedaOrigen: {type: StringConstructor, required: boolean}, tasaConversion: {type: NumberConstructor, required: boolean}, monedaDestino: {type: StringConstructor, required: boolean}, cantidadDestino: {type: NumberConstructor, required: boolean}, cantidadOrigen: {type: NumberConstructor, required: boolean}}, HydratedDocument<FlatRecord<{emailCliente: {type: StringConstructor, required: boolean}, monedaOrigen: {type: StringConstructor, required: boolean}, tasaConversion: {type: NumberConstructor, required: boolean}, monedaDestino: {type: StringConstructor, required: boolean}, cantidadDestino: {type: NumberConstructor, required: boolean}, cantidadOrigen: {type: NumberConstructor, required: boolean}}>, {}>>}
 */
const TicketSchema = new Schema({
    precioTicket:        {type: String, required: true},
    categoriaEspectador: {type: String, required: true, match: /^[LE]$/,},
    fechaCompra:         {type: Date, default: Date.now()},
    espectador:          {type: Schema.Types.ObjectId, ref: Espectador, required: true}
});

module.exports = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);