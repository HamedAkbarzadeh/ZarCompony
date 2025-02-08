import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const categorySchema = new mongoose.Schema({
    name : {type:String , min:3 , default:true},
    description : {type:String , min:3 , default:true},
    slug : {type:String , min:3 , default:true , unique :true},
    image : {type:String , min:3 , default:true},
    show_in_menu : {type:Boolean , default:true},
    status : {type:Boolean , default:true},
    tags : {type:String , default:true},
    parent : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

categorySchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

export const Category = mongoose.model("Category" , categorySchema);
