const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// MIDDLEWARE
const auth = require('../middleware/auth')


/// bla.com/api/users/profile
/// auth() check the token
router.route('/profile')
.get(auth('readOwn','profile'),userController.profile)
.patch(auth('updateOwn','profile'),userController.updateProfile)

router.patch('/email',auth('updateOwn','profile'),userController.updateUserEmail)



module.exports = router;