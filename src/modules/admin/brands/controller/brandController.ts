
import controller from "../../../../controller"
import { Request, Response } from "express";
import { Brand } from "../../../../database/brand";
import _ from "lodash";

export default new (class extends controller {

    all(_req: any, _res: any) {
        console.log("HHHHALLLLL");

    }

    async createBrand(req: Request, res: Response) {

        console.log("brands222");

        console.log(req.body);

        const brand = new Brand({
            persian_name: req.body.persian_name,
            original_name: req.body.original_name,
            status: req.body.status,
            tags: req.body.tags,
            logo: req.file?.path
        });

        await brand.save();

        this.response({ res, message: "successfuly to insert brands", data: { brand } });
    }

    async delete(req: Request, res: Response) {
        //check for exist brand
        const brandID = req.params.id;

        const brand = await Brand.findById(brandID);
        console.log(brand);
        if (!brand) {
            this.response({ res, message: "brand not found", code: 401 });
        }
        await brand?.deleteOne();
        this.response({ res, message: "brand was deleted" });
    }

})();