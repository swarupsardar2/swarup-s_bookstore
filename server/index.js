import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import { AdminRouter } from './routes/auth.js'
import { studentRouter } from './routes/student.js'
import { admin2Router } from './routes/admin2.js'
import { booksRouter } from './routes/Books.js'


const router=express.Router();

const app = express()
app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))
app.use(cookieParser())
app.use('/auth', AdminRouter)
app.use('/student',studentRouter)
app.use('/admin2',admin2Router)
app.use('/Books',booksRouter)

dotenv.config()

app.listen(process.env.PORT, () =>{
    console.log("Server is running");
})