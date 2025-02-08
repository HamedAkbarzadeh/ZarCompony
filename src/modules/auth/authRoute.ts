import { Router } from "express";
import authController from "./controller/authController";
import authValidator from "./authValidator"

const router : Router = Router();


router.post('/login' , authValidator.loginValidator() , authController.validate ,authController.login)
router.post('/register' , authValidator.registerValidator() , authController.validate ,authController.registerUser)

export = router;