module.exports = {
    index
  };
  
  function index(req, res) {
      res.render('index', { title: `Men's Department`});
  }