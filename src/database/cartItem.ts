import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const cartItemSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    guarantee : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Guarantee"
    },
    number : {type : Number , default : 0}
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

cartItemSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const cartItem = mongoose.model("CartItem" , cartItemSchema);
