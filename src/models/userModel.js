const mongoose = require('mongoose')

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
    }
})

module.exports = mongoose.model('User', userSchema)