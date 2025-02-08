import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const orderSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    address : {
        city : {
              type : mongoose.Schema.Types.ObjectId,
              ref : "City"
        },
        type : {
            type:mongoose.Schema.Types.ObjectId,
            ref : "Address"
        }
    },
    payment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Payment"
    },
    delivery : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Delivery"
    },
    order_final_amount : {type:String , default:true},
    order_discount_amount : {type:String , default:true},
    order_status : {type:Number , default:0},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

orderSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Order = mongoose.model("Order" , orderSchema);
