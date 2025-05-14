import mongoose from "mongoose";

const admin2Schema = new mongoose.Schema({
    id:{type:String, required: true, unique: true},
    adminname: {type: String, required: true, unique: true},
    email:{type:String, required:true,unique:true},
    phone:{type:String, required:true},
    roll:{type:String, required:true},
    password: {type: String, required: true}
})

const admin2Model = mongoose.model('admin2',admin2Schema)

export {admin2Model as admin2}