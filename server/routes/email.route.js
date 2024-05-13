const router = require('express').Router();
const {sendMailController}= require("../controller")

router.post('/sendmail',   sendMailController.sendMail);


module.exports = router;