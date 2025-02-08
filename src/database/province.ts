import mongoose, { Schema } from "mongoose";
import mongooseDelete from "mongoose-delete"

const provinceSchema = new mongoose.Schema({
    name : {type : String , default:true},
},
{
    timestamps :true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

provinceSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Province = mongoose.model("province" , provinceSchema);
