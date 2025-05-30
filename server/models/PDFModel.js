// server/models/pdfModel.js
const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pdfData: { type: Buffer, required: true },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  class: { type: Number, required: true },
  subject: { type: String, required: true },
  chapters: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PDF', pdfSchema);