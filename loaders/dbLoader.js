import mongoose from "mongoose";
import config from "../config";
import User from "../models/entities/User.entity";
import Article from "../models/entities/Article.entity";

const dbLoader = async () => {
    const connect = async () => {
        try {
            await mongoose.connect(config.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (e) {
            console.log("몽고 디비 연결 실패");
            throw e;
        }
    };
    await connect();

    mongoose.connection.on("error", err => {
        console.error(err.message);
        connect();
    });

    const User = User;
    const Article = Article;
};

export default dbLoader;
