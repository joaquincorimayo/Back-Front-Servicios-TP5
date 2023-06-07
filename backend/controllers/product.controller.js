const Product = require('../models/product');
const productCtrl = {};

/**
 * Permite recuperar todos los productos.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productCtrl.getProducts = async (req, res) => {
    let products = await Product.find();
    res.json(products);
}

/**
 * Permite devolver una lista de productos destacados.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productCtrl.getProductsDest = async (req, res) => {
    let products = await Product.find({dest: true}).exec();
    res.json(products);
}

/**
 * Permite dar de alta un producto.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productCtrl.createProduct = async (req, res) => {
    let product = new Product(req.body);
    try {
        await product.save();
        res.json({'status': '1', 'msg': 'Product saved.'})
    } catch (error) {
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

/**
 * Permite eliminar un producto especificando el ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productCtrl.deleteProduct = async (req, res) => {
    try {
        Product.deleteOne({_id: req.params.id}).then(function (value) {
            if (value.deletedCount === 0) {
                res.status(404).json({
                    status: '0', msg: 'the product with the id does not exist.'
                });
            } else {
                res.json({
                    status: '1', msg: 'Product removed'
                })
            }
        });
    } catch (error) {
        res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
    }
}

/**
 * Permite modificar un producto, especificando el ID.
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
productCtrl.editProduct = async (req, res) => {
    existProduct(req.body._id).then(async (noExist) => {
        if (noExist) {
            res.status(404).json({
                status: '0', msg: 'the product with the id does not exist.'
            });
        } else {
            const product = new Product(req.body);
            try {
                await Product.updateOne({_id: req.body._id}, product);
                res.json({'status': '1', 'msg': 'Product updated'})
            } catch (error) {
                res.status(400).json({'status': '0', 'msg': 'Error processing operation.'})
            }
        }
    }).catch((error) => {console.error('Failed to verify ID:', error);});


}

/**
 * Permite verificar si el ID existe.
 * @param id
 * @returns {Promise<boolean>}
 */
async function existProduct(id) {
    try {
        const exist = await Product.exists({_id: id});
        return !exist;
    } catch (error) {
        console.error('Failed to verify ID:', error);
        return false;
    }
}

module.exports = productCtrl;