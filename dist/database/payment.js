"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const paymentSchema = new mongoose_1.default.Schema({
    amount: { type: String, default: true },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
paymentSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Payment = mongoose_1.default.model("payment", paymentSchema);
