import User from '../models/user.js'

export const signIn = async (req,res)=>{

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