const express = require('express');
const router = express.Router();
const mensCtrl = require('../controllers/mens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', mensCtrl.index);
// Show's item details page
router.get('/:id', mensCtrl.show);

// POST /mens/:id/reviews
router.post('/:id/reviews', ensureLoggedIn, mensCtrl.createReview);
// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, mensCtrl.delete);



module.exports = router;