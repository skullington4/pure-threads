const Item = require('../models/item');

module.exports = {
    index,
    show
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