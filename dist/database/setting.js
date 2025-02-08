"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const settingSchema = new mongoose_1.default.Schema({
    title: { type: String, default: true },
    description: { type: String, default: true },
    keyword: { type: String, default: true },
    log: { type: String, default: true },
    icon: { type: String, default: true },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
settingSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
exports.Setting = mongoose_1.default.model("Setting", settingSchema);
