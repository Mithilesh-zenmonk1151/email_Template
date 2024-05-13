
const router = require('express').Router();

router.use('/mail', require('./email.route'));
module.exports = router;