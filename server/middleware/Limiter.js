import rateLimit from 'express-rate-limit'
import { logEvents } from './logger.js'

export const limiter = rateLimit({
    windowMs: 60*1000,
    max: 5,
    message:
    { message:'This ip has made the max attempts. Please attempt after a 60 second pause.'},
        handler:(req,res,next,options)=>{
            logEvents(`Number of max Requests exceeded: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,`errorLog.log`)
            res.status(options.statusCode).send(options.message)
        },
        standardHeaders: true,
        legacyHeaders: false,
})