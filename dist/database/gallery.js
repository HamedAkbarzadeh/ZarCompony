"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gallerySchema = exports.Gallery = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const gallerySchema = new mongoose_1.default.Schema({
    image: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
exports.gallerySchema = gallerySchema;
gallerySchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
const Gallery = mongoose_1.default.model("Gallery", gallerySchema);
exports.Gallery = Gallery;
