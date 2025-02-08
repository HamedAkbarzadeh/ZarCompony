import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const citySchema = new mongoose.Schema({
    name : {type : String , default:true},
    country : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Province"
    }
},
{
    timestamps :true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

citySchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const City = mongoose.model("City" , citySchema);
