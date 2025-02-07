"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const debug_1 = __importDefault(require("debug"));
const morgan_1 = __importDefault(require("morgan"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use((0, morgan_1.default)("dev"));
mongoose_1.default.connect(config_1.default.get('db.address')).then(() => { (0, debug_1.default)("connect to db"); }).catch(() => { (0, debug_1.default)("cant connect to db"); });
const port = process.env.PORT || 3000;
app.listen(port, (e) => console.log(`connected on port ${port}`));
