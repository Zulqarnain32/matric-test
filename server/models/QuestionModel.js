// models/QuestionModel.js
const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  class: {
    type: Number,
    enum: [9, 10],
    required: true
  },
  subject: {
    type: String,
    enum: ['Computer', 'Physics'],
    required: true
  },
  chapterNumber: {
    type: Number,
    required: true
  },
  chapterName: {
    type: String,
    required: true
  },
  shortQuestions: {
    type: [String],
    required: true
  },
  longQuestions: {
    type: [String],
    required: true
  }
}, { timestamps: true });

const Question = mongoose.model('Question', chapterSchema);
module.exports = Question
