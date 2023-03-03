const express = require('express');
const router = express.Router();
const accountsCtrl = require('../controllers/accounts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', accountsCtrl.index);


module.exports = router;