import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"
import {gallerySchema} from "./gallery"

const productSchema = new mongoose.Schema({
    name : {type:String , min:3 },
    introduction : {type:String , min:3},
    slug : {type:String , min:10 , unique:true , sparse:true},
    price : {type : Number , required : true},
    status : {type:Boolean , default : false},
    marketable : {type:Boolean , default : true},
    sold_number : {type:Number , default : 0},
    frozen_number : {type:Number , default : 0},
    marketable_number : {type:Number , default : 0},
    code : {type:Number , unique : true},
    tags : {type:String , default : null},
    gallery : [gallerySchema],
    brand : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    published_at : {type:Date , default : null}

},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

productSchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Product = mongoose.model("Product" , productSchema);

