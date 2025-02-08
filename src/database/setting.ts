import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const settingSchema = new mongoose.Schema({
    title : {type : String , default:true},
    description : {type : String , default:true},
    keyword : {type : String , default:true},
    log : {type : String , default:true},
    icon : {type : String , default:true},
},
{
    timestamps :true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

settingSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Setting = mongoose.model("Setting" , settingSchema);
