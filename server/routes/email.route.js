const router = require('express').Router();
// const {  ema } = require('../controller');
const {sendMailController}= require("../controller")

router.post('/sendmail',   sendMailController.sendMail);
// router.post('/login',   authController.login);
// router.get('/users',   authController.getAllUser);

module.exports = router;