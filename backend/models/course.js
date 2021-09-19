const uuidv4 = require('uuid/v4');
const mongoose = require('mongoose');

const { Schema } = mongoose;

// Esse objeto vai descrever o que vc quer armazenar num course
const courseSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      default: uuidv4()
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    schoolName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    qtdHours: {
      type: String,
      required: true
    },
    courseDate: {
      type: Date,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    urlRepository: {
      type: String,
      required: false
    },
    urlCertified: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('course', courseSchema);