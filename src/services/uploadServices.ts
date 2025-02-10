import { Request } from 'express';
import multer, { FileFilterCallback, Multer } from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    //path to upload file
    destination: (_req: Request, _file: Express.Multer.File, cb) => {

        cb(null, "public/uploads");
    },

    //set file name
    filename: (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const allowTypes = ["image/png", "image/jpg", "image/jpeg"];

    if (allowTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only .jpeg, .png, .gif formats are allowed!"), false);
    }
}

const upload: Multer = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: fileFilter
});

export default upload;