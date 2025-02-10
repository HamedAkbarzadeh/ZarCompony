import { Request , Response } from "express";
import controller from "./../../../controller";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import _ from "lodash"
import config from "config"


//user
import { User } from "./../../../database/user";

export default new (class extends controller{

    async registerUser(req : Request, res : Response){
        
        //check for this email exist in db 
        const isExistUser = await User.findOne({email : req.body.email});
        if(isExistUser){
            return this.response({res , message : "this user exist"});
        }
        
        let saltGen : string = await bcrypt.genSalt(10);
        let hashPassword:string = await bcrypt.hash(req.body.password , saltGen);
        
        
        const user = new User({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            mobile : req.body.mobile,
            email : req.body.email,
            password : hashPassword,
            national_number : req.body.national_number,
        });
        
        await user.save();

        this.response({res , message : "successfuly to add user" , data : {user}})
    }

    async login(req : Request , res : Response){
        //check for exist email
        let user = await User.findOne({email : req.body.email});
        if(!user){
            return this.response({res , message:"Incorrect email or password." , code:404})
        }
        //check for correct password for email
        if (!user.password) {
            return this.response({ res, message: "Password not set.", code: 400 });
          }

        const checkPassword : boolean = await bcrypt.compare(req.body.password , user.password);
        if(!checkPassword){
            return this.response({res , message:"Incorrect email or password." , code:404})
        }
        //then email and password is correct
        const token :string = jwt.sign({_id : user._id} , config.get("jwt_key"));

        return this.response({res , message : "your successfuly login in app" , data:{user : _.pick(user , ["_id" , "full_name" , "email"]) , token}})
    }
})()