import Article from "./entities/Article.entity";

class ModelArticle {
    async find() {
        return await Article.find({});
    }

    async findById(_id) {
        return await Article.find({ _id });
    }

    async create(title, content, author) {
        await Article.create({ title, content, author });
    }

    async update(_id, title, content) {
        await Article.update({ _id }, { $set: { title, content } });
    }

    async delete(_id) {
        await Article.deleteOne({ _id });
    }
}

export default ModelArticle;
