"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Brand = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const brandSchema = new mongoose_1.default.Schema({
    persian_name: { type: String, default: true },
    original_name: { type: String, default: true },
    slug: { type: String, default: true, unique: true },
    logo: { type: String, default: true },
    status: { type: Boolean, default: true },
    tags: { type: String, default: true },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
brandSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Brand = mongoose_1.default.model("Brand", brandSchema);
