module.exports = {
    index
  };
  
  function index(req, res) {
      res.render('womans/index', { title: `Woman's Department`});
  }