import express from 'express'
import {Admin} from '../models/Admin.js'
import jwt from 'jsonwebtoken'
import { Student } from '../models/Student.js'
import bcrypt from 'bcrypt'
const router = express.Router();

router.post('/login', async (req, res) => {
    try{
    const {username, password, role} = req.body;
    if(role === 'admin'){
        const admin = await Admin.findOne({username})
        if(!admin){
            return res.json({message: "Admin not Registered"})
        }
        const validPassword = await bcrypt.compare(password, admin.password)
        if(!validPassword){
            return res.json({message: "Wrong Password"})
        }
        const token = jwt.sign({username: admin.username, role: 'admin'}, process.env.Admin_Key)
        res.cookie('token', token, {httpOnly: true, secure: true})
        return res.json({login:true, role: 'admin'})
    } else if(role === 'student'){
        const student = await Student.findOne({username})
        if(!student){
            return res.json({message: "student not Registered"})
        }
        const validPassword = await bcrypt.compare(password, student.password)
        if(!validPassword){
            return res.json({message: "Wrong Password"})
        }
        const token = jwt.sign({username: student.username, role: 'student'}, process.env.Student_Key)
        res.cookie('token', token, {httpOnly: true, secure: true})
        return res.json({login:true, role: 'student'})
    } else{

    }
 }catch(err){
    res.json(err)
 }
})

const verifyAdmin=(req , res , next)=>{
    const token =req.cookies.token;
    if(!token){
        return res.json({message:"invalid admin"})
    }else{
        jwt.verify(token,process.env.Admin_Key,(err,decoded)=>{
            if(err){
                return res.json({message:"invalid token"})
            }else{
                req.username=decoded.username;
                req.role=decoded.role;
                next()
            }
        })
    }
}
const verifyUser=(req , res , next)=>{
    const token =req.cookies.token;
    if(!token){
        return res.json({message:"invalid user"})
    }else{
        jwt.verify(token,process.env.Admin_Key,(err,decoded)=>{
            if(err){
                jwt.verify(token,process.env.Student_Key,(err,decoded)=>{
                    if(err){
                        return res.json({message:"invalid token"})
                    }else{
                        req.username=decoded.username;
                        req.role=decoded.role;
                        next()
                    }
                })
            }else{
                req.username=decoded.username;
                req.role=decoded.role;
                next()
            }
        })
    }
}

router.get('/verify',verifyUser,(req,res)=>{
    return res.json({login:true,role: req.role})
})

router.get('/logout',(req,res)=>{
    res.clearCookie('token')
    return res.json({logout : true})
})

export {router as AdminRouter,verifyAdmin}