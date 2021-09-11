const express = require('express');

require('dotenv').config();

const api = require('./backend/routes')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    'success': true
  });
});

// Middleware
app.use('/api', api);

const PORT = process.env.PORT;
app.listen(PORT);