const express = require('express')
const router = express.Router()
let allController = require("../controllers/allController")

router.get('/getName', allController.getMe)

router.post('/takeDetails', allController.takeDetails)




module.exports = router

