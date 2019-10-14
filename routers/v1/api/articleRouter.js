import express from "express";
import ServiceArticle from "../../../services/serArticle";

const router = express.Router();
const serviceArticle = new ServiceArticle();

router.get("", async (req, res) => {
    try {
        // To Do : Sorting
        const articles = await serviceArticle.findArticles();
        res.json(articles);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const article = await serviceArticle.findArticle(id);
        res.json(article);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.post("", async (req, res) => {
    try {
        const {
            body: { title, content, author }
        } = req;
        await serviceArticle.createArticle(title, content, author);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.put("/:id/update", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const {
            body: { title, content }
        } = req;
        await serviceArticle.updateArticle(id, title, content);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        await serviceArticle.deleteArticle(id);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.post("/:id/scrap", async (req, res) => {
    //userid어케 가져올까? -> session?
    try {
        const bookId = req.params.id;
        const userId = req.body.id;
        await serviceArticle.scrapArticle(bookId, userId);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});
router.delete("/:id/scrap", async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.body.id;
        await serviceArticle.removeScrappedArticle(bookId, userId);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;
