const express= require('express');

const router=express.Router();

const productController=require("../controllers/productController")


router.get('/', productController.getProducts);

router.post('/', productController.postProducts);

router.get('/:id', productController.getProductsById);

router.put('/:id', productController.putProducts);

router.delete('/:id', productController.deleteProducts);

module.exports=router;