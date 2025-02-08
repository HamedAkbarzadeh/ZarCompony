"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guarantee = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const guaranteeSchema = new mongoose_1.default.Schema({
    name: { type: String, default: true },
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product"
    },
    price_increase: { type: Number, default: 0 },
    status: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
guaranteeSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Guarantee = mongoose_1.default.model("Guarantee", guaranteeSchema);
