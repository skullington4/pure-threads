const Item = require('../models/item');

module.exports = {
    index,
    create
  };
  
  function index(req, res) {
      res.render('mens/index', { title: `Men's Department`});
  }

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