import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    title:{
        type:String,
        required:true,
        min:10,
        max:30
    },
    slots:[
        
    ]
}, {timestamps:true})

const User = mongoose.model("User", userSchema);

export default User; 