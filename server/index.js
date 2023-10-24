import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan'
import authRoutes from './routes/auth.js'
import { ExpressError } from './middleware/errHandle.js';

//activate config to access .env
dotenv.config();

//initialize app
const app = express();
const PORT = process.env.PORT || 6000

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());
app.use(morgan('common'))

//user defined routes here
app.use('/auth', authRoutes);


//error routes 
app.all('*',(req,res,next)=>{
    next(new ExpressError('Page Not Found', 404))
 })

 app.use((err,req,res,next)=>{
    const {statusCode = 400, message = "Something went wrong" }= err;
    if(!err.message) err.message = "Something's wrong!"
    res.status(statusCode).json({code: statusCode, message:message})
 })

//database connection
mongoose.connect(process.env.CONNECTION_URL, 
    {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error))
