import authModel from "../models/authSchema.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await authModel.findOne({ email });

    console.log("user", user);

    if (user) {
        throw new Error("user already exists")
    };


    if (!email || !password) {
        throw new Error("Please provide email or password")
    }


    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new authModel({ name, email, password: hashedPassword });


    try {
        await newUser.save();
        res.status(201).json({
            message: "User created successfully"
        });
    } catch (error) {
        next(error);
    }
};





export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const validUser = await authModel.findOne({ email });

        if (!validUser) {
            return res.status(401).json({
                message: "User not found"
            })
        };


        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if (!validPassword) {
            return res.status(401).json({
                message : "Wrong password"
            });
        }

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('access token', token).json({
            message: "Sign in successfully",
            token,
            success: true
        });
    } catch (error) {
        next(error)
    }
};




export const logout = async (req,res) => {
    try{
        res.clearCookie("token")

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}