const cartModel = require("../models/cartModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const { isValidObjectId } = require('../validations/userValidation')

const createCart = async function (req, res) {
    let { cartId, productId } = req.body
    let userId = req.params.userId

    let prodObj = {
        productId: productId,
        quantity: 1
    }

    if (!isValidObjectId(userId)) return res.status(400).send({ status: false, message: "please enter valid user id" })
    let checkUser = await userModel.findOne({ _id: userId })
    if (!checkUser) return res.status(404).send({ status: false, message: "user not found" })

    if (!isValidObjectId(productId)) return res.status(400).send({ status: false, message: "please enter valid product id" })
    let checkProduct = await productModel.findOne({ isDeleted: false, _id: productId })
    if (!checkProduct) return res.status(404).send({ status: false, message: "product not found" })
    let productPrice = checkProduct.price

    if (cartId) {
        if (!isValidObjectId(cartId)) return res.status(400).send({ status: false, message: "please enter valid cartId id" })
    }
    let checkCart = await cartModel.findOne({ userId: userId })
    console.log(checkCart);

    if (checkCart) {

        let checkProductId = checkCart.items.map(x => x.productId.toString())

        if (checkProductId.includes(productId)) {
            let increaseQuantity = await cartModel.findOneAndUpdate({ "items.productId": productId, userId: userId }, { $inc: { "items.$.quantity": 1, totalPrice: productPrice } }, { new: true })
            return res.status(200).send({ status: true, message: "items added successfully", data: increaseQuantity })
        } else {
            let addProduct = await cartModel.findOneAndUpdate({ userId: userId }, { $push: { items: prodObj }, $inc: { totalItems: 1, totalPrice: productPrice } }, { new: true })
            return res.status(200).send({ status: true, message: "items added successfully", data: addProduct })
        }

    }

    // create cart
    let createCartObject = {
        userId: userId,
        items: [prodObj],
        totalItems: 1,
        totalPrice: productPrice
    }

    let savedData = await cartModel.create(createCartObject)

    return res.status(201).send({ status: false, data: savedData })
}

module.exports = { createCart }
