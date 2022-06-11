const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    title : {
        type : String,
        required: true
    },
    body : {
        type : String,
        required: true
    },

}, {})


let end = "hello sir "



// SHORTCUTS AND CUSTOMER SHORTCUTS

//ctrl+k = will SELECT till END of the line 
//ctrl+h = will SELECT till HOME of the line 
//ctrl+u = cursor HOME
//ctrl+i = cursor END
//ctrl+rightarrow = cursor word END select
//ctrl+shift+rightarrow = cursor word HOME select
//ctrl+leftarrow = cursor WORD END
//ctrl+rightarrow = cursor WORD HOME
//ctrl+j = full screen code only
// ctrl+shift+c = full screen terminal only
