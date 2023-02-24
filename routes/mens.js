const express = require('express');
const router = express.Router();
const mensCtrl = require('../controllers/mens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', mensCtrl.index);

module.exports = router;