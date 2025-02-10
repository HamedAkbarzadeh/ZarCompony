"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("./controller/productController"));
const uploadServices_1 = __importDefault(require("../../../services/uploadServices"));
const router = (0, express_1.Router)();
// router.post("/file", upload.single("file"), productController.uploadFile);
// //get all product
// router.get("/");
// //insert product
router.post("/", uploadServices_1.default.single("file"), productController_1.default.createProduct);
// //update product
// router.put("/:id");
// //get one product
// router.get("/:id");
// //delete product
// router.delete("/:id");
exports.default = router;
