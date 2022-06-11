const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({

    fname : {
        type : String,
        required : "fname is required",
        trim : true
    },
    lname : {
        type : String,
        required: "lname is required",
        trim : true
    },
    title: {
        type : String,
        required: "title is required",
        enum : ["Mr", "Mrs", "Miss"]
    },
    email : {
        type : String,
        required: "email is required",
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required: "password is required",
        trim : true
    }
}, {timestamps: true})

module.exports = mongoose.model("author", authorSchema)