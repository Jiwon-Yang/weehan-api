import express from "express";
import loaders from "./loaders";

const app = express();

(async function startApp(app) {
    await loaders(app);
    app.listen(app.get("port"), () => {
        console.log("서버 작동 중 4000번 포트에서");
    });
})(app);
