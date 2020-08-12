const express = require('express');
const router = express.Router();

const userRefreshTokenHandler = require('./handler/refresh-tokens');


router.post('/', userRefreshTokenHandler.create);
router.get('/', userRefreshTokenHandler.getToken);


module.exports = router;
