import config from "../config";
import api from "../routers";
import session from "express-session";
import cookieParser from "cookie-parser";
import express from "express";
import passport from "passport";

const MongoStore = require("connect-mongo")(session);

const expressLoader = app => {
    app.use(
        session({
            secret: config.SECRET_KEY,
            resave: false,
            saveUninitialized: true,
            store: new MongoStore({
                url: config.MONGO_URL,
                collection: "sessions"
            })
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(cookieParser());
    app.use(express.urlencoded({ extended: true }));

    app.use("/v1", api);
    app.set("port", config.PORT);
};

export default expressLoader;
