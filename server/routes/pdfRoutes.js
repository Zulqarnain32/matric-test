// server/routes/pdfRoutes.js
const express = require('express');
const router = express.Router();
const { savePdf,getUserPdfs } = require("../controllers/pdfController")

router.post('/createPDF',  savePdf);
router.get('/getPDF',  getUserPdfs);

module.exports = router;