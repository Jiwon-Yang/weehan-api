import config from "../config";
import api from "../routers";
import session from "express-session";
const MongoStore = require("connect-mongo")(session); // mongoDB에 session 저장하기 (connect-mongo 모듈 설치 필요)
import cookieParser from "cookie-parser";
import express from "express";

const expressLoader = app => {
    app.use(
        session({
            secret: "fjseflijlskd",
            resave: false,
            saveUninitialized: true,
            store: new MongoStore({
                url: config.MONGO_URL,
                collection: "sessions"
            })
        })
    );
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));

    app.use("/v1", api);
    app.set("port", config.PORT);
};

export default expressLoader;
