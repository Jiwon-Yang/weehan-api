import express from "express";
import ArticleService from "../../../services/serArticle";

const router = express.Router();
const articleService = new ArticleService();

router.get("", async (req, res) => {
    try {
        // To Do : Sorting
        const articles = await articleService.findArticles();
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
        const article = await articleService.findArticle(id);
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
        await articleService.createArticle(title, content, author);
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
        await articleService.updateArticle(id, title, content);
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
        await articleService.deleteArticle(id);
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
        await articleService.scrapArticle(bookId, userId);
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
        await articleService.removeScrappedArticle(bookId, userId);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

export default router;
