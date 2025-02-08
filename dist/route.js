"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const authRoute_1 = __importDefault(require("./modules/auth/authRoute"));
const userRoute_1 = __importDefault(require("./modules/admin/users/userRoute"));
const router = (0, express_1.Router)();
//auth
router.use("/auth", authRoute_1.default);
//user
router.use("/users", userRoute_1.default);
module.exports = router;
