const Item = require('../models/item');

module.exports = {
    index,
    create,
    show
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

  function addToCast(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
      movie.cast.push(req.body.performerId);
      movie.save(function(err) {
        res.redirect(`/movies/${movie._id}`);
      });
    });
  }