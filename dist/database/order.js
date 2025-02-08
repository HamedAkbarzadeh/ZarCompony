"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const orderSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    address: {
        city: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "City"
        },
        type: {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Address"
        }
    },
    payment: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Payment"
    },
    delivery: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Delivery"
    },
    order_final_amount: { type: String, default: true },
    order_discount_amount: { type: String, default: true },
    order_status: { type: Number, default: 0 },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
orderSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Order = mongoose_1.default.model("Order", orderSchema);
