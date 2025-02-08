import { Router } from "express";
import userController from "./controller/userController";
import userValidator from "./userValidator"

const router = Router();

router.get('/' , userController.allUsers)

router.post('/' , userValidator.createUserValidator() , userController.validate ,userController.createUser)

export = router;