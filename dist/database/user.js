"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_delete_1 = __importDefault(require("mongoose-delete"));
const userSchema = new mongoose_1.default.Schema({
    first_name: { type: String, min: 3 },
    last_name: { type: String, min: 3 },
    email: { type: String, min: 10, unique: true, sparse: true },
    password: { type: String },
    mobile: { type: String, min: 11, unique: true, sparse: true },
    national_number: { type: String, min: 10, unique: true, sparse: true },
    slug: { type: String, unique: true, sparse: true },
    profile_photo_path: { type: String },
    is_inactivation_date: { type: Date },
    is_admin: { type: Boolean, default: false },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
userSchema.plugin(mongoose_delete_1.default, { deletedAt: true, overrideMethods: true });
userSchema.virtual("full_name").get(function () {
    return `${this.first_name} ${this.last_name}`;
});
exports.User = mongoose_1.default.model("User", userSchema);
