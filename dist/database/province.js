"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Province = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const provinceSchema = new mongoose_1.default.Schema({
    name: { type: String, default: true },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
provinceSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Province = mongoose_1.default.model("province", provinceSchema);
