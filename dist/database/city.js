"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const citySchema = new mongoose_1.default.Schema({
    name: { type: String, default: true },
    country: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Province"
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
citySchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.City = mongoose_1.default.model("City", citySchema);
