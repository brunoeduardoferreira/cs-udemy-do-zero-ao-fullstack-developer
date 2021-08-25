const express = require('express');

const app = express();

const PORT = 3080;

app.get('/', (req, res) => {
  res.json({
    'success': true
  });
});

app.get('/portfolio', (req, res) => {
  // Access DB
  const data = [
    {
      id: 1,
      name: 'My First Name',
      createdAt: '2021-01-01'
    },
    {
      id: 2,
      name: 'My Other Name',
      createdAt: '2021-03-06'
    }
  ];

  res.json(
    {
      'success': true,
      data: data
    }
  );
});

app.listen(PORT);