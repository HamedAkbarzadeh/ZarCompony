import { Router } from "express";
import userController from "./controller/userController";
import userValidator from "./userValidator"

const router = Router();

router.get('/' , userController.createUser)

router.post('/' , userValidator.registerValidator() , userController.validate ,userController.createUser)

export = router;