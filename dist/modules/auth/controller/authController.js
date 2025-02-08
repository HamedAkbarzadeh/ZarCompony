"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const controller_1 = __importDefault(require("./../../../controller"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const lodash_1 = __importDefault(require("lodash"));
const config_1 = __importDefault(require("config"));
//user
const user_1 = require("./../../../database/user");
module.exports = new (class extends controller_1.default {
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //check for this email exist in db 
            const isExistUser = yield user_1.User.findOne({ email: req.body.email });
            if (isExistUser) {
                return this.response({ res, message: "this user exist" });
            }
            let saltGen = yield bcrypt_1.default.genSalt(10);
            let hashPassword = yield bcrypt_1.default.hash(req.body.password, saltGen);
            const user = new user_1.User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mobile: req.body.mobile,
                email: req.body.email,
                password: hashPassword,
                national_number: req.body.national_number,
            });
            yield user.save();
            this.response({ res, message: "successfuly to add user", data: { user } });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //check for exist email
            let user = yield user_1.User.findOne({ email: req.body.email });
            if (!user) {
                return this.response({ res, message: "Incorrect email or password.", code: 404 });
            }
            //check for correct password for email
            if (!user.password) {
                return this.response({ res, message: "Password not set.", code: 400 });
            }
            const checkPassword = yield bcrypt_1.default.compare(req.body.password, user.password);
            if (!checkPassword) {
                return this.response({ res, message: "Incorrect email or password.", code: 404 });
            }
            //then email and password is correct
            const token = jsonwebtoken_1.default.sign({ _id: user._id }, config_1.default.get("jwt_key"));
            return this.response({ res, message: "your successfuly login in app", data: { user: lodash_1.default.pick(user, ["_id", "full_name", "email"]), token } });
        });
    }
})();
