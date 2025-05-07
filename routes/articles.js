const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');
const article = require('../controllers/article');

const articleController = new articleControllerClass();

router.get('/', async (req, res) => articleController.getAllArticles(req, res));
router.get('/article/:slug', (req, res) => articleController.getArticleBySlug(req, res));
router.post('/article/create', (req, res) => articleController.createNewArticle(req, res));

module.exports = router;