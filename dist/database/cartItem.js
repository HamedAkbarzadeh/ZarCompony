"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartItem = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const cartItemSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product"
    },
    guarantee: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Guarantee"
    },
    number: { type: Number, default: 0 }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
cartItemSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.cartItem = mongoose_1.default.model("CartItem", cartItemSchema);
