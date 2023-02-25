const express = require('express');
const router = express.Router();
const womensCtrl = require('../controllers/womens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', womensCtrl.index);

module.exports = router;