const mongoose = require('mongoose');

const { Schema } = mongoose;

// Esse objeto vai descrever o que vc quer armazenar num portfolio
const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    Description: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
  }
);

module.exports = mongoose.model('portfolio', portfolioSchema);