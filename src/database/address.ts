import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const addressSchema = new mongoose.Schema({
    city : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "City"
    },
    postal_code : {type:String , default:true},
    address : {type:String , default:true},
    no : {type:String , default:true},
    unit : {type:String , default:true},
    recipient_first_name : {type:String , default:true},
    recipient_last_name : {type:String , default:true},
    recipient_mobile : {type:String , default:true},
    im_reciver : {type:Boolean , default:true},
    status : {type:Boolean , default:true},
},
{
    timestamps :true,
    toJSON : {virtuals : true},
    toObject : {virtuals : true}
}
);

addressSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Address = mongoose.model("Address" , addressSchema);
