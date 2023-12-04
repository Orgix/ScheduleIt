import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/user.js";
import { ExpressError } from "../middleware/errHandle.js";

// @desc Login
// @route GET /auth/login
// @access Public - Authenticate in the system with the given credentials
export const signIn = async (req,res)=>{
    const { username, password } = req.body

    // either of the field is not filled 
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    try{
        //lookup user in database. if not found, send a 404 code
        const foundUser = await User.findOne({email}).populate({path:'friends', select: 'firstName lastName'}).exec();
        if(!foundUser) return res.status(404).json({message: 'User does not exist.'})
    
        //if found, compare the password with the hash. 
        const match = await bcrypt.compare(password, foundUser.password)
        if(!match) return res.status(401).json({message:'Incorrect credentials'})

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "email": foundUser.email,
                    "firstName":foundUser.firstName,
                    "lastName":foundUser.lastName,
                    "id":foundUser._id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
        )
    
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        )
    
        // Create secure cookie with refresh token 
        res.cookie('jwt', refreshToken, {
            httpOnly: true,  
            secure: true, 
            sameSite: 'None', 
            maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match refresh token's max age
        })
    
        res.json({ accessToken })
    }
    catch(err){
        throw new ExpressError(err.message,err.code)
    }
    
}
// @desc Register new user
// @route GET /auth/register
// @access Private
export const signUp = async (req,res)=>{
    //destructure object prop from params. username, password,email, firstName,lastName
    const { email, password, username} = req.body;
     if(!email || !password || !username) return res.status(401).json({message:'incomplete data for registration'})
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
// @desc Refresh
// @route GET /auth/refresh
// @access Public - access token expired
export const refresh = (req, res) => {
    const cookies = req.cookies

    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })

            const foundUser = await User.findOne({ username: decoded.username }).exec()
            //if no user is found
            if (!foundUser) return res.status(401).json({ message: 'Unauthorized' })

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": foundUser.username,
                        "email": foundUser.email,
                        "firstName":foundUser.firstName,
                        "lastName":foundUser.lastName,
                        "id":foundUser._id
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            )

            res.json({ accessToken })
        })
    )
}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
export const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}