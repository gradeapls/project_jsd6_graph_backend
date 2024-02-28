var express = require('express');
var router = express.Router();
const Company = require('../models/Company')
/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
      const company = await Company.find();
      res.json(company);
  } catch (err) {
      next(err);
  }
});

module.exports = router;
