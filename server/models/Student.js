import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id:{type:String, require:true , unique:true},
    roll:{type:String, require:true},
    username: {type: String, required: true, unique: true},
    year:{type:String, require:true},
    password: {type: String, required: true}
})

const studentModel = mongoose.model('Student',studentSchema)

export {studentModel as Student}