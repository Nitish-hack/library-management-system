const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({


    title: {
        type: String,
        required:true
    },

    author: {
        type: String,
         required:true
    },

    publisher: {
        type: String,
       required:true
    },

    year: {
        type: String,
        default:2023
    },
  
    copies: {
        type: Number,
        default:25 
    }



}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);