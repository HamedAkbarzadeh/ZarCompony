import mongoose from "mongoose"
import { Request , Response } from "express";
import controller from "../../../controller";
import bcrypt from "bcrypt"

//user
import { User } from "../../../database/user";

export = new (class extends controller{

    async createUser(req : Request, res : Response){
        let saltGen = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(req.params.password , saltGen);
        
        const user = new User({
            first_name : req.params.first_name,
            last_name : req.params.last_name,
            mobile : req.params.mobile,
            email : req.params.email,
            passwrod : hashPassword,
            national_number : req.params.national_number,
        });
        
        await user.save();

        this.response({res , message : "successfuly to add user" , data : {user}})
    }
})()