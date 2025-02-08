"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const addressSchema = new mongoose_1.default.Schema({
    city: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "City"
    },
    postal_code: { type: String, default: true },
    address: { type: String, default: true },
    no: { type: String, default: true },
    unit: { type: String, default: true },
    recipient_first_name: { type: String, default: true },
    recipient_last_name: { type: String, default: true },
    recipient_mobile: { type: String, default: true },
    im_reciver: { type: Boolean, default: true },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
addressSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Address = mongoose_1.default.model("Address", addressSchema);
