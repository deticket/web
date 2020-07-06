const express = require('express');

const { Router } = express;
const router = new Router();


router.use(require('./events'));


module.exports = router;