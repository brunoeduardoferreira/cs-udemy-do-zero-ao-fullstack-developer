const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

router.get('/', (req, res) => {
  const portfolio = Portfolio.find();

  res.json({
    success: true,
    data: portfolio
  })

});

router.post('/', async (req, res) => {
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPortfolio = await portfolio.save();
    res.json({
      success: true,
      data: savedPortfolio
    })
  } catch (err) {
    res.json({
      success: false,
      message: err
    })
  }
});

module.exports = router;