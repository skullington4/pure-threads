const express = require('express');
const router = express.Router();
const womensCtrl = require('../controllers/womens');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', womensCtrl.index);

// Show's item details page
router.get('/:id', womensCtrl.show);

// POST /mens/:id/reviews
router.post('/:id/reviews', ensureLoggedIn, womensCtrl.createReview);
// DELETE /reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, womensCtrl.deleteReview);

module.exports = router;