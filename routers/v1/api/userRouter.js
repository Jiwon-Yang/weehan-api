import express from "express";
import UserService from "../../../services/userSer";

const userService = new UserService();
const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const user = await userService.findUser(id);
        return user;
    } catch (error) {
        console.log(error);
    }
});

router.get("/:id/scraps", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const scraps = await userService.findScraps(id);
        console.log(scraps); // { scraps: [] }
        return scraps;
    } catch (error) {
        console.log(error);
    }
});

export default router;
