import {
    findArticles,
    findArticle,
    createArticle,
    updateArticle,
    deleteArticle
} from "../models/modArticle";

export const findAll = async (req, res) => {
    try {
        // To Do : Sorting
        const articles = await findArticles();
        //console.log(articles);
    } catch (error) {
        console.log(error);
    }
};

export const findOne = async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const article = await findArticle(id);
        console.log(article);
    } catch (error) {
        console.log(error);
    }
};

export const create = async (req, res) => {
    try {
        const {
            body: { title, content, author }
        } = req;
        await createArticle(title, content, author);
    } catch (error) {
        console.log(error);
    }
};

export const update = async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        const {
            body: { title, content }
        } = req;
        await updateArticle(id, title, content);
    } catch (error) {
        console.log(error);
    }
};

export const deleteOne = async (req, res) => {
    try {
        const {
            params: { id }
        } = req;
        await deleteArticle(id);
        console.log();
    } catch (error) {
        console.log(error);
    }
};
