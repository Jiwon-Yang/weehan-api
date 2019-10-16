import express from "express";
import User from "../../../models/entities/User.entity";
import serviceUser from "../../../services/serUser";

const router = express.Router();

router.get("/registration", (req, res) => {
    res.send("get Registraion");
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
        await User.register(user, password);
        console.log(req.user);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});
//To Do : confirmPassword 만들어서 둘이 다르면 다시 입력시킴
//To Do : password 암호화
//To Do : duplicate 검사

router.get("/login", (req, res) => {
    res.send("get login");
});

router.post("/login", (req, res) => {
    res.send("post login");
});

router.post("/logout", (req, res) => {
    res.send("post logout");
});

export default router;
