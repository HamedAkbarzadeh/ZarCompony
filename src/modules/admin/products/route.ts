import { Router } from "express";
import productController from "./controller/productController";
import upload from "../../../services/uploadServices";


const router: Router = Router();


// router.post("/file", upload.single("file"), productController.uploadFile);

// //get all product
// router.get("/");

// //insert product
router.post("/" , upload.single("file") , productController.createProduct);

// //update product
// router.put("/:id");

// //get one product
// router.get("/:id");

// //delete product
// router.delete("/:id");

export default router;