import { Request , Response } from "express";
import controller from "../../../../controller";
import bcrypt from "bcrypt"

//user
import { User } from "../../../../database/user";

export default new (class extends controller{

    async allUsers(_req :Request , res : Response){
        const users = await User.find();
        this.response({res , message : "Your request was successful." , data : {users}})
    }

    async createUser(req : Request, res : Response){
        let saltGen = await bcrypt.genSalt(10);
        let hashPassword = await bcrypt.hash(req.body.password , saltGen);
        
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
})()