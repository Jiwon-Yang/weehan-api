import express from "express";
import User from "../../../models/entities/User.entity";

const router = express.Router();

router.get("/registration", (req, res) => {
    res.json("get Registraion");
});

router.post("/registration", async (req, res) => {
    const {
        body: { email, password }
    } = req;
    try {
        const user = await User.create({
            email,
            password
        });
        //To Do : confirmPassword 만들어서 둘이 다르면 다시 입력시킴
        //To Do : Passport 사용해보기
        //To Do : password 암호화
        //To Do : duplicate 검사
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

export default router;
