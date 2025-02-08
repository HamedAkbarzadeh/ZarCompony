"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delivery = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const deliverySchema = new mongoose_1.default.Schema({
    name: { type: String, default: true },
    amount: { type: String, default: true },
    delivery_time: { type: String, default: true },
    delivery_time_unit: { type: String, default: true },
    status: { type: String, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
deliverySchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Delivery = mongoose_1.default.model("Delivery", deliverySchema);
