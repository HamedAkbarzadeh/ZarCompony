import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const orderItemSchema = new mongoose.Schema({
    order : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Order"
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    guarantee : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Guarantee"
    },
    number : {type : Number , default : 1},
    final_discount_product : {type : Number , default : 0},
    final_product_price : {type : Number , default : 0},
    final_total_price : {type : Number , default : 0},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

orderItemSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const OrderItem = mongoose.model("OrderItem" , orderItemSchema);
