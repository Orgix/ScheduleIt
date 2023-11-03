import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { ExpressError } from "../middleware/errHandle.js";


export const signIn = async (req,res)=>{
    const { email, pwd} = req.body

    //lookup user in database. if not found, send a 404 code
    const foundUser = await User.findOne({email}).populate({path:'friends', select: 'firstName lastName'}).exec();
    if(!foundUser) return res.status(404).json({message: 'User does not exist.'})
    
    //if found, compare the password with the hash. 
    const match = await bcrypt.compare(password, foundUser.password)
    if(!match) return res.status(401).json({message:'Incorrect credentials'})

    //if it's valid, generate a jwt token(1day length)
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "username": foundUser.username,
                "email": foundUser.email,
                "firstName": foundUser.firstName,
                "lastName":foundUser.lastName,
                "joined" : foundUser.joined,
                "id": foundUser._id
            }
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
    //before sending the response, handle saving the token, so the updatedAt field gets updated. this will basically be done likewisely on the sync feature
    //set the user field to that token.
    foundUser.token = accessToken
}

export const signUp = async (req,res)=>{
    //destructure object prop from params. username, password,email, firstName,lastName
    const {firstName,lastName, email, password, username} = req.body;
     if(!firstName || !lastName || !email || !password || !username) return res.status(401).json({message:'incomplete data for registration'})
    console.log(req.body)
    
    try{
        //if user exists send 409 code( confict )
        const existingUser = await User.findOne({ email }).exec();
        const existingUserEmail = await User.exists({username}).exec();
        if(existingUser || existingUserEmail) return res.status(409).json({message: "User already exists"});
        // validate data (need to be passed to the schema. e.g. password minlength:8, name lastname lengths. )
        //encrypt the password


        const hash = await bcrypt.hash(password, 12);
        const newUser = new User({
            username: username,
            firstName: firstName,
            lastName: lastName,
            email:email,
            password: hash
        })
       await newUser.save();
    
        // create the user inside the database and save. send request code 201 and front should redirect user to login
        // anything else goes wrong, sent code 500(internal server error)
        res.status(201).json({message: 'Registration successfully complete!'})
    }
    catch(error){
        throw new ExpressError(error.message, error.code)
    }
    



}

export const signout = async (req,res)=>{
    
}

export const updateUser = async(req,res)=>{
    
}