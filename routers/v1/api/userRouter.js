import express from "express";
import UserService from "../../../services/serUser";

const userService = new UserService();
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const user = await userService.findUser(id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

router.get("/:id/scraps", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const scraps = await userService.findScraps(id);
        console.log(scraps); // { scraps: [] }
        res.json(scraps);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;
