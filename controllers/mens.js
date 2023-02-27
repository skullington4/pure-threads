const Item = require('../models/item');

module.exports = {
    index,
    create,
    show,
    createReview,
    delete: deleteReview
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