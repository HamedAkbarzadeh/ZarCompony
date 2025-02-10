
import { Router } from "express";

import authRoute from "./modules/auth/authRoute";
import userRoute from "./modules/admin/users/userRoute";
import productRoute from "./modules/admin/products/route";
import brandRoute from "./modules/admin/brands/route";
import categoryRoute from "./modules/admin/categories/route";

const router = Router();


//auth
router.use("/auth", authRoute);

//user
router.use("/users", userRoute);

//product
router.use("/products", productRoute);

//brand
router.use("/brands", brandRoute);

//category
router.use("/categories", categoryRoute);


export default router;