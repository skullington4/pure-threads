const express = require('express');
const router = express.Router();
const cartsCtrl = require('../controllers/carts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', cartsCtrl.index);

module.exports = router;