import mongoose, { Schema } from "mongoose";
import mongooseDelete from "mongoose-delete"

const deliverySchema = new mongoose.Schema({
    name : {type : String , default:true},
    amount : {type : String , default:true},
    delivery_time : {type : String , default:true},
    delivery_time_unit : {type : String , default:true},
    status : {type : String , default : false},
},
{
    timestamps :true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

deliverySchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Delivery = mongoose.model("Delivery" , deliverySchema);
