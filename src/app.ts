import express from "express";
import route from "./route" 

const app = express();

import mongoose from "mongoose";
import config from "config";
import debug from "debug";
import morgan from "morgan";

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(morgan("dev"));

mongoose.connect(config.get('db.address')).then(
    () => {debug("connect to db")}
).catch(
    () => {debug("cant connect to db")}
);

app.use('/api' , route);

const port = process.env.PORT || 3000;
app.listen(port , () => console.log(`connected on port ${port}`));