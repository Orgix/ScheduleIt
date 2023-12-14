import Schedule from "../models/schedule.js";
import { ExpressError } from "../middleware/errHandle.js";

//fetch specific schedule
export const fetchSchedule =async (req,res) =>{
    //fetch id from params
    const {id} = req.params;

    //fetch schedule
    const schedule = await Schedule.findOne({id});

}
//fetch all user specific schedules
export const fetchSchedules = async(req,res)=>{
     //fetch id from params
     const {userId} = req.params;

     //fetch all user schedules
     const schedule = await Schedule.find({user: userId});
 
}