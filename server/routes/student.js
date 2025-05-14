import express from 'express'
import {Student} from '../models/Student.js'
import bcrypt from 'bcrypt'
const router = express.Router();
import { verifyAdmin } from './auth.js';

router.post('/register' , verifyAdmin , async(req,res)=>{
    try{
    const {id,roll,username, password, year} = req.body;
    const student=await Student.findOne({username})
    if(student){
        return res.json({message:"student is register"})
    }
    const hashPassword=await bcrypt.hash(password,10)
    const newstudent = new Student({
        username,
        password:hashPassword,
        roll:roll,
        year,
        id:id
    })
    await newstudent.save()
    return res.json({registered:true})
    }catch(err){
        return res.json({message:"Error in registering student"})
    }
})
router.get('/students',async(req,res)=>{
    try{
        const books=await Student.find()
        return res.json(books)
    }catch(err){
        return res.json(err)
    }
})
router.get('/studentss/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const books=await Student.findById({_id:id})
        return res.json(books)
    }catch(err){
        return res.json(err)
    }
})

router.put('/studentss/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const books=await Student.findByIdAndUpdate({_id:id},req.body)
        return res.json({updated: true,books})
    }catch(err){
        return res.json(err)
    }
})

router.delete('/studentss/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const books=await Student.findByIdAndDelete({_id:id})
        return res.json({Deleted: true,books})
    }catch(err){
        return res.json(err)
    }
})

export {router as studentRouter}