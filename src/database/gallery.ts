import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const gallerySchema = new mongoose.Schema({
    image : {type:String , required:true},
},
    {
        timestamps :true,
        toJSON : {virtuals : true},
        toObject : {virtuals : true}
    }
);

gallerySchema.plugin(mongooseDelete , {deletedAt : true ,overrideMethods : true});

const Gallery = mongoose.model("Gallery" , gallerySchema);

export {Gallery , gallerySchema};