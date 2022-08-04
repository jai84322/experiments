const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('bodyParser')
const route = require('./routes/route')
const app = express()


app.use(express.json())
// app.use(bodyParser.json())

const myUrl = 'mongodb+srv://jai84322:Bing%401234%23@demo.3li78.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(myUrl, {useNewUrlParser: true})
.then(console.log("mongodb is connected"))
.catch(err => console.log(err))

// app.use(function(req,res,next) {
//     console.log("test api");
//     next();
// });


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log("server is running on " + (process.env.PORT || 3000))
});