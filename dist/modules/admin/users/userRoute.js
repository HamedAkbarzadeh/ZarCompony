"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./controller/userController"));
const userValidator_1 = __importDefault(require("./userValidator"));
const router = (0, express_1.Router)();
router.get('/', userController_1.default.allUsers);
router.post('/', userValidator_1.default.createUserValidator(), userController_1.default.validate, userController_1.default.createUser);
exports.default = router;
