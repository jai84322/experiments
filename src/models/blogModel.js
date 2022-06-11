const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

const blogSchema = new mongoose.Schema({

    title : {
        type : String,
        required: "title is required",
        trim : true
    },
    body : {
        type : String,
        required: "body is required",
        trim : true
    },
    authorId : {
        type : objectId,
        required: "authorId is required",
        ref : 'author',
        trim : true
    },
    tags : {
        type : [String]
    },
    category: {
        type: String, 
        required: "category is required",
        trim : true
    },
    subcategory: {
        type: [String]
    },
    deletedAt: {
        type: Date
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    publishedAt: {
        type: Date
    },
    isPublished : {
        type : Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("blog", blogSchema)



// SHORTCUTS AND CUSTOMER SHORTCUTS

//ctrl+k = will SELECT till END of the line (like ctrl+end)
//ctrl+h = will SELECT till HOME of the line (like ctrl+home)
//ctrl+u = cursor HOME (till the home of the line) 
//ctrl+i = cursor END (till the end of the line)
//ctrl+shift+rightarrow = cursor word END select (word specific)
//ctrl+shift+rightarrow = cursor word HOME select (word specific)
//ctrl+leftarrow = cursor WORD END (word specific)
//ctrl+rightarrow = cursor WORD HOME (word specific)
//ctrl+j = full screen code only
// ctrl+shift+c = full screen terminal only



