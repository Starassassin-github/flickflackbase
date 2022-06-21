const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articles.controller');
const { addArticleValidator } = require('../middleware/validation');

const auth = require('../middleware/auth');

// wait auth() and addArticleValidator => controller
router.post('/',auth('createAny','articles'), addArticleValidator, articlesController.createArticle)


router.route('/article/:id')
.get(auth('readAny','articles'),articlesController.getArticleById)
.patch(auth('updateAny','articles'),articlesController.updateArticleById)
.delete(auth('deleteAny', 'articles'),articlesController.deleteArticleById)

router.route('/users/article/:id')
.get(articlesController.getUsersArticleById)

module.exports = router;