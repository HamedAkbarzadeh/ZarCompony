import mongoose from "mongoose";

import {Router} from "express";

import userRoute from "./modules/users/userRoute";
const router = Router();


//user
router.use("/users" , userRoute);
// router.use("/product" , userRoute);


export = router;