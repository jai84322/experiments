const mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId

const userSchema = new mongoose.Schema({
    fname : {
        type: String,
        required: true,
        trim: true
    }, 
    lname: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type : Number,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase : true,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    items : [{
        productId: { type: ObjectId, ref: "Product", required: true},
        quantity: { type: Number, required: true },
        // _id: false
    }],
    price :{
        indianPrice : {type : Number},
        europeanPrice : {type: Number}
    },
    human : [{
        man : {type: Number},
        women : {type: Number}
    }]

})

module.exports = mongoose.model('User', userSchema)