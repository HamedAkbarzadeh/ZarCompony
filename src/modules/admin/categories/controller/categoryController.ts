
import controller from "../../../../controller"
import { Request, Response } from "express";
import { Category } from "../../../../database/category";
import _ from "lodash";

export default new (class extends controller {

    uploadFile(req: Request, _res: Response) {
        console.log(req.file);

    }

    async createCategory(req: Request, res: Response) {
        const category = new Category({
            name: req.body.name,
            description: req.body.description,
            image: req.file?.path,
            status: req.body.status,
            show_in_menu: req.body.show_in_menu,
            tags: req.body.tags,
            parent: req.body.parent_id
        });


        await category.save();

        this.response({ res, message: "successfuly to insert categorys", data: { category } });
    }

    async delete(req: Request, res: Response) {
        //check for exist category
        const categoryID = req.params._id;
        const category = await Category.findById(categoryID);
        if (!category) {
            this.response({ res, message: "category not found", code: 401 });
        }
        category?.deleteOne();
        this.response({ res, message: "category was deleted" });
    }

})();