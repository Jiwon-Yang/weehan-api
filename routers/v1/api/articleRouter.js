import express from "express";
import ArticleService from "../../../services/articleSer";

const router = express.Router();
const articleService = new ArticleService();

router.get("", async (req, res) => {
    try {
        // To Do : Sorting
        const articles = await articleService.findArticles();
    } catch (error) {
        console.log(error);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const article = await articleService.findArticle(id);
    } catch (error) {
        console.log(error);
    }
});
router.post("", async (req, res) => {
    try {
        const {
            body: { title, content, author }
        } = req;
        await articleService.createArticle(title, content, author);
    } catch (error) {
        console.log(error);
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
    } catch (error) {
        console.log(error);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        await articleService.deleteArticle(id);
    } catch (error) {
        console.log(error);
    }
});
router.post("/:id/scrap", async (req, res) => {
    //이거 post 맞나?
    //userid어케 가져올까? -> session?
    try {
        const bookId = req.params.id;
        const userId = req.body.id;
        await articleService.scrapArticle(bookId, userId);
    } catch (error) {
        console.log(error);
    }
});
router.delete("/:id/scrap", async (req, res) => {
    try {
        const bookId = req.params.id;
        const userId = req.body.id;
        await articleService.removeScrappedArticle(bookId, userId);
    } catch (error) {
        console.log(error);
    }
});

export default router;
