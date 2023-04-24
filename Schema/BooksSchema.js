const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ISBN:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    publisher:{
        type:String,
        required:true
    }
});

const Book = mongoose.model("Book",BookSchema);
module.exports = Book;
