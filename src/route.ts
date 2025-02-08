
import {Router} from "express";

import authRoute from "./modules/auth/authRoute";
import userRoute from "./modules/admin/users/userRoute";
const router = Router();


//auth
router.use("/auth" , authRoute);

//user
router.use("/users" , userRoute);


export = router;