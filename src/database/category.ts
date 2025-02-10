import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete"
import slugUpdater from "mongoose-slug-updater"


mongoose.plugin(slugUpdater);
const categorySchema = new mongoose.Schema({
    name: { type: String, min: 3 },
    description: { type: String, min: 3 },
    slug: { type: String, min: 3, unique: true, slug: "name", slugPaddingSize: 4 },
    image: { type: String, min: 3 },
    show_in_menu: { type: Boolean, default: true },
    status: { type: Boolean, default: true },
    tags: { type: String },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
},
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

categorySchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

export const Category = mongoose.model("Category", categorySchema);
