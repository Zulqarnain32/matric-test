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
      "Give two examples of input devices.",
      "What is a computer?",
      "Define hardware.",
      "What is the difference between input and output?",
      "What is a computer?",
      "Define hardware.",
      "What is the difference between input and output?",
    ],
    longQuestions: [
      "Explain the main components of a computer with examples.",
    
    ],
      mcqs: [
      {
        question: "Which one is an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Control Panel Unit", "Central Power Unit", "Central Processing Utility"],
        answer: "Central Processing Unit",
      },
    ],
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
      "Name any two storage devices.",
       "Define RAM and ROM.",
      "What is the function of ALU?",
      "Name any two storage devices.",
       "Define RAM and ROM.",
      "What is the function of ALU?",
      "Name any two storage devices.",
    ],
    longQuestions: [
      "Describe the major components of the CPU and their functions.",
    
    ],
      mcqs: [
      {
        question: "Which one is an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Control Panel Unit", "Central Power Unit", "Central Processing Utility"],
        answer: "Central Processing Unit",
      },
    ],
  },

    {
    class: 9,
    subject: "Computer",
    chapterNumber: 3,
    chapterName: "Third Chapter",
    shortQuestions: [
      "What is keyboard",
    ],
    longQuestions: [
      "Describe the major components of the Moniter and their functions.",
    ],
      mcqs: [
      {
        question: "Which one is an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Control Panel Unit", "Central Power Unit", "Central Processing Utility"],
        answer: "Central Processing Unit",
      },
    ],
  },

  
    
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
