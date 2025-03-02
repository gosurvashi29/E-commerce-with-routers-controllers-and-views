const express= require('express')

const router= express.Router();  // router is a functionality of express, therefore for creating router we require express

const cartController=require("../controllers/cartController")

router.get('/:userId', cartController.getCartById);
  
router.post('/:userId', cartController.postCart);
  
  
  module.exports=router;