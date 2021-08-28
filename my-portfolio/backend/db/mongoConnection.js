const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL_CONNECTION, () => {
  console.log("Connected to MongoDB");
})
