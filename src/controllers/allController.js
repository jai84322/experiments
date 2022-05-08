let myFunction = require("../validators/allValidator")


let getMe = async function (req, res) {
    let okName = req.query.name
    let finalName = myFunction.myName(okName)
    return res.status(200).send({status : true , message : finalName})
}

let takeDetails = async function (req, res) {
    // let firstName = req.body
    // let lastName = req.body.lname
    // let email = req.body.email
    // let address = req.body.address
    // let location = req.body.location

    let { firstName, lastName, email, address, location} = req.body

     res.send({data : firstName})
}



module.exports.getMe = getMe
module.exports.takeDetails = takeDetails
