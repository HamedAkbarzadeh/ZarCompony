"use strict";
// const expressValidator = require("express-validator");
const express_validator_1 = require("express-validator");
const helpers_1 = require("../../../helpers/helpers");
module.exports = new (class {
    createUserValidator() {
        return [
            (0, express_validator_1.check)("email").isEmail().withMessage("email is invalid"),
            (0, express_validator_1.check)("first_name").optional().isString().withMessage("first_name must be a string").isLength({ min: 2, max: 50 }).withMessage("The first_name must be between 2 and 50 characters"),
            (0, express_validator_1.check)("last_name").optional().isString().withMessage("last_name must be a string").isLength({ min: 2, max: 50 }).withMessage("The last_name must be between 2 and 50 characters"),
            (0, express_validator_1.check)("email").not().isEmpty().withMessage("email cannot be empty").isEmail().withMessage("Enter the email structure correctly"),
            (0, express_validator_1.check)("password").not().isEmpty().withMessage("password cannot be empty").isLength({ min: 6 }).withMessage("Password must be 6 character or more"),
            (0, express_validator_1.check)("mobile").optional().matches(/^(?:\+98|0)9[0-9]{9}$/).withMessage("The phone number must start with 09 or +98"),
            (0, express_validator_1.check)("national_number").optional().custom((value) => (0, helpers_1.isValidIranianNationalCode)(value)).withMessage("invalid nationalNumber"),
            (0, express_validator_1.check)("profile_photo_path").optional().isString().withMessage("the profile_photo_path must be string"),
        ];
    }
    loginValidator() {
        return [
            (0, express_validator_1.check)("email").isEmail().withMessage("email is invalid"),
            (0, express_validator_1.check)("password").not().isEmpty().withMessage("password cant be empty"),
        ];
    }
})();
