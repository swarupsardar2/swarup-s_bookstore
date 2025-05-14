import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    isbn:{type:String, require:true , unique:true},
    author:{type:String, require:true},
    bookname: {type: String, required: true},
    image: {type: String, required: true},
    category:{type:String, require:true},  
})

const booksModel = mongoose.model('books',booksSchema)

export {booksModel as Book1}