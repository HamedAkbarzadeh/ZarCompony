"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const auto_bind_1 = __importDefault(require("auto-bind"));
class default_1 {
    constructor() {
        this.response = ({ res, message, code = 200, data = {} }) => {
            res.status(code).json({
                message,
                data,
            });
        };
        (0, auto_bind_1.default)(this);
    }
    validationBody(req, res) {
        const result = (0, express_validator_1.validationResult)(req);
        if (!result.isEmpty()) {
            const errors = result.array();
            const message = [];
            errors.forEach((e) => {
                message.push(e.msg);
            });
            res.status(404).json({
                message: "validation error",
                data: message,
            });
            return false;
        }
        return true;
    }
    validate(req, res, next) {
        if (!this.validationBody(req, res)) {
            return;
        }
        next();
    }
}
exports.default = default_1;
;
