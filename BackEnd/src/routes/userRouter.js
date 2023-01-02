const userController = require('../controllers/userController.js');
const passport = require("passport");
const router = require('express').Router();


router.post('/register', userController.register);  
router.get('/getUserInfo', passport.authenticate('jwt', { session: false }),userController.getUserInfo);
router.post('/login',userController.login);
router.post('/update', passport.authenticate('jwt', { session: false }),userController.updateInfo)





// HERE REQ.USER WILL HAVE THE USER INFO SINCE WE USED THE PASSPORT.AUTHENTICATE METHOD
router.get('/dashboard',/*passport.authenticate("jwt",{session:false}),*/userController.dashboard);

// HERE REQ.USER WILL BE UNDEFINED SINCE WE DIDNT CALL PASSPORT.AUTHENTICATE METHOD , AKA WE DON'T NEED TO VERIFY A TOKEN SINCE NO TOKEN IS NECESSARY SINCE THIS IS NOT A PROTECTED ROUTE.
//router.post('/dashboard',userController.dashboard);

module.exports = router;