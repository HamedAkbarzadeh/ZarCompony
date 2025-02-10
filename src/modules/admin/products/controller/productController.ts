
import controller from "../../../../controller"
import { Request, Response } from "express";
import { Product } from "../../../../database/product";
import _ from "lodash";

export default new (class extends controller {

    uploadFile(req: Request, _res: Response) {
        console.log(req.file);

    }

    async createProduct(req: Request, res: Response) {
        const product = new Product({
            name: req.body.name,
            introduction: req.body.introduction,
            price: req.body.price,
            status: req.body.status,
            marketable: req.body.marketable,
            marketable_number: req.body.marketable_number,
            tags: req.body.tags,
            published_at: req.body.published_at,
            brand: req.body.brand_id,
            category: req.body.category_id,
        });
        // _.pick(req.body , ["name" , "introduction" , "price" , "status" , "marketable" , "marketable_number" , "tags" , "brand" ,"category" , "published_at"])
        // req.body.images.forEach((element : string) => {
        //     product.gallery.push({image :element})
        // }); 
        product.gallery.pull({ image: req.file?.path })


        await product.save();

        this.response({ res, message: "successfuly to insert products", data: { product } });
    }

    async delete(req: Request, res: Response) {
        //check for exist product
        const productID = req.params._id;
        const product = await Product.findById(productID);
        if (!product) {
            this.response({ res, message: "product not found", code: 401 });
        }
        product?.deleteOne();
        this.response({ res, message: "product was deleted" });
    }

})();