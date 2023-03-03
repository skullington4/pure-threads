const User = require('../models/user');
const Item = require('../models/item');



module.exports = {
    index,
  };
  
  function index(req, res) {
      User.findById(req.user._id, function(err, user) {
        res.render('account/index', { title: `My Account`, user});
    });
  }
