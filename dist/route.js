"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute_1 = __importDefault(require("./modules/auth/authRoute"));
const userRoute_1 = __importDefault(require("./modules/admin/users/userRoute"));
const route_1 = __importDefault(require("./modules/admin/products/route"));
const route_2 = __importDefault(require("./modules/admin/brands/route"));
const route_3 = __importDefault(require("./modules/admin/categories/route"));
const router = (0, express_1.Router)();
//auth
router.use("/auth", authRoute_1.default);
//user
router.use("/users", userRoute_1.default);
//product
router.use("/products", route_1.default);
//brand
router.use("/brands", route_2.default);
//category
router.use("/categories", route_3.default);
exports.default = router;
