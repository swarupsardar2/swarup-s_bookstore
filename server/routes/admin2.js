import express from 'express'
import {admin2} from '../models/admin2.js'
import bcrypt from 'bcrypt'
//import jwt from 'jsonwebtoken'
const router = express.Router();

router.post('/register', async (req, res) => {
    try{
    const {id,adminname,email,phone,role,password} = req.body;
    const admin=await admin2.findOne({adminname})
    if(admin){
        return res.json({message: "Admin not Registered"})
    }
        const hashPassword=await bcrypt.hash(password,10)
        const newadmin= new admin2({
            id:id,
            adminname,
            email,
            phone,
            role,
            password:hashPassword,
        })
        await newadmin.save()
    return res.json({registered:true})
    }catch(err){
        return res.json({message:"Error in registering admin"})
    }
    })
    
export {router as admin2Router}