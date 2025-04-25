const express = require('express');
const router = express.Router();
const articleControllerClass = require('../controllers/article');
const article = require('../controllers/article');

const articleController = new articleControllerClass();

router.get('/', async (req, res) => articleController.getAllArticles(req, res));

module.exports = router;