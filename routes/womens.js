const express = require('express');
const router = express.Router();
const womensCtrl = require('../controllers/womens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', womensCtrl.index);

// Show's item details page
router.get('/:id', womensCtrl.show);

module.exports = router;