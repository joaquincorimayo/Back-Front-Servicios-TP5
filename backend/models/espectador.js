const mongoose = require('mongoose');
const {Schema} = mongoose;

/**
 * This definition is used for viewers.
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, {image: {type: StringConstructor, required: boolean}, price: {type: NumberConstructor, required: boolean}, name: {type: StringConstructor, required: boolean}, description: {type: StringConstructor, required: boolean}, stock: {type: NumberConstructor, required: boolean}, dest: {default: boolean, type: BooleanConstructor}}, HydratedDocument<FlatRecord<{image: {type: StringConstructor, required: boolean}, price: {type: NumberConstructor, required: boolean}, name: {type: StringConstructor, required: boolean}, description: {type: StringConstructor, required: boolean}, stock: {type: NumberConstructor, required: boolean}, dest: {default: boolean, type: BooleanConstructor}}>, {}>>}
 */
const EspectadorSchema = new Schema({
    name:    {type: String, required: true},
    surname: {type: String, required: true},
    dni:     {type: String, required: true},
    email:   {type: String, required: true},
});

module.exports = mongoose.models.Espectador || mongoose.model('Espectador', EspectadorSchema);