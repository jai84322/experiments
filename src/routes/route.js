const express = require('express');
const router = express.Router();
const { createUser, updateUser } = require('../controllers/userController');

router.post("/register", createUser)
router.put("/user/:userId/profile", updateUser)

router.all("/**", function (req,res) {
    res.status(400).send({status: false, message: "invalid http request"})
})



module.exports=router;