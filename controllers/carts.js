const User = require('../models/user');
const Item = require('../models/item');
const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


module.exports = {
    index,
    delete: deleteItem,
    checkout
  };
  
  function index(req, res) {
      User.findById(req.user._id, function(err, user) {
        res.render('cart/index', { title: `Cart`, user});
    });
  }

  function deleteItem(req, res, next) {
    console.log(req.user.cart);
    for(let i=0; i<req.user.cart.length; i++) {
      if(req.user.cart[i]._id == req.params.id) {
        console.log(req.user.cart[i]);
        req.user.cart.splice(i, 1);
        req.user.save();
      }
    }

    res.redirect('/cart', 302, { title: `Cart`});
}

function checkout(req, res) {
  const user = req.user;
  const newOrder = {
    _id: new mongoose.Types.ObjectId,
    items: Array
  };
  newOrder.items = user.cart;
  user.orders.push(newOrder);
  user.cart = [];
  user.save();
  res.redirect('/cart', 302, { title: `Cart`});

}

