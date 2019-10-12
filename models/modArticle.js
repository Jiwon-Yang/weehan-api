import Article from "./entities/Article.entity";

export const findArticles = async () => {
    return await Article.find({});
};

export const findArticle = async _id => {
    return await Article.find({ _id });
};

export const createArticle = async (title, content, author) => {
    await Article.create({ title, content, author });
};

export const updateArticle = async (_id, title, content) => {
    await Article.update({ _id }, { $set: { title, content } });
};

export const deleteArticle = async _id => {
    await Article.deleteOne({ _id });
};
