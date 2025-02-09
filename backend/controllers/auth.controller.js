import { User} from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { generateVerificationCode } from "../util/generateVerificationCode.js";
import {generateTokenAndSetCookie} from "../util/generateTokenAndSetCookie.js"
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";

export const signup = async (req, res) => {
    const {name, password, email} = req.body;
    try {
        if(!email || !password || !name){
            throw new Error("All fields are required");
        }

        const userAlreadyExistsOrNot = await User.findOne({email});
        console.log("user already exists", userAlreadyExistsOrNot)
        if(userAlreadyExistsOrNot){
            return res.status(400).json({success:false, message: "User Already Exists or whatever"});
        }
        
        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = generateVerificationCode();
        const user = new User({email, password: hashedPassword, name, verificationToken, verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000});

        await user.save();
        // jwt
        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email,verificationToken);

        res.status(201).json({
            success: true,
            message: "User created sucessfully",
            user: {
                ...user._doc,
                password: null,
            } 
        })

    } catch (error) {
        res.status(400).json({success:false, message: error.message});
    }
};

export const verifyEmail = async(req, res) => {
    const {code} = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: {$gt: Date.now()}
        })
        if(!user){
            return res.status(400).json({success: false, message: "Invalid or expired Verification Code"});
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationToken = undefined;
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        res.status(200).json({
            success: true,
            message: "Email Verification Successfull",
            user: {
                ...user._doc,
                password: undefined,
            }
        })
    } catch (error) {
        console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
    }
};

export const login = async (req, res) => {
    res.send("login route");
};

export const logout = async (req, res) => {
    res.send("logout route");
};