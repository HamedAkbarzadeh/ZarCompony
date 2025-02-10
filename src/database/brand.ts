import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"

const brandSchema = new mongoose.Schema({
    persian_name: { type: String },
    original_name: { type: String },
    slug: { type: String, unique: true, sparse: true },
    logo: { type: String },
    status: { type: Boolean, default: true },
    tags: { type: String },
},
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

brandSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

export const Brand = mongoose.model("Brand", brandSchema);
