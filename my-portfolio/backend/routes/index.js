// Arquivo index de Rotas
const router = require('express').Router();
// disponiobiliza a conexão do Mongo para esse arquivo
require('../db/mongoConnection');

const portfolio = require('./portfolio');

router.get('/', (req, res) => {
  res.json({
    success: false,
    message: 'Please, do not call /api, it is for our server'
  })
});

router.use('/portfolio', portfolio);

module.exports = router;