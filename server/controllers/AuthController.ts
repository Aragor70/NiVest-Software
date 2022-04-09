
import asyncHandler from "../middlewares/async";
import {Request, Response, NextFunction} from 'express';

import User from "../models/User";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ErrorResponse from "../utils/ErrorResponse";

class AuthControlller {


    login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    
        const { email, password } = req.body;
    
        let user = await User.findOne(({ email }));
    
        if(!user){
            return next(new ErrorResponse('Invalid Credentials.', 422))
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
    
        if (!isMatch){
            return next(new ErrorResponse('Invalid Credentials.', 422))
        }
    
        const payload = {
            user: {
                id: user.id
            }
        }
        const JWTSecretKey: any = process.env["jwtSecret"]
        return jwt.sign(payload, JWTSecretKey, { expiresIn: 360000 },
            (err, token) => {
                if(err) {
                    return next(new ErrorResponse(err.message, 422))
                }
                res.json({ success: true, token }); 
                
        });
    
    
    });
    
}

export default AuthControlller;