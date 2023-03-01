const express = require('express');
const router = express.Router();
const cartsCtrl = require('../controllers/carts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', cartsCtrl.index);

// DELETE /reviews/:id
router.delete('/:id', ensureLoggedIn, cartsCtrl.delete);

module.exports = router;