const Item = require('../models/item');
const User = require('../models/user');

module.exports = {
  index,
  create,
  show,
  createReview,
  delete: deleteReview,
  addToCart,
  showReview,
  update
};
  

function create(req, res) {
  const title = req.body.title;
  const department = req.body.department;
  const size = req.body.size;
  const price = req.body.price;
  const stock = req.body.stock;
  const color = req.body.color;
  const secondaryColor = req.body.secondaryColor;
  const brand = req.body.brand;
  const description = req.body.description;
  const keyWords = req.body.keyWords;
  const imageOne = req.body.imageOne;
  const imageTwo = req.body.imageTwo;
  const imageThree = req.body.imageThree;
  
  
  const item = new Item(req.body);
  item.save(function(err) {
    if (err) {
      console.log(err);
      return res.redirect('/');
    };
    console.log(item);
    res.redirect('/');
  });
}

function index(req, res) {
  Item.find({ department:'Mens'}, function(err, items) {
    res.render('mens/index', { title: 'All Mens department', items });
  });
}

function show(req, res) {
  Item.findById(req.params.id, function(err, item) {
    res.render('mens/show', {
      title: 'Item Detail',
      item
    });
  });
}

function deleteReview(req, res, next) {
  Item.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function(item) {
    if (!item) return res.redirect('/mens');
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
    
    item.reviews.push(req.body);
    console.log(item.reviews);
    item.save(function(err) {
      res.redirect(`/mens/${item._id}`);
    });
  });
}

function addToCart(req, res) {
  req.body.user = req.user._id;
  let id = req.params.id;
  console.log(req.body.user)
  User.findById(req.body.user, function(err, user) {
    Item.findById(id, function(err, item) {

      user.cart.push(item);
      user.save(function(err) {
        if (err) return res.redirect('/mens');
        res.redirect(`/mens/${id}`);
      });
    });
  });
}

function showReview(req, res) {
  let id = req.params.id;
  let reviewID = req.params.review_id;
  Item.findById(id, function(err, item) {
    const reviewToEdit = item.reviews.find(review => review._id == reviewID);
    res.render('mens/edit', { title: 'Edit Review', item, reviewToEdit});
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
      return res.redirect(`/mens/${req.params.id}`);
    });
  });
}