import ModelArticle from "../models/modArticle";
import ModelUser from "../models/modUser";

class ServiceArticle {
    constructor() {
        this.modelArticle = new ModelArticle();
        this.modelUser = new ModelUser();
    }

    // Article - CRUD
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

    // Article - Scrap
    async scrapArticle(bookId, userId) {
        const scraps = await this.modelUser.findScrapsById(userId);
        const makeNewScraps = (scraps, bookId) => {
            if (scraps.scraps.includes(bookId)) {
                //이건 프론트 부분
                throw new Error("Scrap Duplicated!");
            }
            scraps.scraps.push(bookId); //객체->값으로 바꾸는 것은 mod인가 ser인가?
            return scraps.scraps;
        };
        try {
            const newScraps = makeNewScraps(scraps, bookId);
            await this.modelUser.addScrap(newScraps, userId);
        } catch (error) {
            console.log(error);
        }
    }
    async removeScrappedArticle(bookId, userId) {
        const scraps = await this.modelUser.findScrapsById(userId);
        const makeNewScraps = (scraps, bookId) => {
            const idx = scraps.scraps.indexOf(bookId);
            if (idx > -1) {
                scraps.scraps.splice(idx, 1);
            } else {
                throw new Error("Article is not scrapped!"); //이건 프론트 부분
            }
            return scraps.scraps;
        };
        try {
            const newScraps = makeNewScraps(scraps, bookId);
            await this.modelUser.removeScrap(newScraps, userId);
        } catch (error) {
            console.log(error);
        }
    }
}

export default ServiceArticle;
