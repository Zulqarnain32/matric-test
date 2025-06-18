const mongoose = require("mongoose");
const dbConnect = require("./config/db");
const Question = require("./models/QuestionModel");

// Your question data here
const questions = [
  {
    class: 9,
    subject: "Computer",
    chapterNumber: 1,
    chapterName: "Introduction to System",
    shortQuestions: [
      "Define system. What are its basic components?",
      "Differentiate between natural and artificial systems.",
      "Describe the main components of a computer system.",
      "List and describe the types of computing system.",
      "What are the main components of the Von Neumann architecture?",
      "What is the Von Neumann computer architecture? List its key components.",
      "What are the four main steps in the Von Neumann architecture’s instruction cycle?",
      "What is Von Neumann bottleneck?",
      "What is the key advantage of the Von Neumann architecture?",
      "What are the three main requirements for a computing system to function?",
    ],
    longQuestions: ["Explain the main components of a computer with examples."],
    mcqs: [
      {
        question: "Which one is an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 2,
    chapterName: "Number System",
    shortQuestions: [
      "What is the primary purpose of the ASCII encoding scheme?",
      "Explain the difference between ASCII and Unicode.",
      "How does Unicode handle characters from different languages?",
      "What is the range of values for an unsigned 2-byte integer?",
      "Explain how negative integer is represented in binary.",
      "What is benefit of using unsigned integers?",
      "How does the number of bits affect the range of integer values?",
      "Why are whole numbers commonly used in computing for quantities that cannot be negative?",
      "How is the range of floating-point numbers calculated for single precision?",
      "Why is it important to understand the limitations of floating-point representation in scientific computing?",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 3,
    chapterName: "Digital System and Logical Design",
    shortQuestions: [
      "Define a Boolean function and give an example.",
      "What is the significance of the truth table in digital logic?",
      "Explain the difference between analog and digital signals.",
      "Describe the function of a NOT gate with its truth table.",
      "What is the purpose of a Karnaugh map in simplifying Boolean expression?",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 4,
    chapterName: "System Troubleshooting",
    shortQuestions: [
      "What is the first step in the systematic process of troubleshooting, and why is it important?",
      "After identifying a problem, what is the next step in troubleshooting, and how does it help in resolving the issue?",
      "Describe the importance of testing a theory during the troubleshooting process. Provide an example.",
      "Explain what the implement the Solution step entails in a troubleshooting.",
      "Why is it necessary to verify full system functionality after implementing a solution?",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 5,
    chapterName: " Software System ",
    shortQuestions: [
      "Define system software and provide two examples.",
      "Explain the primary functions of an operating system.",
      "What is utility software and why is it important?",
      "Describe the role of device drivers in a computer system.",
      "Differentiate between system software and application software with examples.",
      "What are the main functions of spreadsheet software?",
      "How can graphic design software be used in the field of education?",
      "What is the significance of data backups and how can they be performed?",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 6,
    chapterName: " Introduction to Computer Networks ",
    shortQuestions: [
      "Define data communication and list its key components?",
      "Explain the role of routers in a computer network.",
      "What are the main functions of the network layer in the OSI model?",
      "Describe the difference between packet switching and circuit switching.",
      "What is the purpose of the Dynamic Host Configuration Protocol (DHCP)?",
      "How does encapsulation ensure secure communication in a network?",
      "Differentiate between TCP and UDP in terms of data transfer reliability.",
      "Explain the importance of encryption in network security.",
      "What are the advantages of using a star topology in a network?",
      "How do firewalls contribute to network security?",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 7,
    chapterName: " Computation Thinking ",
    shortQuestions: [
      "Define computational thinking.",
      "What is decomposition in computational thinking?",
      "Explain pattern recognition with an example.",
      "Describe abstraction and its importance in problem-solving.",
      "What is an algorithm?",
      "How does problem understanding help in computational thinking?",
      "What are flowcharts and how are they used?",
      "Explain the purpose of pseudocode.",
      "How do you differentiate between flowcharts and pseudocode?",
      "What is a dry run and why is it important?",
      "Describe LAPP and its significance in learning algorithms.",
      "List and explain two debugging techniques.",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 8,
    chapterName: " Web Development ",
    shortQuestions: [
      "What is the purpose of the <head> tag in HTML?",
      "Explain the difference between an ordered list and unordered list in HTML.",
      "How do you add a comment in CSS?",
      "What are the different ways of apply CSS to an HTML document?",
      "How can you include JavaScript in an HTML file?",
      "Describe the syntax for creating a hyperlink in HTML?",
      "What is the function of the <img> tag in HTML?",
      "How do you link an external CSS file to an HTML document?",
      "What is the use of the <table> tag in HTML?",
      "Explain the box model in CSS.",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Computer",
    chapterNumber: 9,
    chapterName: " Data Science and Data Gathering ",
    shortQuestions: [
      "What is the difference between qualitative and quantitative data?",
      "Give an example of continuous data and explain why it is considered continuous.",
      "Which method would you use to collect opinions from a large group of people about a new school policy?",
      "What type of data is the number of students in your class?",
      "Why is it important to organize data into table or charts before analyzing it?",
      "What is the advantage of using online tools like Google Forms for collecting survey data?",
      "Why might you need to integrate data from different sources when working on a project?",
      "Describe a scenario where discrete data might be more useful than continuous data.",
      "Explain why data visualization is important. How does it help in understanding complex information?",
      "Describe what a line graph is used for and provide an example of data that could be displayed using a line graph.",
      "Explain the use of scatter plots in visualizing continuous data. Provide an example of a situation where a scatter plot would be useful.",
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
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
        answer: "Central Processing Unit",
      },
    ],
  },

  {
    class: 9,
    subject: "Physics",
    chapterNumber: 1,
    chapterName: "Phycical Quantities and Measurement",
    shortQuestions: ["What is keyboard"],
    longQuestions: [
      "Describe the major components of the Moniter and their functions.",
    ],

    mcqs: [
      {
        question: "",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "Keyboard",
      },
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Control Panel Unit",
          "Central Power Unit",
          "Central Processing Utility",
        ],
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
