import express from 'express'
import {Book1} from '../models/book.js';
const router = express.Router();

router.post('/add', async(req,res)=>{
    try{
    const {isbn,author,bookname,image,category} = req.body;
    const newbook = new Book1({
        bookname,
        isbn:isbn,
        author:author,
        image,
        category
    })
    await newbook.save()
    return res.json({added:true})
    }catch(err){
        return res.json({message:"Error in adding book"})
    }
})
router.get('/books',async(req,res)=>{
    try{
        const books=await Book1.find()
        return res.json(books)
    }catch(err){
        return res.json(err)
    }
})

router.get('/book/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const books=await Book1.findById({_id:id})
        return res.json(books)
    }catch(err){
        return res.json(err)
    }
})
router.put('/book/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const books=await Book1.findByIdAndUpdate({_id:id},req.body)
        return res.json({updated: true,books})
    }catch(err){
        return res.json(err)
    }
})

router.delete('/book/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const books=await Book1.findByIdAndDelete({_id:id})
        return res.json({Deleted: true,books})
    }catch(err){
        return res.json(err)
    }
})
export {router as booksRouter}