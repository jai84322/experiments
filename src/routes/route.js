const express = require('express');

const { getUserProf,register,loginUser,updateUser} = require('../controllers/userController')
const {createProduct, getProduct} = require('../controllers/productController')
const router = express.Router();
const {authentication, authorization} = require('../middleware/auth');
const { createCart } = require('../controllers/cartController');



router.post('/register',register)
router.post('/login',loginUser)
router.get('/user/:userId/profile', authentication, getUserProf)
router.put('/user/:userId/profile',  authentication, authorization, updateUser)


// product API
router.post('/products', createProduct);
router.get('/products', getProduct);


// cart api
router.post('/users/:userId/cart', createCart)


router.all("/*", function(req, res) {
    res.status(400).send({ msg: "No such Api found" })
})



module.exports=router;