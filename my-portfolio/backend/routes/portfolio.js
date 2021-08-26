const router = require('express').Router();

router.get('/', (req, res) => {
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

module.exports = router;