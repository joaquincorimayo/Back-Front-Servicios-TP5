const productCtrl = require('./../controllers/product.controller');
const express = require('express');
const router = express.Router();

router.post('/', productCtrl.createProduct);
router.get('/', productCtrl.getProducts);
router.delete('/:id', productCtrl.deleteProduct);
router.put('/', productCtrl.editProduct);
router.get('/dest', productCtrl.getProductsDest);
module.exports = router;
