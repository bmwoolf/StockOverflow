const express = require('express');
const stocksController = require('../controllers/stocksController');
const router = express.Router();

router.get('/buys/:email',
  stocksController.getBuys,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys});
  }
);

router.post(
  '/buys',
  stocksController.getBuys,
  stocksController.addBuy,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys });
  }
);

router.delete(
  '/buys',
  stocksController.getBuys,
  stocksController.deleteBuy,
  (req, res) => {
    res.status(200).json({ stocks: res.locals.buys });
  }
);

module.exports = router;