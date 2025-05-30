// server/controllers/pdfController.js
const PDF = require('../models/PDFModel');

exports.savePdf = async (req, res) => {
  try {
    const { title, pdfData, class: studentClass, subject, chapters } = req.body;
    console.log("title is ", title)
    console.log("subject is ", subject)

    const pdf = new PDF({
      title,
      pdfData: Buffer.from(pdfData, 'base64'),
      class: studentClass,
      subject,
      chapters,
    });

    await pdf.save();
    res.status(201).json({ message: 'PDF saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving PDF' });
  }
};

// server/controllers/pdfController.js
exports.getUserPdfs = async (req, res) => {
  try {
    const pdfs = await PDF.find({ }).sort({ createdAt: -1 });
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching PDFs' });
  }
};