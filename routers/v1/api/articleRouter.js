import express from "express";
import {
    findAll,
    findOne,
    create,
    update,
    deleteOne
} from "../../../services/articleSer";

const router = express.Router();

router.get("", findAll);
router.get("/:id", findOne);
router.post("", create);
router.put("/:id/update", update);
router.delete("/:id", deleteOne);

export default router;
