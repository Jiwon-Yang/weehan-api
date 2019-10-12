import express from "express";
import { userDetail, addScrap, removeScrap } from "../../../services/userSer";

const router = express.Router();

router.get("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        return await findUser(id);
    } catch (error) {
        console.log(error);
    }
});

router.post("/:id/scrap", addScrap);
router.delete("/:id/scrap", removeScrap);

export default router;
