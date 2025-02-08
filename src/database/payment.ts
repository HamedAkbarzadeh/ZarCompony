import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const paymentSchema = new mongoose.Schema({
    amount : {type : String , default:true},
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    status : {type : Boolean , default:true},
},
{
    timestamps :true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

paymentSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Payment = mongoose.model("payment" , paymentSchema);
