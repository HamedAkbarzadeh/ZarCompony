// const expressValidator = require("express-validator");
import  {check}  from "express-validator";
import {isValidIranianNationalCode} from "../../helpers/helpers";

export = new (class {
  registerValidator() {
    return [
      check("email").isEmail().withMessage("email is invalid"),
      check("first_name").optional().isString().withMessage("first_name must be a string").isLength({min : 2 , max:50}).withMessage("The first_name must be between 2 and 50 characters"),
      check("last_name").optional().isString().withMessage("last_name must be a string").isLength({min : 2 , max:50}).withMessage("The last_name must be between 2 and 50 characters"),
      check("email").not().isEmpty().withMessage("email cannot be empty").isEmail().withMessage("Enter the email structure correctly"),
      check("password").not().isEmpty().withMessage("password cannot be empty").isLength({min : 6}).withMessage("Password must be 6 character or more"),  
      check("mobile").optional().matches(/^(?:\+98|0)9[0-9]{9}$/).withMessage("The phone number must start with 09 or +98"),
      check("national_number").optional().custom((value) => isValidIranianNationalCode(value)).withMessage("invalid nationalNumber"),
      check("profile_photo_path").optional().isString().withMessage("the profile_photo_path must be string"),  
    ];
  }
  loginValidator() {
    return [
      check("email").isEmail().withMessage("email is invalid"),
      check("password").not().isEmpty().withMessage("password cant be empty"),
    ];
  }
})();
