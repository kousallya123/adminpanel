var express=require('express');
const { getLogin, postLogin, getdashboard, getlogout, postdashboard, deleteUser, searchUser, updateUser, adminPostRegister } = require('../controllers/adminControllers');
const { auth } = require('../middlewares/auth');
var router = express.Router();

router.get('/login',getLogin)

router.post('/login',postLogin)

router.get('/dashboard',auth,getdashboard)

router.post("/register-user",adminPostRegister)


router.get("/logout",getlogout)

router.get('/params/:id',deleteUser)

router.post("/dashboard",postdashboard)

router.post("/search",searchUser)

router.post("/update",updateUser)




module.exports = router;
