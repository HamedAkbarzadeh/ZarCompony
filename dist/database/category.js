"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const categorySchema = new mongoose_1.default.Schema({
    name: { type: String, min: 3, default: true },
    description: { type: String, min: 3, default: true },
    slug: { type: String, min: 3, default: true, unique: true },
    image: { type: String, min: 3, default: true },
    show_in_menu: { type: Boolean, default: true },
    status: { type: Boolean, default: true },
    tags: { type: String, default: true },
    parent: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category"
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
categorySchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Category = mongoose_1.default.model("Category", categorySchema);
