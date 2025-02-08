import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const userSchema = new mongoose.Schema({
    first_name : {type:String , min:3 , default:true},
    last_name : {type:String , min:3 , default:true},
    email : {type:String , min:10 , default:true , unique:true},
    passwrod : {type:String , default:true},
    mobile : {type:String , min:11 , default:true , unique:true},
    national_number : {type:String , min:10 , default:true , unique:true},
    slug : {type:String , default:true , unique:true},
    profile_photo_path : {type:String , default:true},
    is_inactivation_date : {type:Date , default:true},
    is_admin : {type:Boolean , default:false},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

userSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const User = mongoose.model("User" , userSchema);
