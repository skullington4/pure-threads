const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  index,
  show,
  createReview,
  delete: deleteReview,
  addToCart,
  showReview,
  update
};
  
function index(req, res) {
  Item.find({ department:'Womens'}, function(err, items) {
    res.render('womens/index', { title: 'All Womens department', items });
  });
}

function show(req, res) {
  Item.findById(req.params.id, function(err, item) {
    res.render('womens/show', {
      title: 'Item Detail',
      item
    });
  });
}

function deleteReview(req, res, next) {
  Item.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function(movie) {
    if (!item) return res.redirect('/womans');
    item.reviews.remove(req.params.id);
    item.save().then(function() {
      res.redirect(`/mens/${item._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}
  
function createReview(req, res) {
  Item.findById(req.params.id, function(err, item) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    item.reviews.push(req.body);
    console.log(item.reviews);
    item.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/mens/${item._id}`);
    });
  });
}

function addToCart(req, res) {
  req.body.user = req.user._id;
  let id = req.params.id;
  User.findById(req.body.user, function(err, user) {
    Item.findById(id, function(err, item) {

      user.cart.push(item);
      user.save(function(err) {
        res.redirect(`/womens/${id}`);
      });
    });
  });
}

function showReview(req, res) {
  let id = req.params.id;
  let reviewID = req.params.review_id;
  Item.findById(id, function(err, item) {
    const reviewToEdit = item.reviews.find(review => review._id == reviewID);
    res.render('womens/edit', { title: 'Edit Review', item, reviewToEdit});
  }); 
}

function update(req, res) {
  let id = req.params.id;
  let reviewID = req.params.review_id;
  let content = req.body.content;
  let rating = req.body.rating;
  Item.findById(id, function(err, item) {
    const reviewToEdit = item.reviews.find(review => review._id == reviewID);
    reviewToEdit.content = req.body.content;
    reviewToEdit.rating = req.body.rating;
    item.save(function(err) {
      if (err) return res.redirect('/mens');
      return res.redirect(`/womens/${req.params.id}`);
    });
  });
}