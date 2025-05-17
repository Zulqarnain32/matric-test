const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  getQuestionById,
  generateTest
} = require("../controllers/questionController");

router.get("/", getAllQuestions);          // GET /api/questions
router.get("/:chapterId", getQuestionById); // GET /api/questions/:chapterId
router.post("/generate-test", generateTest);



module.exports = router;


