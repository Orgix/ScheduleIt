import mongoose from "mongoose";

const userSchema = mongoose.Schema ({
    firstName:{
        type:String,
        max:12,
    },
    lastName:{
        type:String,
        max:12
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        min:8,
        required:true
    },
    joined:{
        type:Date,
        default: new Date()
    },
    token:{
        type:String,
        default:''
    },
     username:{
        type:String,
        required:true,
        min:6,
        max:15
     }
}, {timestamps:true})

const User = mongoose.model("User", userSchema);

export default User; 