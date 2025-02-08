import { validationResult } from "express-validator";
import autoBind from "auto-bind"
import { Request , Response , NextFunction } from "express";

export = class {
  constructor() {
    autoBind(this);
  }

  validationBody(req : Request, res : Response) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const message : string[] = [];
      errors.forEach((e: { msg: string; }) => {
        message.push(e.msg);
      });
      res.status(404).json({
        message: "validation error",
        data: message,
      });
      return false;
    }
    return true;
  }
  validate(req : Request, res : Response, next : NextFunction) {
    if (!this.validationBody(req, res)) {
      return;
    }
    next();
  }
   response = ({ res, message, code = 200, data = {} } : { res : Response, message : string, code?: number, data? : object }) =>{
    res.status(code).json({
        message,
        data,
      });
  }
};
