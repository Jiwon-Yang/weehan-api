import express from "express";
import authRouter from "./api/authRouter";
import userRouter from "./api/userRouter";
import articleRouter from "./api/articleRouter";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/articles", articleRouter);

router.get("", (req, res) => {
    console.log("Hello World!");
    res.json("Hello World!");
});

export default router;
