"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const gallery_1 = require("./gallery");
const productSchema = new mongoose_1.default.Schema({
    name: { type: String, min: 3, default: true },
    introduction: { type: String, min: 3, default: true },
    slug: { type: String, min: 10, default: true, unique: true, sparse: true },
    password: { type: String, default: true },
    price: { type: Number, required: true },
    statsu: { type: Boolean, default: false },
    marketable: { type: Number, default: 0 },
    sold_number: { type: Number, default: 0 },
    frozen_number: { type: Number, default: 0 },
    marketable_number: { type: Number, default: 0 },
    code: { type: Number, default: null },
    tags: { type: String, null: true },
    gallery: gallery_1.gallerySchema,
    brand: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Brand"
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category"
    },
    published_at: { type: Date, default: null }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
productSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Product = mongoose_1.default.model("Product", productSchema);
