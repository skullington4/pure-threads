module.exports = {
    index
  };
  
  function index(req, res) {
      res.render('cart/index', { title: `Cart`});
  }