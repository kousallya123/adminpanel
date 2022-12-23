var express = require('express');
const { getLogin, postLogin, getSignup, userLogout, getHomepage, postSignup } = require('../controllers/userControllers');
const { authuser } = require('../middlewares/auth');
var router = express.Router();

router.get('/login',getLogin)

router.post('/login',postLogin)

router.get('/signup',getSignup)

router.get('/logout',userLogout)

router.get('/homepage',authuser, getHomepage)

router.post('/signup',postSignup)


module.exports = router;
