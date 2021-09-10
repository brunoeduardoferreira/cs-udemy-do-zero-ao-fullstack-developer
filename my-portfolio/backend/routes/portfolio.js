const router = require('express').Router();
const Portfolio = require('../models/Portfolio');

// Traz todos os portfolios  
router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.find();
    res.json({
      success: true,
      data: portfolio
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
});

// Traz portfolio específico 
router.get('/:slug', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      slug: req.params.slug
    })
    res.json({
      success: true,
      data: portfolio
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
})

// Grava o Portfolio 
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
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
});

router.patch('/:slug', async (req, res) => {
  try {
    const updatedPorfolio = await Portfolio.updateOne({
      slug: req.params.slug
    },
      {
        title: req.body.title,
        description: req.body.description
      })
    res.json({
      success: true
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
})

module.exports = router;