const userModel = require('../models/userModel')



const createUser = async function (req,res) {
    let data = req.body
    // req.route
    // req.body
    // req.params
    // req.query
    // req.headers
    // req.url
    // req.route.path
    // req.method
    // phone number string me diya but db me save to number format me hi hue coz model me type: Number hai
    // similarly fname me number diya but db me save to string me hi hua checked with typeof before saving(req.body) and after saving
    // trim true likhne se aage and piche se space hata dega string and number dono ke
    // jiska type boolean hai usme aap string ya number nahi bhej sakte 

    // console.log(typeof data.fname)
    let savedData = await userModel.create(data)
    // console.log(typeof savedData.fname)
    return res.send({status: true, data : savedData})
}

const updateUser = async function (req,res) {
    data = req.body

    let updateData = await userModel.findOneAndUpdate({_id : userId}, {$set: {}}, {new:true})
    return res.status(200).send({status: true, message: "data updated successfully", data : updateData})
}


module.exports = {createUser, updateUser}