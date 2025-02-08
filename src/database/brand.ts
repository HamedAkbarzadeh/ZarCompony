import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const brandSchema = new mongoose.Schema({
    persian_name : {type:String , default:true},
    original_name : {type:String , default:true},
    slug : {type:String , default:true , unique :true},
    logo : {type:String , default:true},
    status : {type:Boolean , default:true},
    tags : {type:String , default:true},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

brandSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Brand = mongoose.model("Brand" , brandSchema);
