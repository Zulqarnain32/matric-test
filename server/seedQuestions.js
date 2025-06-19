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
    longQuestions: [
      "Define and describe the concept of system. Explain the fundamental components, objectives, environment, and methods of communication within a system.",
      "Differentiate between natural and artificial systems. Discuss their characteristics, functions and purposes with relevant examples.",
      "Examine in the relationship between systems and different branches of science, including natural science, design science and computer science. How do these branches utilize system theory to understand and improve their respective fields? Provide specific examples to support your analysis.",
      "Explore the different types of computing systems such as computers, software systems, computer network and the internet.",
      "Describe in the main characteristics of a computer as a system, including its objectives, components and interactions among these components.",
      "Explain the Von Neumann architecture of a computer. Include a discussion on the main components, their functions and the step-by-step process of how the architecture operates.",
      "Provide an detailed explanation of how a computer interacts with its environment. Include examples of user input, network communication, and power supply.",
      "Describe the process of retrieving and displaying an file using. a computer based on the information among different components. Provide a step-by-step explanation of how input its processed, data is transferred, and results are displayed on the screen.",
    ],
    mcqs: [
      {
        question: "What is the primary function of a system?",
        options: [
          "To work independently",
          "To achieve a common goal",
          "To create new entertainment",
          "To provide information",
        ],
      },
      {
        question: "What is one of the fundamental concept of any system?",
        options: ["Its size", "Its objective", "Its age", "Its price"],
      },
      {
        question: "What is an example of a simple system?",
        options: [
          " A human body",
          "A computer network",
          "A thermostat regulating temperature",
          "The internet",
        ],
      },
      {
        question:
          "What type of the environment remains unchanged unless the system provides an output?",
        options: ["Dynamic", "Static", "Deterministic", "Non-deterministic"],
      },
      {
        question: "What are the basic components of a system?",
        options: [
          "Users, hardware, software",
          "Objectives, components, communication",
          "Inputs, outputs, processes",
          "Sensors, actuators, controllers",
        ],
      },
      {
        question: "What concept does the theory of system aim to understand?",
        options: [
          "  Hardware design",
          "  System interactions and development over time",
          "Software applications",
          " Network Security",
        ],
      },
      {
        question:
          "What role does the operating system (OS) play in a computer?",
        options: [
          "It performs calculations and executes",
          "It temporarily stores data and instructions for the CPU",
          "It receives inputs from storage components and decides what to do with it",
          "It provides long-term storage of data and software",
        ],
      },
      {
        question:
          "Which describe the following are the Von Neumann architecture's main characteristic?",
        options: [
          "Separate memory of data",
          "Parallel execution of instructions",
          "Single memory for both program instructions and data",
          "Lack of flexibility in executing instructions",
        ],
      },

      {
        question: "What is a disadvantage of the Von Neumann architecture?",
        options: [
          "Complex design due to separate memory spaces",
          "Bottleneck due to program stored in memory",
          "Difficult to modify single memory space for instructions and data",
          "Lack of flexibility in executing instructions",
        ],
      },
      {
        question:
          "Which of the following transports data inside a computer among different components?",
        options: ["Control unit", "System Bus", "Memory", "Processor"],
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
      "Explain how  characters are encoded using Unicode. Provide examples of characters form different languages and their corresponding Unicode code points.",
      "Describe in detail how integers are stored in computer memory.",
      "Explain in the the process of converting decimal integer to its binary representation and vise versa. Include examples or both positive and negative integers.",
      "Perform in the following binary arithmetic operations: (a) Multiplication of 101 by 11. (b) Division of 100 by 10.",
      "Add the following binary numbers: (a) 101 + 110 (b) 1100 + 1011.",
      "Convert the following numbers to: A 4-bit binary and add them: (a) 7 - (-4) (b) 4 - 5 + 3.",
    ],
    mcqs: [
      {
        question: "What does ASCII stands for?",
        options: [
          "American Standard Code for Information Interchange",
          "American Standard Information Communication Interface",
          "American Standard Communication for Information Interchange",
          "Advanced Standard Communication for Information Interchange",
        ],
      },
      {
        question: "Which if the the following number is a valid binary number?",
        options: ["1101102", "11011", "110.11", "1101A"],
      },

      {
        question: "How many bits are used in the standard ASCII encoding?",
        options: ["7 bits", "8 bits", "16 bits", "32 bits"],
      },
      {
        question:
          "Which of the the following is a key advantage of Unicode over ASCII?",
        options: [
          "It used fewer bits per character",
          "It can represents characters for many different languages",
          "It is backward compatible with binary",
          "It is specific to the English language",
        ],
      },
      {
        question: "How many bytes are use to store a typical integer?",
        options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
      },
      {
        question:
          "What is the primary difference between signed and unsigned integers?",
        options: [
          "Unsigned integers cannot be negative",
          "Signed integers have a large range",
          "Unsigned integers are stored in floating-point format",
          "Signed integers are only used for positive numbers",
        ],
      },
      {
        question:
          "In the single precision, how many bits are used for the exponent?",
        options: ["23 bits", "8 bits", "11 bits", "52 bits"],
      },
      {
        question:
          "What is the approximate range of values for single-precision floating-point numbers?",
        options: [
          "1.4 x 10^-45 to 3.4 x 10^38",
          "1.4 x 10^-38 to 3.4 x 10^45",
          "1.0 x 10^-324 to 1.8 x 10^308",
          "1.0 x 10^308 to 1.8 x 10^324",
        ],
      },
      {
        question: "What are the tiny dots that make up an image called?",
        options: ["Pixels", "Bits", "Bytes", "Nodes"],
      },
      {
        question: "In an RGB color model, what does RGB stand for?",
        options: [
          "Red, Green, Blue",
          "Red, Grey, Black",
          "Right, Green, Blue",
          "Red, Green, Brown",
        ],
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
