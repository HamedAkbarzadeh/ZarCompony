import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const guaranteeSchema = new mongoose.Schema({
    name : {type:String , default:true},
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    price_increase : {type:Number , default:0},
    status : {type:Boolean , default:false},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

guaranteeSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Guarantee = mongoose.model("Guarantee" , guaranteeSchema);
