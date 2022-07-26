const userModel = require("../models/userModel");
const { isValidRequest, isValidObjectId, isValidString, isValidEmail, isValidPincode, removeSpaces, isValidPhone, isValidPassword, isValidAddress, isValidFile } = require("../validations/userValidation");
const { uploadFile } = require("../aws-sdk/aws-sdk")
const bcrypt = require("bcrypt")

// API - 3rd - put api  
// validations - done
// authentication and authorization 
// trim lagana hai model me - done
// profile image ka validation - done
// bcrypt - done


const createUser = async function (req, res) {
    let data = req.body
    // console.log(data);
    let data2 = req.files
    // console.log(data2);
    data.profileImage = "hello"
    let savedData = await userModel.create(data)
    return res.status(201).send({ status: true, message: "User created successfully", data: savedData })
}


const updateUser = async function (req, res) {
    let { fname, lname, email, phone, password, address } = data = req.body
    let obj = {}
    let userId = req.params.userId
    let files = req.files

    if (!isValidRequest(req.body) && req.files.length == 0) {
        return res.status(400).send({ status: false, message: "please enter valid request" })
    }

    if (!isValidObjectId(userId)) {
        return res.status(400).send({ status: false, message: "please enter valid user Id" })
    }

    let checkUser = await userModel.findOne({ _id: userId })
    if (!checkUser) {
        return res.sstatus(400).send({status: false, message: "user does not exists" })
    }

    if (fname) {
        if (!isValidString(fname)) {
            return res.status(400).send({ status: false, message: "please enter valid string input" })
        } else {
            obj.fname = removeSpaces(fname)
        }
    }

    if (lname) {
        if (!isValidString(lname)) {
            return res.status(400).send({ status: false, message: "please enter valid lname input" })
        } else {
            obj.lname = removeSpaces(lname)
        }
    }

    if (email) {
        if (!isValidEmail(email)) {
            return res.status(400).send({ status: false, message: "please enter valid email input" })
        }

        let checkUniqueEmail = await userModel.findOne({ email: email })
        if (checkUniqueEmail) {
            return res.status(409).send({ status: false, message: `${email} already exists, please enter unique email` })
        } else {
            obj.email = email
        }
    }

    // profile image ka krna hai validation - done



    if (files && files.length > 0) {
        if (!isValidFile(files)) {
            return res.status(400).send({status: false, message: "please send a valid photo file"})
        } else {
        let updateProfileImage = await uploadFile(files[0])
        obj.profileImage = updateProfileImage
    }
    }

    if (phone) {
        if (!isValidPhone(phone)) {
            return res.status(400).send({ status: false, message: "please enter valid phone number input" })
        }

        let checkUniquePhone = await userModel.findOne({ phone: phone })
        if (checkUniquePhone) {
            return res.status(409).send({ status: false, message: `${phone} already exists, please enter unique phone number` })
        } else {
            obj.phone = phone
        }
    }

    if (password) {
        if (!isValidPassword(password)) {
            return res.status(400).send({ status: false, message: "please enter valid password, one uppercase, one lowercase, one digit, one special character" })
        } else {
            obj.password = await bcrypt.hash(password, 10)
        }
    }

    // check password with bcrypt 


    if (address) {
        let address1 = JSON.parse(address)

        let findAddress = await userModel.findOne({ _id: userId })

        if (address1.shipping) {
            let { street, city, pincode } = address1.shipping

            if (street) {
                if (!isValidAddress(street)) {
                    return res.status(400).send({ status: false, message: "please enter valid shipping street input" })
                } else {
                    findAddress.address.shipping.street = removeSpaces(street)
                }
            }

            if (city) {
                if (!isValidAddress(city)) {
                    return res.status(400).send({ status: false, message: "please enter valid shipping city input" })
                } else {
                    findAddress.address.shipping.city = removeSpaces(city)
                }
            }

            if (pincode) {
                if (!isValidPincode(pincode)) {
                    return res.status(400).send({ status: false, message: "please enter valid shipping pincode input" })
                } else {
                    findAddress.address.shipping.pincode = pincode
                }
            }
        }


        if (address1.billing) {
            let { street, city, pincode } = address1.billing
            if (street) {
                if (!isValidAddress(street)) {
                    return res.status(400).send({ status: false, message: "please enter valid billing street input" })
                } else {
                    findAddress.address.billing.street = removeSpaces(street)
                }
            }

            if (city) {
                if (!isValidAddress(city)) {
                    return res.status(400).send({ status: false, message: "please enter valid billing city input" })
                } else {
                    findAddress.address.billing.city = removeSpaces(city)
                }
            }

            if (pincode) {
                if (!isValidPincode(pincode)) {
                    return res.status(400).send({ status: false, message: "please enter valid billing pincode input" })
                } else {
                    findAddress.address.billing.pincode = pincode
                }
            }
        }

        obj.address = findAddress.address
    }

    let updatedUser = await userModel.findOneAndUpdate({ userId: userId }, obj, { new: true })
    return res.status(200).send({ status: true, message: "User profile updated", data: updatedUser })
}






module.exports = { createUser, updateUser }