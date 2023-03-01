const User = require('../models/user');
const Item = require('../models/item');
const user = require('../models/user');

module.exports = {
    index,
    delete: deleteItem
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

