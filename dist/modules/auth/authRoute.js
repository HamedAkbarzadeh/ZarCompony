"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("./controller/authController"));
const authValidator_1 = __importDefault(require("./authValidator"));
const router = (0, express_1.Router)();
router.post('/login', authValidator_1.default.loginValidator(), authController_1.default.validate, authController_1.default.login);
router.post('/register', authValidator_1.default.registerValidator(), authController_1.default.validate, authController_1.default.registerUser);
exports.default = router;
