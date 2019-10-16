import express from "express";
import ServiceUser from "../../../services/serUser";

const serviceUser = new ServiceUser();
const router = express.Router();

router.get("/registration", (req, res) => {
    res.send("get Registraion");
});

router.post("/registration", async (req, res) => {
    const {
        body: { email, password, confirmPassword }
    } = req;
    try {
        if (password !== confirmPassword) {
            throw new Error("confirm-password is not same with password");
        }
        const user = await serviceUser.makeRegistration(email, password);
        console.log(user);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.redirect("/v1/auth/registration");
    }
});

//To Do : 암호화
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
