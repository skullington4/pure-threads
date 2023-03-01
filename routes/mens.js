const express = require('express');
const router = express.Router();
const mensCtrl = require('../controllers/mens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', mensCtrl.index);
// Show's item details page
router.get('/:id', mensCtrl.show);

// Edit review
router.get('/:id/reviews/:review_id/edit', ensureLoggedIn, mensCtrl.showReview)
// POST /mens/:id/reviews
router.post('/:id/reviews', ensureLoggedIn, mensCtrl.createReview);
// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, mensCtrl.delete);

// Add to cart
router.post('/:id/cart', mensCtrl.addToCart);

// PUT for editing review
router.put('/:id/reviews/:review_id/edit', ensureLoggedIn, mensCtrl.update);

module.exports = router;