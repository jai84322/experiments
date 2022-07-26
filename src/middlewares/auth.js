const jwt = require("jsonwebtoken")

const authentication = async function (req,res,next) {
    let token = req.headers["x-api-key"]
    if (!token) return res.status(400).send({status: false, message: "token is missing"})

    let decodedToken = jwt.verify(token, "secret-key", function (err,token) {
        if (err) return undefined
        else return token
    })

    if (!decodedToken) {
        return res.status(401).send({status: false, message: "please enter valid token"}) 
    }
    req["decodedToken"] = decodedToken
    next()
}

const authorization = async function (req,res,next) {
    let userId = req.params.userId
    let validId = req.decodedToken.userId

    if (userId != validId) {
        return res.status(400).send({status: false, message: "sorry! you are not authorized to do this"})
    }

    next()
}

module.exports = {authentication, authorization}