const articleDbModel = require('../models/article');
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = []
    }

    async getAllArticles(req, res) {
        const articles = await articleModel.findAll();
        res.status(201).json({articles: articles});
        res.status(500).json({ error: 'Error fetching articles' });
    }

    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug);
        res.status(201).json({ article: article });
    }

    async createNewArticle(req, res) {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T',' '),
            author_id: req.body.author_id,
        }
        const articleId = await articleModel.create(newArticle);
        res.status(201).json({ 
            message: `Article created successfully with id ${articleId}`,
            article: {id: articleId, ...newArticle} });
    }

    async updateArticle(req, res) {
        const articleId = req.params.id;
        const updatedArticle = Object.fromEntries(
            Object.entries(req.body).filter(([_, value]) => value !== undefined)
        );
        const result = await articleModel.update(req.params.id, updatedArticle);
        res.status(201).json({
            message: `Article with id ${articleId} updated successfully`,
            article: {id: articleId, ...updatedArticle} });
    }

    async deleteArticle(req, res) {
        const articleId = req.params.id;
        const result = await articleModel.delete(articleId);
        res.status(201).json({ message: `Article with id ${articleId} deleted successfully` });
    }
}

module.exports = articleController;