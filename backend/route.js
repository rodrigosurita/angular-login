const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/login/submit', controller.loginSubmit);

router.get('/logout', controller.logout);

module.exports = router;
