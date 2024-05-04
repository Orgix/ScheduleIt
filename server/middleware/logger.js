import {format} from 'date-fns'
import {v4 as uuid} from 'uuid'
import {promises as fsPromises} from 'fs'
import path from 'path'

export const logEvents = async(message, logName)=>{
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    try{
        //ESM Does not support __dirname directly, but it can be supported 
        // through import.meta.url by using new URL
        //__dirname is available in CommonJS
        const __filename = new URL(import.meta.url).pathname
        const __dirname = path.dirname(__filename)

        if(!fs.existisSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName, ), logItem)
    }   
    catch(err){
        console.log(err)
    }
}

export const logger = (req,res,next) =>{
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'requestLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}