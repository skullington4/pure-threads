const express = require('express');
const router = express.Router();
const mensCtrl = require('../controllers/mens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', mensCtrl.index);
// Show's item details page
router.get('/:id', mensCtrl.show);


module.exports = router;