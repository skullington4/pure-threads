const express = require('express');
const router = express.Router();
const womansCtrl = require('../controllers/womans');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', womansCtrl.index);

module.exports = router;