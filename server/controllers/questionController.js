const Question = require("../models/QuestionModel");

exports.getAllQuestions = async (req, res) => {
  try {
    const filter = {};

    if (req.query.class) {
      filter.class = Number(req.query.class);
    }
    if (req.query.subject) {
      filter.subject = req.query.subject;
    }

    const questions = await Question.find(filter);
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch questions" });
  }
};

exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.chapterId);
    if (!question) {
      return res.status(404).json({ error: "Chapter not found" });
    }
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch chapter" });
  }
};

exports.generateTest = async (req, res) => {
    const { class: selectedClass, subject, chapterNumbers } = req.body;
  
    if (!selectedClass || !subject || !Array.isArray(chapterNumbers)) {
      return res.status(400).json({ error: "Invalid input" });
    }
  
    try {
      const questions = await Question.find({
        class: selectedClass,
        subject: subject,
        chapterNumber: { $in: chapterNumbers }
      });
  
      const testPaper = questions.map((chapter) => ({
        chapterName: chapter.chapterName,
        shortQuestions: chapter.shortQuestions.slice(0, 4),
        longQuestions: chapter.longQuestions.slice(0, 2)
      }));
  
      res.status(200).json({ test: testPaper });
    } catch (err) {
      console.error("Test generation failed:", err);
      res.status(500).json({ error: "Failed to generate test" });
    }
  };
  