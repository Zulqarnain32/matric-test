const mongoose = require("mongoose");
const dbConnect = require("./config/db");
const Question = require("./models/QuestionModel");

// Your question data here
const questions = [
  {
    class: 9,
    subject: "Computer",
    chapterNumber: 1,
    chapterName: "Introduction to Computer",
    shortQuestions: [
      "What is a computer?",
      "Define hardware.",
      "What is the difference between input and output?",
      "Give two examples of input devices."
    ],
    longQuestions: [
      "Explain the main components of a computer with examples.",
      "Discuss the characteristics and limitations of a computer."
    ]
  },
  {
    class: 9,
    subject: "Computer",
    chapterNumber: 2,
    chapterName: "Computer Components",
    shortQuestions: [
      "What is CPU?",
      "Define RAM and ROM.",
      "What is the function of ALU?",
      "Name any two storage devices."
    ],
    longQuestions: [
      "Describe the major components of the CPU and their functions.",
      "Explain different types of computer memory with examples."
    ]
  },
  // 🟡 Add the rest of the chapters here (I'll give you the full JSON if you want)
];

const seedQuestions = async () => {
  await dbConnect();

  try {
    await Question.deleteMany(); // Optional: Clear previous data
    await Question.insertMany(questions);
    console.log("✅ Questions inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting questions:", error);
    process.exit(1);
  }
};

seedQuestions();
