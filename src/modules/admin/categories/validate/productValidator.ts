import { Request , Response } from "express"
import { check } from "express-validator"
import mongoose from "mongoose"
import { Brand } from "../../../../database/brand"
import { Category } from "../../../../database/category"

export default new (class {
    async createProductValidate(_req : Request , _res : Response){
        return [
            check("name").not().isEmpty().withMessage("the name field cant empty").isString().withMessage("The name field should be string"),
            check("introduction").not().isEmpty().withMessage("the itroduction field cant empty").isLength({min:3}).withMessage("the minimum length 3 character"),
            check("price").not().isEmpty().withMessage("the price field cant empty").isNumeric().withMessage("please enter number for price field"),
            check("status").not().isEmpty().withMessage("the status field cant empty").isBoolean().withMessage("Please enter boolean for status"),
            check("marketable").not().isEmpty().withMessage("the marketable field cant empty").isBoolean().withMessage("Please enter boolean for marketable"),
            check("marketable_number").not().isEmpty().withMessage("the marketable_number field cant empty").isNumeric().withMessage("Please enter number for marketable_number"),
            check("tags").optional().isJSON().withMessage("Please enter json for tags"),
            check("brand").notEmpty().withMessage("the brand field cant empty").custom( async (value) => {
                if(!mongoose.Types.ObjectId.isValid(value))
                    throw new Error("brand is invalid");
                const brand = await Brand.findById(value);
                if(!brand){
                    throw new Error("cant find this brand");
                }

                return true;
            }),
            check("category").notEmpty().withMessage("the category field cant empty").custom( async (value) => {
                if(!mongoose.Types.ObjectId.isValid(value))
                    throw new Error("brand is invalid");
                const category = await Category.findById(value);
                if(!category){
                    throw new Error("cant find this brand");
                }

                return true;
            }),
            check("published_at").isDate().withMessage("the published_at field be should date"),
        ]
    }
})()