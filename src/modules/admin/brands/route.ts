import { Router } from "express";
import brandController from "./controller/brandController";
import upload from "../../../services/uploadServices";


const router: Router = Router();



// //get all brand
router.get("/", brandController.all);

// //insert brand
router.post("/", upload.single("logo"), brandController.createBrand);

// //update brand
// router.put("/:id");

// //get one brand
// router.get("/:id");

// //delete brand
router.delete("/:id", brandController.delete);

export default router;