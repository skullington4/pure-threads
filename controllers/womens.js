const Item = require('../models/item');

module.exports = {
    index
  };
  
  function index(req, res) {

    Item.find({ department:'Womens'}, function(err, items) {
      res.render('womens/index', { title: 'All Womens department', items });
    });
  }