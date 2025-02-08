import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const userSchema = new mongoose.Schema({
    first_name : {type:String , min:3 },
    last_name : {type:String , min:3 },
    email : {type:String , min:10  , unique:true , sparse:true},
    password : {type:String },
    mobile : {type:String , min:11  , unique:true , sparse:true},
    national_number : {type:String , min:10  , unique:true , sparse:true},
    slug : {type:String  , unique:true , sparse:true},
    profile_photo_path : {type:String },
    is_inactivation_date : {type:Date },
    is_admin : {type:Boolean , default:false},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

userSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

userSchema.virtual("full_name").get(function (){
    return `${this.first_name} ${this.last_name}`
});

export const User = mongoose.model("User" , userSchema);
