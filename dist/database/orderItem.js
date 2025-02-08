"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const orderItemSchema = new mongoose_1.default.Schema({
    order: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Order"
    },
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product"
    },
    guarantee: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Guarantee"
    },
    number: { type: Number, default: 1 },
    final_discount_product: { type: Number, default: 0 },
    final_product_price: { type: Number, default: 0 },
    final_total_price: { type: Number, default: 0 },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
orderItemSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.OrderItem = mongoose_1.default.model("OrderItem", orderItemSchema);
