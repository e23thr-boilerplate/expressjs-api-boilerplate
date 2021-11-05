var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


if (process.env.NODE_ENV !== "production") {

  const responseObject = {
    status: "RUNNING",
    id: 1,
    name: "Administrator",
    book: {
      title: "Gherkin book",
      year: "2023"
    },
  };

  router.get('/is-server-up', function (req, res, next) {
    res.status(200).json(responseObject);
    next();
  });

  router.get('/uri1', function (req, res, next) {
    res.status(201).json(responseObject);
    next();
  });

  router.get('/uri2', function (req, res, next) {
    res.json(responseObject);
    next();
  });

  router.get('/uri3', function (req, res, next) {
    res.json(responseObject);
    next();
  });
}
module.exports = router;
