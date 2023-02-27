const User = require('../models/user');

module.exports = {
    index
  };
  
  function index(req, res) {
      User.findById(req.user._id, function(err, user) {
        res.render('cart/index', { title: `Cart`, user});
        
    });
  }

