import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import mongoose from "mongoose"
// login user
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})

        if (!user){
            return res.json({success:false,message:"User doesn't exist."})
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token})
        //save token instead of sending email password everytime to session
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// register user
const registerUser = async (req,res) => {
    const {firstName,lastName,password,email} = req.body;
    try {
        //checking if user already exists
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({success:false,message:"User already exists."})
        }

        // validating email format & strong password
        if (!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email."})
        }


        if (password.length<8){
            return res.json({success:false,message:"Please enter a strong password."})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);//salt adds dif string to password to make dif hash for same password

        const newUser = new userModel({
            userId: new mongoose.Types.ObjectId(),
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
  
  const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET); // Optional expiration time
  };
  

export {loginUser,registerUser}
