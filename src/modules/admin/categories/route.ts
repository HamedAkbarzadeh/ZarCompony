import { Router } from "express";
import categoryController from "./controller/categoryController";
import upload from "../../../services/uploadServices";


const router: Router = Router();


// router.post("/file", upload.single("file"), categoryController.uploadFile);

// //get all category
// router.get("/");

// //insert category
router.post("/", upload.single("image"), categoryController.createCategory);

// //update category
// router.put("/:id");

// //get one category
// router.get("/:id");

// //delete category
router.delete("/:id", categoryController.delete);

export default router;