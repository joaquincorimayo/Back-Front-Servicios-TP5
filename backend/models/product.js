const mongoose = require('mongoose');
const {Schema} = mongoose;

/**
 * This definition is used for products.
 * @type {module:mongoose.Schema<any, Model<any, any, any, any>, {}, {}, {}, {}, DefaultSchemaOptions, {image: {type: StringConstructor, required: boolean}, price: {type: NumberConstructor, required: boolean}, name: {type: StringConstructor, required: boolean}, description: {type: StringConstructor, required: boolean}, stock: {type: NumberConstructor, required: boolean}, dest: {default: boolean, type: BooleanConstructor}}, HydratedDocument<FlatRecord<{image: {type: StringConstructor, required: boolean}, price: {type: NumberConstructor, required: boolean}, name: {type: StringConstructor, required: boolean}, description: {type: StringConstructor, required: boolean}, stock: {type: NumberConstructor, required: boolean}, dest: {default: boolean, type: BooleanConstructor}}>, {}>>}
 */
const ProductSchema = new Schema({
    name:        {type: String, required: true},
    description: {type: String, required: true},
    image:       {type: String, required: true},
    price:       {type: Number, required: true},
    stock:       {type: Number, required: true},
    dest:        {type: Boolean, default:false}
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);