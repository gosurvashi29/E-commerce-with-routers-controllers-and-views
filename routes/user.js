const express= require('express');

const router=express.Router();

const userController=require("../controllers/userController")

router.get('/', userController.getUsers);
  
router.post('/', userController.postUsers);
  
router.get('/:id', userController.getUsersById);

router.put('/:id', userController.putUsers);

router.delete('/:id', userController.deleteUsers);

module.exports=router;