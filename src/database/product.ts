import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"
import {gallerySchema} from "./gallery"

const productSchema = new mongoose.Schema({
    name : {type:String , min:3 , default:true},
    introduction : {type:String , min:3 , default:true},
    slug : {type:String , min:10 , default:true , unique:true},
    passwrod : {type:String , default:true},
    price : {type : Number , required : true},
    statsu : {type:Boolean , default : false},
    marketable : {type:Number , default : 0},
    sold_number : {type:Number , default : 0},
    frozen_number : {type:Number , default : 0},
    marketable_number : {type:Number , default : 0},
    code : {type:Number , default : null},
    tags : {type:String , null : true},
    gallery : gallerySchema,
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

