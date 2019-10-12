import ModelArticle from "../models/modArticle";

class ArticleService {
    constructor() {
        this.modelArticle = new ModelArticle();
    }
    async findArticles() {
        const articles = await this.modelArticle.find();
        return articles;
    }
    async findArticle(id) {
        const article = await this.modelArticle.findById(id);
        return article;
    }
    async createArticle(title, content, author) {
        await this.modelArticle.create(title, content, author);
    }
    async updateArticle(id, title, content) {
        await this.modelArticle.update(id, title, content);
    }
    async deleteArticle(id) {
        await this.modelArticle.delete(id);
    }
}

export default ArticleService;
