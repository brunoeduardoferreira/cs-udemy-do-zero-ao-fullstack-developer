const mongoose = require('mongoose');
const slug = require('slug');

const { Schema } = mongoose;

// Esse objeto vai descrever o que vc quer armazenar num portfolio
const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      default: function () { return slug(this.title) }
    },
    description: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  }
);

module.exports = mongoose.model('portfolio', portfolioSchema);