const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

// MIDDLEWARE
const auth = require('../middleware/auth')

// ajaj.com/api/auth/test

router.post('/register', authController.register);
router.post('/signin', authController.signin);

// before go isauth u go run auth() middleware
// auth() error authController.isauth never run
router.get('/isauth', auth(), authController.isauth);

// router.post('/testrole', auth('createAny', 'test'),authController.testrole)





module.exports = router


