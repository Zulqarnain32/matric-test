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
          "(A) To work independently",
          "(B) To achieve a common goal",
          "(C) To create new entertainment",
          "(D) To provide information",
        ],
      },
      {
        question: "What is one of the fundamental concept of any system?",
        options: ["Its size", "Its objective", "Its age", "Its price"],
      },
      {
        question: "What is an example of a simple system?",
        options: [
          "(A) A human body",
          "(B) A computer network",
          "(C) A thermostat regulating temperature",
          "(D) The internet",
        ],
      },
      {
        question:
          "What type of the environment remains unchanged unless the system provides an output?",
        options: ["(A) Dynamic", "(B) Static", "(C) Deterministic", "(D) Non-deterministic"],
      },
      {
        question: "What are the basic components of a system?",
        options: [
          "(A)  Users, hardware, software",
          "(B)  Objectives, components, communication",
          "(C)  Inputs, outputs, processes",
          "(D)  Sensors, actuators, controllers",
        ],
      },
      {
        question: "What concept does the theory of system aim to understand?",
        options: [
          "(A)    Hardware design",
          "(B)    System interactions and development over time",
          "(C)  Software applications",
          "(D)   Network Security",
        ],
      },
      {
        question:
          "What role does the operating system (OS) play in a computer?",
        options: [
          "(A) It performs calculations and executes",
          "(B) It temporarily stores data and instructions for the CPU",
          "(C) It receives inputs from storage components and decides what to do with it",
          "(D) It provides long-term storage of data and software",
        ],
      },
      {
        question:
          "Which describe the following are the Von Neumann architecture's main characteristic?",
        options: [
          "(A)  Separate memory of data",
          "(B)  Parallel execution of instructions",
          "(C)  Single memory for both program instructions and data",
          "(D)  Lack of flexibility in executing instructions",
        ],
      },

      {
        question: "What is a disadvantage of the Von Neumann architecture?",
        options: [
          "(A) Complex design due to separate memory spaces",
          "(B) Bottleneck due to program stored in memory",
          "(C) Difficult to modify single memory space for instructions and data",
          "(D) Lack of flexibility in executing instructions",
        ],
      },
      {
        question:
          "Which of the following transports data inside a computer among different components?",
        options: ["(A) Control unit", "(B) System Bus", "(C) Memory", "(D) Processor"],
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
          "(A)  American Standard Code for Information Interchange",
          "(B)  American Standard Information Communication Interface",
          "(C)  American Standard Communication for Information Interchange",
          "(D)  Advanced Standard Communication for Information Interchange",
        ],
      },
      {
        question: "Which if the the following number is a valid binary number?",
        options: ["(A) 1101102", "(B) 11011", "(C) 110.11", "(D) 1101A"],
      },

      {
        question: "How many bits are used in the standard ASCII encoding?",
        options: ["(A) 7 bits", "(B) 8 bits", "(C) 16 bits", "(D) 32 bits"],
      },
      {
        question:
          "Which of the the following is a key advantage of Unicode over ASCII?",
        options: [
          "(A)  It used fewer bits per character",
          "(B)  It can represents characters for many different languages",
          "(C)  It is backward compatible with binary",
          "(D)  It is specific to the English language",
        ],
      },
      {
        question: "How many bytes are use to store a typical integer?",
        options: ["(A) 1 byte", "(B) 2 bytes", "(C) 4 bytes", "(D) 8 bytes"],
      },
      {
        question:
          "What is the primary difference between signed and unsigned integers?",
        options: [
          "(A) Unsigned integers cannot be negative",
          "(B) Signed integers have a large range",
          "(C) Unsigned integers are stored in floating-point format",
          "(D) Signed integers are only used for positive numbers",
        ],
      },
      {
        question:
          "In the single precision, how many bits are used for the exponent?",
        options: ["(A) 23 bits", "(B) 8 bits", "(C) 11 bits", "(D) 52 bits"],
      },
      {
        question:
          "What is the approximate range of values for single-precision floating-point numbers?",
        options: [
          "(A) 1.4 x 10^-45 to 3.4 x 10^38",
          "(B) 1.4 x 10^-38 to 3.4 x 10^45",
          "(C) 1.0 x 10^-324 to 1.8 x 10^308",
          "(D) 1.0 x 10^308 to 1.8 x 10^324",
        ],
      },
      {
        question: "What are the tiny dots that make up an image called?",
        options: ["(A) Pixels", "(B) Bits", "(C) Bytes", "(D) Nodes"],
      },
      {
        question: "In an RGB color model, what does RGB stand for?",
        options: [
          "(A)  Red, Green, Blue",
          "(B)  Red, Grey, Black",
          "(C)  Right, Green, Blue",
          "(D)  Red, Green, Brown",
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
    "Explain the usage of Boolean functions in computers.",
    "Describe how to construct a truth table for a Boolean expression with an example.",
    "Describe the concept of duality in Boolean algebra and provide an example to illustrate it.",
    "Compare and contrast half-adders and full-adders, including their truth tables, Boolean expression, and circuit diagram.",
    "How do Karnaugh maps simplify Boolean expression? Provide a detailed example with steps.",
    "Design a 4-bit binary adder using both half-adders and full-adders. Explain each step with truth tables, Boolean expression, and circuit diagram.",
    "Simplify the following Boolean functions using Boolean algebra rules.\n$F(A, B) = \\bar{A} \\cdot B + A \\cdot B$\n$F(A, B) = \\bar{A} + B",
    "Use De Morgan's laws to simplify the following function: $F(A, B, C) = \\overline{A + B} + \\bar{A} \\cdot C$",
    "Simplify the following expressions: $(A + B) \\cdot (\\bar{A} + B) \\cdot (A + \\bar{B}) \\cdot (\\bar{A} + \\bar{B})$",
    "Simplify the following expressions: $(A + A \\cdot B) \\cdot (\\bar{A} \\cdot B + \\bar{A} \\cdot \\bar{B}) + A \\cdot B + (A + B)$"
    ],
    mcqs: [
      {
        question: " Which of the following Boolean expression represents the OR operation?",
        options: ["(A) A.B", "(B) A+B", "(C) A", "(D) A⊕B"],
    },
    {
        question: " What is the value of the Boolean expression A+0=?",
        options: ["(A) A+1=1", "(B) A+0=A", "(C) A", "(D) A, 0=0"],
    },
    {
        question: " Which logic gate outputs true only if both inputs are true?",
        options: ["(A) OR gate", "(B) AND gate", "(C) XOR gate", "(D) NOT gate"],
    },
    {
        question: " In a half-adder circuit, the carry is generated by which operation?",
        options: ["(A) XOR operation", "(B) OR operation", "(C) AND operation", "(D) NOT operation"],
    },
    {
        question: " What is the decimal equivalent of the binary number 1101?",
        options: ["(A) 11", "(B) 12", "(C) 13", "(D) 14"],
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
      "Discuss the importance of troubleshooting in maintaining the smooth operation of system, especially computing system.",
    "Explain the systematic process of troubleshooting. Describe each step in detail especially computing system.",
    "Using a case study where a printer is not printing, explain how you would identify the problem and establish a theory of probable cause.",
    "Discuss the importance of documenting findings, actions and outcomes during the troubleshooting process.",
    "Analyze the various ways troubleshooting is vital in computing systems, particularly in preventing downtime, ensuring data integrity, and improving security. Provide specific examples and scenarios to support your analysis.",
    "Describe basic software-related troubleshooting strategies, including handling application freezing and unresponsive peripherals.",
    "Explain how to recognize hardware failures, particularly focusing on RAM and hard drive issues.",
    "Elaborate on the importance of maintaining software and addressing security threats.",
    "Describe common methods for identifying and removing malware infections an applying operating system updates for security.",
    "Describe the different data backup methods, including using external storage devices and cloud solutions."

    ],
    mcqs: [
       {
        question: "What is the first step in the systematic process of troubleshooting?",
        options: ["(A) Establish a Theory of Probable Cause", "(B) Implement the Solution", "(C) Identify Problem", "(D) Document Findings, Actions, and Outcomes"],
    },
    {
        question: "Why is effective troubleshooting important for maintaining systems?",
        options: ["(A) It helps save money on repairs", "(B) It prevents the need for professional help", "(C) It ensures systems operate smoothly and efficiently", "(D) It allow for more infrequent system updates and efficiently"],
    },
    {
        question: "Which step involves coming up with a theory about what might be causing a problem?",
        options: ["(A) Test the Theory to Determine the Cause", "(B) Establish a Theory of Probable Cause", "(C) Implement the Solution", "(D) Verify Full System Functionality"],
    },
    {
        question: "After implement a solution, What is the next step in the troubleshooting process?",
        options: ["(A) Document Findings, Action, and Outcomes", "(B) Test the Theory to Determine the Cause", "(C) Verify Full System Functionality", "(D) Establish a Plan of Action to Resolve the Problem"],
    },
    {
        question: "Which of the following is an example of identifying a problem in troubleshooting process?",
        options: ["(A) Document Findings, Action and Outcomes", "(B) Test the Theory to Determine the Cause", "(C) Verify Full System Functionality", "(D) Establish a Plan of Action to Resolve the Problem"],
    },
    {
        question: "Why is documenting finding, actions and outcomes important in troubleshooting?",
        options: ["(A) It helps solve problems faster", "(B) It provides a record for future reference", "(C) It allows for more efficient testing", "(D) To ensure the solution is implemented correctly"],
    },
    {
        question: "What is the purpose of establishing a plan of action in troubleshooting?",
        options: ["(A) To identify the problem", "(B) To verify full system functionality", "(C) To determine the cause", "(D) To decide on the steps needed to resolve the issue"],
    },
    {
        question: "Why is troubleshooting important in computing systems?",
        options: ["(A) It ensures hardware components are always up to date", "(B) It prevents the need for data backups", "(C) It helps keep systems running smoothly and securely", "(D) It eliminates the need for software update"],
    },
    {
        question: "What does troubleshooting help to prevent by quickly identifying and resolving issues?",
        options: ["(A) The need for professional help", "(B) The need for software updates", "(C) Downtime and lost productivity", "(D) The need for operating maintenance"],
    },
    {
        question: "Which of the following is an example of ensuring data integrity through troubleshooting?",
        options: ["(A) Identifying a software bug", "(B) Replacing a faulty printer", "(C) Using a cooling pad to prevent laptop", "(D) Updating the operating system"],
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
      "Discuss the importance of system software in a computing system.",
    "Describe the role of operating system, utility software, and device drivers, providing examples of each.",
    "Explain the difference between system software to optimize system performance and maintain security. Provide detailed steps and examples of common utility tools.",
    "Explain how to install, update and troubleshoot device drivers for hardware components.",
    "Discuss the main functions of word processing, spreadsheet, and presentation, and graphic design applications."

    ],
    mcqs: [
         {
        question: "What is the primary function of an operating system?",
        options: ["(A) To create documents", "(B) To manage hardware resources and provide a user interface", "(C) To perform calculations", "(D) To design graphics"],
    },
    {
        question: "Which software is use of enhance system performance and security?",
        options: ["(A) Operating system", "(B) Utility software", "(C) Application software", "(D) Device drivers"],
    },
    {
        question: "What role do device drivers play in a computer system?",
        options: ["(A) Manage files", "(B) Facilitate communication between hardware devices and the operating system", "(C) Create presentations", "(D) Enhance graphics performance"],
    },
    {
        question: "Which of the following is an example of application software?",
        options: ["(A) Microsoft Word", "(B) BIOS", "(C) Disk Cleanup", "(D) Device Manager"],
    },
    {
        question: "What is the main purpose of spreadsheet software?",
        options: ["(A) To edit text documents", "(B) To organize and analyze data", "(C) To create visual content", "(D) To enhance system data"],
    },
    {
        question: "Which type of software would you use to design a logo?",
        options: ["(A) Operating system", "(B) Spreadsheet software", "(C) Graphic design software", "(D) Utility software"],
    },
    {
        question: "What is the function of system software?",
        options: ["(A) To facilitate communication between hardware", "(B) To perform specific tasks for the user", "(C) To create visual content", "(D) To organize and analyze data"],
    },
    {
        question: "Why are operating system updates important?",
        options: ["(A) They increase screen brightness", "(B) They add more fonts", "(C) They enhance security and fix bugs", "(D) They improve battery life"],
    },
    {
        question: "What is the common task you perform using word processing software?",
        options: ["(A) Create and edit text documents", "(B) Manage hardware resources", "(C) Manage hardware performance", "(D) Organize and analyze data"],
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
        "Discuss other objectives of computer networks and provide examples of how they facilitate resource sharing and data communication.",
    "In a simplex communication system, assume data is transmitted at a rate of 600 bits per seconds (bps). Compute the time to transmit a message if (a) it is of 10 kilobits (b) it is 10 kilobytes.",
    "Describe how data is transmitted across computer networks using packet switching and circuit switching.",
    "Discuss the role and importance of protocols in data communication. Explain the functions of key protocols such as TCP/IP, HTTP, DNS and DHCP.",
    "Evaluate different methods of network security, including firewalls, encryption, and antivirus software.",
    "Describe real-world applications of computer networks in business, education and healthcare.",
    "Compare and contrast the different types of networks topologies (star, ring, bus and mesh).",
    "Consider a shift cipher with a shift amount of 4. (A) Encrypt the message \"SECURITY\". (B) Decrypt the message \"YMWM\".",
    "An IPv4 address is a 32-bit number. Calculate the total number of unique IPv4 addresses possible. (a) Show the calculation for the total number of IPv4 addresses. (b) How many addresses are left if 10% of the total addresses are reserved for special purpose."

    ],
    mcqs: [
        {
        question: "What is the primary objective of computer networks?",
        options: ["(A) Increase the computational power", "(B) Enable resource sharing and data communication", "(C) Enhance graphic capabilities", "(D) Improve software development"],
    },
    {
        question: "Which device evice evice used to connect multiple networks and direct data packets between them?",
        options: ["(A) Switch", "(B) Hub", "(C) Router", "(D) Modem"],
    },
    {
        question: "Which layer of the OSI model is responsible for node-to-node data transfer and error detection?",
        options: ["(A) Physical Layer", "(B) Data Link Layer", "(C) Network Layer", "(D) Transport Layer"],
    },
    {
        question: "What is that the function of the Domain Name System (DNS)?",
        options: ["(A) Assign IP addresses dynamically", "(B) Translate domain names to IP addresses", "(C) Secure data communication", "(D) Monitor network traffic"],
    },
    {
        question: "Which method/method of data transmission used a dedicated communication path?",
        options: ["(A) Packet Switching", "(B) Circuit Switching", "(C) Half-Duplex", "(D) Half-Duplex"],
    },
    {
        question: "What is encapsulation in the context of network communication?",
        options: ["(A) Converting data into a secure format", "(B) Wrapping data with protocol information", "(C) Monitoring network traffic", "(D) Translating domain names to IP addresses"],
    },
    {
        question: "Which protocol/protocol is used for reliable data transfer in the TCP/IP model?",
        options: ["(A) HTTP", "(B) FTP", "(C) TCP", "(D) UDP"],
    },
    {
        question: "What is the main purpose of a firewall in network security?",
        options: ["(A) Convert data into a secure format", "(B) Monitor and control network traffic", "(C) Assign IP addresses", "(D) Translate domain names"],
    },
    {
        question: "Which network topology connects all devices to a central hub?",
        options: ["(A) Ring", "(B) Mesh", "(C) Bus", "(D) Star"],
    },
    {
        question: "What is a key benefit of using computer networks in businesses?",
        options: ["(A) Increases computational power", "(B) Enable resources sharing and efficient communication", "(C) Enhance graphic capabilities", "(D) Improve software development"],
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
       "Write an algorithm to assign a grade based on the marks obtained by a student. The grading system follows these criteria: (a) 90 and above: A+ (b) 80 to 89: B (c) 70 to 79: D (d) 60 to 69: C (e) Below 60:F",
    "Explain how you would use algorithm design method, such as flowcharts and pseudocode, to solve a complex computational problem. Illustrate your explanation with a detailed example.",
    "Define computational thinking and explain its significance in modern problem-solving. Provide examples to illustrate how computational thinking can be applied in different fields.",
    "Discuss the concept of decomposition in computational thinking. Why is it important? ",
    "Explain pattern recognition in the context of computational thinking. How does identifying patterns help with problem-solving?",
    "What is an abstraction in computational thinking? Discuss its importance and provide examples of how abstractions can be used to simplify complex problems.",
    "Describe what an algorithm is and explain its role in computational thinking. Provide a detailed example of an algorithm for solving a specific problem, and draw the corresponding flowchart.",
    "Compare and contrast flowcharts and pseudocode as methods for algorithm design. Discuss the advantages and disadvantages of each method, and provide examples where one might be preferred over the other.",
    "Explain the concept of a dry run in the context of both flowcharts and pseudocode. How does performing a dry run help in validating the correctness of an algorithm?",
    "What is LARP? Discuss its importance in learning and practicing algorithms.",
    "How does LARP enhance the understanding and application of computational thinking principles? Provide a scenario where LARP can be used to improve an algorithm."

    ],
    mcqs: [
     {
        question: "Which of the following best defines computational thinking?",
        options: ["(A) A method of solving problems using mathematical calculations only", "(B) A problem-solving approach that employs systematic, algorithmic and logical thinking", "(C) A technique used exclusively in computer programming", "(D) An approach that ignores real-world applications"],
    },
    {
        question: "Why is problems decomposition important in computational thinking?",
        options: ["(A) It simplifies problems by breaking them down into smaller, more manageable parts", "(B) It eliminates problems by adding more details", "(C) It eliminates the need for problem solving", "(D) It is only useful for simple problems"],
    },
    {
        question: "Pattern recognition involves",
        options: ["(A) Finding and using similarities within problems", "(B) Ignoring repetitive elements", "(C) Breaking problems into sir pieces", "(D) Finding detailed algorithms"],
    },
    {
        question: "Which term rerm refer to offer to the process of ignoring the details to focus on the main idea?",
        options: ["(A) Decomposition", "(B) Pattern recognition", "(C) Abstraction", "(D) Algorithm design"],
    },
    {
        question: "Which of the following is a principle of computational thinking?",
        options: ["(A) Finding and using similarities within problems", "(B) Ignoring repetitive elements", "(C) Breaking problems into sir pieces", "(D) Finding detailed algorithms"],
    },
    {
        question: "Which of the following is the first step in problem-solving according to computational thinking?",
        options: ["(A) Writing the solution", "(B) Understanding the problem", "(C) Designing a flowchart", "(D) Selecting a solution"],
    },
    {
        question: "Flowcharts are used to:",
        options: ["(A) Code a program", "(B) Represent algorithms graphically", "(C) Solve mathematical equations", "(D) Identify patterns"],
    },
    {
        question: "Pseudocode is:",
        options: ["(A) A type of flowchart", "(B) A high-level description of an algorithm using plain language", "(C) A programming language", "(D) A debugging tool"],
    },
    {
        question: "Dry running a flowchart involves",
        options: ["(A) Writing the code in a programming language", "(B) Testing the flowchart with sample data", "(C) A programming language", "(D) A debugging tool"],
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
       " Discuss the fuundamental difference between HTML, CSS and JavaScript in the context of web development.",
    " Explain the process of setting up a development environment for web development. By discussing the necessary software and tools.",
    " Create a basic HTML page that includes a header, a paragraph, an image, and a hyperlink.",
    " How do you style a table using CSS? Create a sample table and apply styles to it.",
    " Describe the different CSS selectors and provides examples of each.",
    " Explain the process of creating a responsive web page using CSS with the help of examples and explanations.",
    " Write a JavaScript function that changes the background color of a web page when a button is clicked. Provide the complete code and explain how it works.",
    " How do you add animations and transitions using CSS? provide examples and explain the process involved."

    ],
    mcqs: [
     {
        question: "Which of the following is not a correct HTML tag?",
        options: ["(A) <html>", "(B) <span>", "(C) <head>", "(D) <footer>"],
    },
    {
        question: "What does CSS stand for?",
        options: ["(A) Cascading Style Sheets", "(B) Computer Style Sheets", "(C) Creative Style Sheets", "(D) Colorful Style sheets"],
    },
    {
        question: "Which of the following tag is used to create a hyperlink in HTML?",
        options: ["(A) <a>", "(B) <link>", "(C) <href>", "(D) <nav>"],
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["(A) Color", "(B) Background-color", "(C) Bgcolor", "(D) Background"],
    },
    {
        question: "Which HTML attribute is used to define styles?",
        options: ["(A) Class", "(B) Style", "(C) Font", "(D) Values"],
    },
    {
        question: "Which of the following is the correct syntax for a CSS rule?",
        options: ["(A) Selector {property:value;}", "(B) Selector {property=value;}", "(C) {property:value;} Selector", "(D) Selector {property value}"],
    },
    {
        question: "In JavaScript, which mark up is used for comments?",
        options: ["(A) /**/", "(B) //", "(C) --", "(D) **"],
    },
    {
        question: "How do you include JavaScript in an HTML document?",
        options: ["(A) <script src='script.js'>", "(B) <java src='script.js'>", "(C) <script src='script.js'> </script>", "(D) <code>"],
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
  "Explain the differences between qualitative and quantitative data. provide examples of each type.",
    "Describe the process of conducting a survey to gather data about students favorite extracurricular activities.",
    "Compare and continuous and discrete data. Use examples to show how each type of data might be use used in a school settings, such as in measuring student performance or tracking attendance.",
    "Analyze the benefits and challenges of using digital tools like Google Forms for data collection.",
    "Imagine you are tasked with organizing a school event and need to collect data on student preferences for activities and refreshments.",
    "Explain the roles of tables and charts in data analysis. Provide an example of how you could use a table or chart to present data about students grades in different subjects.",
    "Describe how data is everywhere now-a-data. How would you collect, store and analyse this type of data? Discuss the tools and techniques you would use to ensure the data is accurately interpreted.",
    "Explain the concept of data visualization. How does it help in understanding complex data? Provide examples of different types of visualization and their applications and example scenarios.",
    "Discuss the importance and benefits of data visualization. Why is it essential for businesses and decision-makers to use charts, graphs and dashboards?",
    "Differentiate between nominal, ordinal, discrete and continuous data. For each type, describe and provide a specific technique and provide a specific example of how this technique can be used to represent that type of data effectively."

    ],
    mcqs: [
     
      {
        question: "Which type of data represents categories or labels without any order?",
        options: ["(A) Quantitative data", "(B) Qualitative data", "(C) Discrete data", "(D) Continuous data"],
    },
    {
        question: "Which of the following is an example of qualitative data?",
        options: ["(A) Number of students in a class", "(B) Height of a person", "(C) Favorite color", "(D) Temperature in Celsius"],
    },
    {
        question: "Which type of chart is best suited for showing the distribution of a single variable?",
        options: ["(A) Bar chart", "(B) Line chart", "(C) Pie chart", "(D) Histogram"],
    },
    {
        question: "What is the primary purpose of data visualization?",
        options: ["(A) To store data efficiently", "(B) To make data more understandable and insightful", "(C) To perform complex calculations", "(D) To collect new data"],
    },
    {
        question: "Which of the following is a common tool for collecting survey data online?",
        options: ["(A) Microsoft Word", "(B) Google Forms", "(C) Adobe Photoshop", "(D) VLC Media Player"],
    },
    {
        question: "What is the term for data that can only take on specific, distinct values?",
        options: ["(A) Continuous data", "(B) Nominal data", "(C) Discrete data", "(D) Ordinal data"],
    },
    {
        question: "Which type of data represents measurements and can take any value within a range?",
        options: ["(A) Discrete data", "(B) Qualitative data", "(C) Nominal data", "(D) Continuous data"],
    },
    {
        question: "When collecting data about student grades, which type of data would 'A+', 'B', 'C' be considered?",
        options: ["(A) Nominal data", "(B) Ordinal data", "(C) Discrete data", "(D) Continuous data"],
    },
    {
        question: "Which type of graph is most suitable for showing trends over time?",
        options: ["(A) Bar chart", "(B) Pie chart", "(C) Line chart", "(D) Scatter plot"],
    },
    {
        question: "Which of the following is a benefit of using dashboards for data visualization?",
        options: ["(A) They are easy to create without any tools", "(B) They provide real-time insights at a glance", "(C) They can only display a single type of data", "(D) They are primarily used for data entry"],
    },
    ],
  },


  
  {
    class: 9,
    subject: "Computer",
    chapterNumber: 10,
    chapterName: "Emerging Technologies in Computer Science",
    shortQuestions: [
 "Define Artificial Intelligence (AI).",
    "What is the historical context and evolution AI?",
    "Provide two examples of AI applications in healthcare.",
    "Explain the role of AI techniques in advancing machine learning models.",
    "Define the internet of things (IoT).",
    "Define the significance of IoT in connecting devices and systems.",
    "What are the potential risks associated with AI and IoT?",
    "Discuss the social impact of AI and IoT on daily life.",
    "Explain the concept of algorithmic bias.",
    "Outline the importance of ethical considerations in AI and IoT."

    ],
    longQuestions: [
      "Discuss the various applications of AI in the field of education. Provide specific examples and explain how AI can enhance the educational experience.",
    "Differentiate between explainable (whitebox) and unexplainable (blackbox) AI models.",
    "Describe the the specific of an IoT system. Explain how these components work together to enable IoT applications.",
    "Explore the applications of IoT in the transportation domain.",
    "Analyze the potential privacy concerns associated with IoT deployments.",
    "Evaluate the impact of AI and IoT on the job market and work environments.",
    "Explain the role of policy and regulatory framework in addressing the challenges of AI and IoT. Provide examples of existing framework and discuss their effectiveness.",
    "Describe the concept of algorithmic bias and its implications in AI-powered decision-making processes. Suggest strategies to mitigate the risks of algorithmic bias.",
    "Develop a set of ethical principles and guidelines for the responsible development and deployment of AI and IoT technologies."

    ],

    mcqs: [
     {
        question: "Which of the following is not a subfield of AI?",
        options: ["(A) Machine learning", "(B) Natural language processing", "(C) Computer vision", "(D) Robotics"],
    },
    {
        question: "Which of these AI algorithms is considered an explainable (whitebox) model?",
        options: ["(A) Neural networks", "(B) Decision trees", "(C) Random forests", "(D) Convolutional neural networks"],
    },
    {
        question: "Which of these is a security concern in IoT deployments?",
        options: ["(A) Device vulnerability", "(B) Data privacy", "(C) Lack of standardization", "(D) All of the above"],
    },
    {
        question: "Which of the following is an application of AI in healthcare?",
        options: ["(A) Personalized drug development", "(B) Automated diagnosis", "(C) Remote patient monitoring", "(D) All of the above"],
    },
    {
        question: "What is the primary purpose of using AI techniques in machine learning models?",
        options: ["(A) To improve accuracy", "(B) To enhance interpretability", "(C) To reduce computational complexity", "(D) To increase training time"],
    },
    {
        question: "What is the key difference between explainable (whitebox) and unexplainable (blackbox) AI models?",
        options: ["(A) The complexity of the model", "(B) The ability to understand the decision-making process", "(C) The performance of the model", "(D) The training data used"],
    },
    {
        question: "Which of the following is an application of IoT in the transportation domain?",
        options: ["(A) Smart traffic management", "(B) Vehicle-to-Vehicle (V2V) communication", "(C) Predictive maintenance of communication vehicles", "(D) All of the above"],
    },
    {
        question: "Which of these is a potential impact of AI and IoT on the job market?",
        options: ["(A) Job displacement due to automation", "(B) Increased demand for specialized skills", "(C) Transformation of job roles and responsibilities", "(D) All of the above"],
    },
    {
        question: "What is the key concern associated with algorithmic bias in AI-powered decision-making processes?",
        options: ["(A) Lack of transparency", "(B) Perpetuation of reduced accuracy existing societal bases", "(C) Reduced accuracy of the model", "(D) All of the above"],
    },
    {
        question: "Which of the following is an ethical principle that should be considered in the development and deployment of AI and IoT technologies?",
        options: ["(A) Transparency and accountability", "(B) Respect for privacy and data rights", "(C) Fairness and non-discrimination", "(D) All of the above"],
    },
    ],
  },

  
  {
    class: 9,
    subject: "Computer",
    chapterNumber: 11,
    chapterName: "Etical, Social, and Legal Concern",
    shortQuestions: [
       "What is the importance of using computers safely and responsibly?",
    "How does choosing the right hardware and software affect your computer usage?",
    "Why is important to use antivirus software on your computer?",
    "What are some examples of good practices when selecting hardware and software?",
    "How can choosing compatible hardware and software enhance your computer experience?",
    "Why should you create strong, unique passwords for your accounts?",
    "What is the purpose of regular software updates?",
    "How can you protect yourself from harmful links and downloads?",
    "What is two-factors authentication (2FA), and why is it useful?",
    "Why is it a good idea to avoid using public Wi-Fi for sensitive transactions?",
    "How can you verify if an email or message is a scam?",
    "Why is it important to be careful about what you share on social media?",
    "Why should you receive an email from an unknown sender asking for personal information?",
    "What is the purpose of privacy laws regarding your personal information?",
    "How do privacy law protects your information unauthorized to your data?",
    "What is the difference between copyright, trademarks, and paten?",
    "Why is it important to respect intellectual property rights?",
    "What is software piracy, and why is it harmful?",
    "How can you identify sources when researching online reliability?",
    "What is one way to protect your privacy during online research?",
    "What are some signs that you might developing an internet addiction?"

    ],
    longQuestions: [
        "Discuss the importance of responsible computer usage in today's digital world. Explain how selecting the right hardware and software can affect safety, efficiency and compatibility in computer use?",
    "Describe the steps you should take to ensure the safe operation of digital platform and devices.",
    "Explain the concept of data ethics and its importance in handling personal and sensitive information. Discuss the principles of transparency, respect for privacy and accountability.",
    "Analyze the impact of piracy laws on protecting personal information in the digital age. How do laws like the personal data protection bill in Pakistan safeguard user data?",
    "Discuss the ethical and legal responsibilities related to intellectual property rights. What are the consequences of violating these rights, such as through software or piracy or unauthorized use of copyrighted material?",
    "Describe the concept of internet addiction and its potential impact on individuals. How can recognizing the signs of addiction, setting time limits, and finding offline activities help promote balance internet usage?",
    "Outline effective techniques for conducting safe and credible online research. How can users evaluate the reliability of sources and avoid privacy risks during their research?",
    "Discuss the concept of internet addiction and its potential impact on individuals. How can recognizing the signs of addiction, setting time limits, and finding offline activities help promote balance internet usage?"

    ],

    mcqs: [
      {
        question: " Why is it important to use computers safely and responsibly?",
        options: ["(A) To ensure we can use them more frequently", "(B) To protect out personal information and make wise choices about hardware and software", "(C) To make the computer run faster", "(D) To avoid paying for software"],
    },
    {
        question: " What does \"responsible computer usage\" include?",
        options: ["(A) Choosing the most expensive hardware", "(B) Sharing your passwords with friends", "(C) Being cautious about what you share online and protecting yourself", "(D) Ignoring software updates"],
    },
    {
        question: " What should you check to ensure hardware and software compatibility?",
        options: ["(A) The color of the hardware", "(B) The system requirements on software packages and match them with your computer's specifications", "(C) The price of the hardware", "(D) The brand of the hardware"],
    },
    {
        question: " Why is it important to use antivirus software on your computer?",
        options: ["(A) It makes your computer run faster", "(B) It protects against malware and viruses", "(C) It allows you to download more software", "(D) It enhances your graphics quality"],
    },
    {
        question: " What are some examples of good practices when selecting hardware and software?",
        options: ["(A) Choosing the cheapest options available", "(B) Considering your needs and ensuring compatibility", "(C) Relying solely on popular brands", "(D) Purchasing software from unofficial sources"],
    },
    {
        question: " How can choosing compatible hardware and software enhance your computer experience?",
        options: ["(A) It ensures the system runs smoothly and efficiently", "(B) It allows for more customization options", "(C) It makes the computer more portable", "(D) It reduces the need for internet access"],
    },
    {
        question: " Why should you create strong, unique passwords for your accounts?",
        options: ["(A) To make them easier to remember", "(B) To prevent unauthorized access and protect your data", "(C) To speed up login times", "(D) To share them with friends and family"],
    },
    {
        question: " What is an important aspect of responsible social media posting?",
        options: ["(A) Sharing personal information like your home address", "(B) Posting photos without considering privacy setting", "(C) Being respectful and avoiding sharing sensitive information publicly", "(D) Ignoring privacy setting"],
    },
    {
        question: " What should you do if you receive an email from an unknown sender asking for personal information?",
        options: ["(A) Provide the information requested", "(B) Forward the email to your friends", "(C) Ignore or delete the email", "(D) Open the email and click on any links"],
    },
    {
        question: " Why is it important to regularly review your account activity?",
        options: ["(A) To update your contact information", "(B) To look for unusual and ensure your account are secure", "(C) To check the number of friends you have", "(D) To download new applications"],
    },
    {
        question: " What is the purpose of privacy setting on digital platforms?",
        options: ["(A) To make your posts public", "(B) To control who can see your information and interact with you online", "(C) To increase the number of followers", "(D) To automatically share your information"],
    },
    {
        question: " What should you do to ensure data security?",
        options: ["(A) Use the same passwords for all account", "(B) Share your passwords with friends", "(C) Use strong, unique passwords and enable two-factor authentication", "(D) Avoid using any security measures"],
    },
    {
        question: " What is a key aspect of data ethics?",
        options: ["(A) Using data in any way you like", "(B) Transparency, respect for privacy, and accountability in data usage", "(C) Collecting as much data as possible", "(D) Ignoring software regularly"],
    },
    {
        question: " What is software privacy?",
        options: ["(A) Sharing software legally with friends", "(B) The illegal copying, distribution, or use of software", "(C) Buying software from an official source", "(D) Updating software regularly"],
    },
    {
        question: " How can you verify the credibility of information found online?",
        options: ["(A) By checking the number of ads on the website", "(B) By using multiple reputable sources and checking the author's credentials", "(C) By looking at the website's design", "(D) By the website's popularity"],
    },
    ],
  },


  
  {
    class: 9,
    subject: "Computer",
    chapterNumber: 12,
    chapterName: "Enterpreneurship in Digital Age",
    shortQuestions: [
       "What is the meaning of word entrepreneur and why is its origin?",
    "How do digital technology help entrepreneurs reach a global audience?",
    "What is an e-commerce platform, and why is it important for business?",
    "Explain the importance of market analysis in a business plan. Give an example relevant to a local business in Pakistan.",
    "What is the main purpose of using design thinking in creative problem-solving?",
    "How can business contribute to environmental sustainability according to the sustainable development goals?",
    "What are revenue models, and why are they essential components of a business plan?",
    "How can business contribute to environmental sustainability according to the sustainable development goals?",

    ],
    longQuestions: [

       "Explain why entrepreneurship important for economic growth and innovation. Provide examples from the text to support your answer.",
    "Explain how market research tools, online marketing tools, and e-commerce platforms can work together to help a business succeed in the digital world.",
    "Explain the design thinking process and how it can be applied to create a new product or service. Provide an example of how design thinking could be used to help farmer in rural Pakistan.",
    "Imagine you want to start a small online bookstore catering to students in your area. Develop a comprehensive business plan for your bookstore, including: (a) a market analysis focusing on student reading habits and competition. (b) A revenue model outlining how you will generate income. (c) Digital marketing strategies you will use to promote your bookstore online.",
    "Ensure your answer are detailed and include practical examples relevant to starting your bookstore in Pakistan.",
    "Choose a local business in Pakistan and discuss how it aligns with one or more sustainable development goals. Include its impact on social, environmental, and economic sustainability."

    ],

    mcqs: [
     {
        question: " What is entrepreneurship?",
        options: ["(A) The process of starting a new business or organization", "(B) The process of buying and selling computers", "(C) The process of working for a large company", "(D) The process of creating a marketing campaign"],
    },
    {
        question: " What is the key characteristic of entrepreneurs?",
        options: ["(A) Avoiding risks", "(B) Seeking job security", "(C) Innovation", "(D) Following established methods"],
    },
    {
        question: " What is an example of a digital technology used by modern entrepreneurs?",
        options: ["(A) Newspaper advertisements", "(B) Door-to-Door sales", "(C) Mobile apps", "(D) Television commercials"],
    },
    {
        question: " Which of the following is an example of a digital tool for creating and editing documents?",
        options: ["(A) SurveyMonkey", "(B) Google Docs", "(C) SEMrush", "(D) Zendesk"],
    },
    {
        question: " Which tool is commonly used for optimizing website content for search engines?",
        options: ["(A) Hootsuite", "(B) Yoast SEO", "(C) Shopify", "(D) PayPal"],
    },
    {
        question: " Which of the following is not a technique for identifying market needs?",
        options: ["(A) Market research", "(B) Observation", "(C) Surveys and questionnaires", "(D) Brainstorming"],
    },
    {
        question: " What is the first step in the design thinking process?",
        options: ["(A) Prototyping", "(B) Testing", "(C) Empathizing", "(D) Defining"],
    },
    {
        question: " What is the primary purpose of creating a business plan?",
        options: ["(A) To attract investors for growth", "(B) To outline strategies for growth", "(C) To study market trends", "(D) To implement digital marketing campaigns"],
    },
    {
        question: " What does market analysis involve?",
        options: ["(A) Calculating revenue", "(B) Researching competitors and understanding customer need", "(C) Developing pricing strategies", "(D) Implementing digital marketing campaigns"],
    },
    {
        question: " Which sustainable development goal (SDG) focuses on affordable and clean energy?",
        options: ["(A) SDG 5", "(B) SDG 7", "(C) SDG 12", "(D) SDG 17"],
    },
    ],
  },





  
  
  {
    class: 10,
    subject: "Computer",
    chapterNumber: 1,
    chapterName: "Introduction to Programming",
    shortQuestions: [
  "Define IDE.",
    "Define compiler.",
    "Define reserved words.",
    "Define main section of a program.",
    "Define char data type."

    ],
    longQuestions: [
       "Why do we need a programming environment?",
    "Describe the purpose of a compiler in a programming environment.",
    "Define reserved words.",
    "Define main section of a program.",
    "Define char data type.",
    "Write the steps to create a C program file in the IDE of your lab computer.",
    "Why do we use comments in programming?",
    "Write down the rules for naming variables.",
    "Write a note code char and int data type.",
    "How can we declare and initialize a variable?"

    ],

    mcqs: [
 {
        question: " A software that facilitates programmers in writing computer programs is known as",
        options: ["(A) A compiler", "(B) An editor", "(C) An IDE", "(D) A debugger"],
    },
    {
        question: " ___ is a software that is responsible for the conversion of program files ile files in to machine understandable and executable code.",
        options: ["(A) A compiler", "(B) An editor", "(C) An IDE", "(D) A debugger"],
    },
    {
        question: " Every programming language has some primitive building blocks and follows some grammar rules known as its ...... .",
        options: ["(A) Syntax", "(B) Programming rules", "(C) Building blocks", "(D) Semantic rules"],
    },
    {
        question: " A list of words that are predefined and must not be used by the programmer to name his own variables are known as ...... .",
        options: ["(A) Auto words", "(B) Reserved words", "(C) Restricted words", "(D) Predefined words"],
    },
    {
        question: " include statements are written in ...... section.",
        options: ["(A) header", "(B) main", "(C) Comments", "(D) print"],
    },
    {
        question: " ....... are .... added are_ added in the source code to further explain the techniques and algorithms used by the programmer.",
        options: ["(A) Messages", "(B) Hints", "(C) Comments", "(D) Explanations"],
    },
    {
        question: " ....... are the values that do not change during the whole execution of program.",
        options: ["(A) Variables", "(B) Constants", "(C) Strings", "(D) Comments"],
    },
    {
        question: " A float uses ...... bytes of memory.",
        options: ["(A) 2", "(B) 4", "(C) 6", "(D) 8"],
    },
    {
        question: " For intializing a variable we use ...... operator.",
        options: ["(A) ->", "(B) =", "(C) == ", "(D) !="],
    },
    {
        question: " ...... can be thought as a container store constants.",
        options: ["(A) box", "(B) C", "(C) Variable", "(D) Collection"],
    },
    ],

  },

    {
    class: 10,
    subject: "Computer",
    chapterNumber: 2,
    chapterName: "User Interface",
    shortQuestions: [
 "Define statement terminator.",
    "Define format specifier.",
    "Define escape sequence.",
    "Define scanf.",
    "Define modulus operator."

    ],
    longQuestions: [
       "What is the difference between scanf and getch() function?",
    "Why format specifiers are important to be specified in I/O operations?",
    "What are escape sequences? Why do we need them?",
    "Which operators are use for arithmetic operations?",
    "What are relational operators? Describe with an example.",
    "What are logical operators? Describe with an example.",
    "What is the difference between unary operators and binary operators?",
    "What is the difference between == operator and = operator?",
    "What is the major and precedence of operators?",
    "Which operator has the highest precedence in C language?",

    ],

    mcqs: [
 {
        question: " printf is used to print ...... type of data.",
        options: ["(A) int", "(B) float", "(C) char", "(D) All of them"],
    },
    {
        question: " scanf is a ...... in C programming.",
        options: ["(A) Keyword", "(B) Library", "(C) Function", "(D) None of them"],
    },
    {
        question: " getch() is used to take ...... as input from user.",
        options: ["(A) int", "(B) float", "(C) char", "(D) All of them"],
    },
    {
        question: " Let the following part of code, what will be the value of variable a after execution. int a=4; float b=2.2; a=a+b;",
        options: ["(A) 8.8", "(B) 8", "(C) 8.0", "(D) 8.2"],
    },
    {
        question: " Which of the following is a valid line of code?",
        options: ["(A) int=20;", "(B) Grade='A';", "(C) int=this is a valid line.", "(D) None of them"],
    },
    {
        question: " Which operator has the highest precedence among the following?",
        options: ["(A) /", "(B) =", "(C) !", "(D) Logical operator"],
    },
    {
        question: " Which of the following is not a type of operator?",
        options: ["(A) Arithmetic operator", "(B) Relational operator", "(C) Factorial", "(D) Logical operator"],
    },
    {
        question: " The operator '%' is used to calculate ...... .",
        options: ["(A) Percentage", "(B) Remainder", "(C) Square", "(D) Cube"],
    },
    {
        question: " Which of the following is a valid character?",
        options: ["(A) 'a'", "(B) 'ab'", "(C) \"a\"", "(D) '12'"],
    },
    {
        question: " What is true about C language?",
        options: ["(A) C is not case sensitive language", "(B) Keywords can be used as variables", "(C) All logical operators are binary operators", "(D) None of them"],
    },
    ],
  },

    {
    class: 10,
    subject: "Computer",
    chapterNumber: 3,
    chapterName: "Conditional Logic",
    shortQuestions: [
 "Define control statements.",
    "Define selection statements.",
    "Define sequential control.",
    "Define condition.",
    "Define nested selection structures."

    ],
    longQuestions: [
        "Why do we need selection statements?",
    "Differentiate between sequential and selection statements.",
    "Differentiate between if statement and if else statement with an example.",
    "What is the use of nested selection structures?",
    "Write the structure of if statement with brief description."

    ],

    mcqs: [
 {
        question: " Conditional logic helps in .......... .",
        options: ["(A) Decisions", "(B) Iterations", "(C) Traversing", "(D) All"],
    },
    {
        question: " .......... statements describe the sequence in which statements of the program should be executed.",
        options: ["(A) Loop", "(B) Conditional", "(C) Control", "(D) All"],
    },
    {
        question: " If in statement, what happens if condition is false?",
        options: ["(A) Program crashes", "(B) Index out of bound error", "(C) Further code executes", "(D) Compiler asks to change condition"],
    },
    {
        question: " Which if the following statements will execute? int a=5; if (a<10) a++; else if (a=4) a--;",
        options: ["(A) a++", "(B) a--", "(C) Both A & B", "(D) None"],
    },
    {
        question: " Which if the following is the condition to check a is a factor of c?",
        options: ["(A) a%c==0", "(B) c%a==0", "(C) a%c!=0", "(D) a++c++==0"],
    },
    {
        question: " A condition can be any ...... expression.",
        options: ["(A) Arithmetic", "(B) Relational", "(C) Logical", "(D) Arithmetic, relational or logical"],
    },
    {
        question: " An if statement inside another if statement is called .... structure.",
        options: ["(A) Nested", "(B) boxed", "(C) repeated", "(D) decomposed"],
    },
    {
        question: " A set of multiple instructions enclosed in braces is called a .... .",
        options: ["(A) block", "(B) list", "(C) job", "(D) box"],
    },
    ],
  },

    {
    class: 10,
    subject: "Computer",
    chapterNumber: 4,
    chapterName: "Data and Repitation",
    shortQuestions: [
      "Define data structure",
      "Define array",
      "Define array initialization",
      "Define loop structure",
      "Define nested loops"
    ],
    longQuestions: [
       "What is the advantage of initializing an array at the time of declaration?",
    "How can you declare an array? Briefly describe the three parts of array declaration.",
    "Is loop a data structure? Justify your answer.",
    "What is the use of nested loops?",
    "Describe the structure of a for loop."

    ],

    mcqs: [
  {
        question: " An array is a ...... structure.",
        options: ["(A) Loop", "(B) Control", "(C) Data", "(D) Conditional"],
    },
    {
        question: " Array elements are stored at ...... memory locations.",
        options: ["(A) Divided", "(B) Scattered", "(C) Contiguous", "(D) None"],
    },
    {
        question: " If the size of an array is 100, the range of indexes will be ........",
        options: ["(A) 0-99", "(B) 0-100", "(C) 1-100", "(D) 2-2012"],
    },
    {
        question: " ........ structure allows repetitions of a set of instructions.",
        options: ["(A) Loop", "(B) Data", "(C) Control", "(D) Array"],
    },
    {
        question: " ........ is the unique identifier, used to refer to the array.",
        options: ["(A) Loop", "(B) Array name", "(C) Data type", "(D) Control"],
    },
    {
        question: " Array can be initialized ........ declaration.",
        options: ["(A) At the time of", "(B) After", "(C) Before", "(D) Both A & B"],
    },
    {
        question: " Using loops inside loops is called ........ loops.",
        options: ["(A) For", "(B) While", "(C) On-while", "(D) Nested"],
    },
    {
        question: " ........ part of loop is executed first.",
        options: ["(A) Initialization", "(B) Condition", "(C) Increment / decrement", "(D) Body"],
    },
    {
        question: " ........ make it easy to read and write values in array.",
        options: ["(A) Loops", "(B) Conditions", "(C) Expressions", "(D) Functions"],
    },
    {
        question: " To initialize the array in a single statement, initialize it ........ declaration.",
        options: ["(A) at the time of", "(B) before", "(C) after", "(D) both A & B"],
    },
    ],
  },

    {
    class: 10,
    subject: "Computer",
    chapterNumber: 5,
    chapterName: "Functions",
    shortQuestions: [
       "Define functions",
       "Define built-in functions",
       "Define functions parameters",
       "Define resusabiltiy",
       "Define calling a function"

    ],
    longQuestions: [
        "What is the difference between arguments and parameters? Give an example.",
    "Enlist the parts of a function definition.",
    "Is it necessary to use compatible data types in function definition and function call? Justify your answer with an example.",
    "Describe the advantages of using functions.",
    "What do you know about the return keyword?"

    ],

    mcqs: [
   {
        question: " Functions could be built-in or ...... .",
        options: ["(A) Admin defined", "(B) Server defined", "(C) User defined", "(D) Both A & C"],
    },
    {
        question: " The functions which are available in C standard library are called ...... .",
        options: ["(A) User defined", "(B) Built-in", "(C) Recursive", "(D) Repetitive"],
    },
    {
        question: " The values passed to a function are called ...... .",
        options: ["(A) Arguments", "(B) Parameters", "(C) Return values", "(D) Arrays"],
    },
    {
        question: " char city[10]; in this function 'char' is ...... .",
        options: ["(A) Body", "(B) Return type", "(C) Array", "(D) Arguments"],
    },
    {
        question: " The advantage of using functions are ...... .",
        options: ["(A) Readability", "(B) Reusability", "(C) Easy debugging", "(D) All"],
    },
    {
        question: " If there three return statements in the function body, ...... of them will be executed.",
        options: ["(A) All", "(B) One", "(C) First and last", "(D) None"],
    },
    {
        question: " Readability helps to ...... the code.",
        options: ["(A) Understand", "(B) Modify", "(C) Debug", "(D) All"],
    },
    {
        question: " ...... means to transfer the control to another function.",
        options: ["(A) Calling", "(B) Defining", "(C) Re-writing", "(D) Including"],
    },
    ],
  },



  //? Physcis
   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 1,
    chapterName: "Physical Quantities and Measurment",
    shortQuestions: [
  "Can a non-physical quantity be measures? If yes, then how?",
    "What is measurement? Name its two parts.",
    "Why do we need a standard unit for measurements?",
    "Write the name of 3 base quantities and 3 derived quantities.",
    "Which SI unit will you use to express the height of your desk?",
    "Write the name and symbols of all SI base units.",
    "Why prefixes are used? Name three sub-multiples and three multiple prefixes with their symbols.",
    "What is meant by: (a) 5 pm (b) 15 ns",
    "What is meant by: (a) 6 $\\mu$m (b) 5 fs",
    "For a what purpose, a Vernier Callipers is used?",
    "Write the name of two main parts of Vernier Calliper.",
    "How is least count found?",
    "What is meant by zero error?",
    "State least count and Vernier scale reading as shown in the figure and hence, find the length. (image)",
    "Which reading out of A,B and C shows the correct length and why?"

    ],
    longQuestions: [
       "What is meant by base and derived quantities? Give the name and symbols of SI base units.",
    "Give three examples of derived unit. Is SI? How are they derived from base units? Describe briefly.",
    "State the similarities and differences between Vernier Callipers and micrometer screw gauge.",
    "Identify and explain the reasons for human errors, random errors and systematic errors in experiments.",
    "Differentiate between precision and accuracy of a measurement with examples.",
    "Calculate the number second in (a) a day (b) week (c) month and star. State your answer using SI prefixes.",
    "State the answer of the following in scientific notation. Calculate the number of the second in (a) day (b) (c) week (d) month.",
    "Solve the following addition or subtraction. State your answer in scientific notation. (a) $4 \\times 10^4 \\text{ kg} + 3 \\times 10^3 \\text{ kg}$ (b) $5.4 \\times 10^3 \\text{ m} - 3.2 \\times 10^2 \\text{ m}$",
    "Solve the following multiplication or division. State your answer in scientific notation. (a) $(5 \\times 10^4 \\text{ m}) \\times (3 \\times 10^{-2} \\text{ m})$ (b) $\\frac{6 \\times 10^3 \\text{ kg}}{2 \\times 10^{-2} \\text{ kg}}$",
    "State the following and state your answer in scientific notation. (a) $\\frac{3 \\times 10^4 \\text{ kg} \\times (4.0 \\text{ km})}{5 \\times 10^2 \\text{ kg}}$",
    "State the number of significant digits in each measurement. (a) 0.0045 m (b) 2.047 m (c) 3.40 $ \\times 10^4 \\text{ g}$ (d) 3.420 $ \\times 10^2 \\text{ m}$",
    "Write in the scientific notation. (a) 0.035 m (b) $200.4 \\times 10^2 \\text{ km}$",
    "Write using correct prefixes. (a) $1.0 \\times 10^4 \\text{ cm}$ (b) $380 \\times 10^4 \\text{ g}$ (c) $45 \\times 10^2 \\text{ s}$",
    "A light year is a unit of distance used in Astronomy. It is the distance covered by light in one year. Taking the speed of light as $3 \\times 10^8 \\text{ m/s}$, calculate the distance.",
    "Express the density of mercury given as $13.6 \\text{ g} \\cdot \\text{cm}^{-3}$ in $\\text{kg} \\cdot \\text{m}^{-3}$"

    ],

    mcqs: [
       {
        question: " The instrument that is most suitable for measuring the thickness of a few sheets of cardboard is a:",
        options: ["(A) Metre rule", "(B) Measuring tape", "(C) Vernier Callipers", "(D) Micrometer screw gauge"],
    },
    {
        question: " One femtometre is equal to:",
        options: ["(A) $10^{-6}$ m", "(B) $10^{-9}$ m", "(C) $10^{-15}$ m", "(D) $10^{-12}$ m"],
    },
    {
        question: " A light year is a unit of:",
        options: ["(A) Light", "(B) Distance", "(C) Colour", "(D) Temperature"],
    },
    {
        question: " Which one is a non-physical quantity?",
        options: ["(A) Light", "(B) Density", "(C) Colour", "(D) Temperature"],
    },
    {
        question: " When using a measuring cylinder, one precaution to take is to:",
        options: ["(A) Check for the zero error", "(B) Look at the meniscus from below the level of the water surface", "(C) Take several readings by looking from more than one direction", "(D) Position the eye in line with the bottom of the meniscus"],
    },
    {
        question: " Volume water consumed by per day is estimated in:",
        options: ["(A) Millilitre", "(B) Litre", "(C) Kilogram", "(D) Cubic metre"],
    },
    {
        question: " A displacement can is used to measure:",
        options: ["(A) Mass of a liquid", "(B) Mass of a solid", "(C) Volume of a liquid", "(D) Volume of a solid"],
    },
    {
        question: " Two rods with lengths 12.321 cm and 10.3 cm are placed side by side, the difference in their lengths is:",
        options: ["(A) 2.02 cm", "(B) 2.0 cm", "(C) 2.021 cm", "(D) 2.021 cm"],
    },
    {
        question: " Four students measure the diameter of a cylinder with vernier callipers. Which of the following reading is correct?",
        options: ["(A) 3.4 cm", "(B) 3.475 cm", "(C) 3.47 cm", "(D) 3.5 cm"],
    },
    {
        question: " Which of the following are measures likely to represent the thickness of a sheet of this book?",
        options: ["(A) $6 \\times 10^{-2}$ m", "(B) $6 \\times 10^{-5}$ m", "(C) $1 \\times 10^{-2}$ m", "(D) $4 \\times 10^{-2}$ m"],
    },
    {
        question: " In a vernier callipers lens smallest division of the vernier scale to nine smallest division of the main scale in half millimetre, the Vernier constant is equal to:",
        options: ["(A) 0.5 mm", "(B) 0.1 mm", "(C) 0.05 mm", "(D) 0.001 mm"],
    },
    ],
  },
   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 2,
    chapterName: "Kinematics",
    shortQuestions: [
  "Define scalar and vector quantities.",
    "Give 5 examples each for scalar and vector quantities.",
    "State head-to-tail rule for addition of vectors.",
    "What are distance-time graph and speed-time graph?",
    "Falling objects near the Earth have the same constant acceleration. Does this imply that a heavier object will fall faster than a lighter object?",
    "The vector quantities are sometimes written in scalar notation (not bold face). How is the direction indicated?",
    "A body is moving with uniform speed. Will its velocity be uniform? Give reason.",
    "Is it possible for a body to have acceleration? When moving with (i) Constant velocity (ii) Constant speed."

    ],
    longQuestions: [
       "How a vector can be represented graphically? Give example.",
    "Differentiate between (i) rest and motion (ii) speed and velocity.",
    "Describe different types of motion. Also give examples.",
    "What do gradients of distance-time graph and speed-time graph represent? Explain it by drawing diagrams.",
    "Prove the area under speed-time graph is equal to the distance covered by an object.",
    "How equation of motion can be applied to the bodies moving under the action of gravity?",
    "Draw the representative lines of the following vectors: (a) A velocity of $400 \\text{ m s}^{-1}$ making an angle of $60^{\\circ}$ with x-axis. (b) A force of 50 N making an angle of $120^{\\circ}$ with x-axis.",
    "A car is moving with an average speed of $72 \\text{ km h}^{-1}$. How much time will it take to cover a distance of $360 \\text{ km}$?",
    "A truck start from rest. It reaches a velocity of $90 \\text{ km h}^{-1}$ in 50 seconds. Find its average acceleration.",
    "A car passes a green traffic signal while moving with a velocity of $5 \\text{ m s}^{-1}$. It then accelerates takes $2 \\text{ s}$. What is the velocity of car after $5 \\text{ s}$?",
    "A motorbike initially travelling at $18 \\text{ km h}^{-1}$ accelerates at constant rate of $2 \\text{ m s}^{-2}$. What will be the motorbike go in 10 seconds.",
    "A wagon is a. is moving on the road with a velocity of $5.4 \\text{ km h}^{-1}$. Brakes are applied suddenly. The wagon covers a distance of $25 \\text{ m}$ before stopping. Determine the acceleration of the wagon.",
    "A stone is dropped from a height of 45 m. How long with it take to reach the ground. What will be its velocity just hitting the ground?",
    "A car travels 10 km with an average velocity of $20 \\text{ m s}^{-1}$. Then it travels in the same direction thon with an average velocity of $4 \\text{ m s}^{-1}$. For the next $0.8 \\text{ km}$. Determine the average velocity of the car for the total journey.",
    "A ball is dropped from the top of a tower. The ballaches the ground in $5 \\text{ seconds}$. Find the height of the tower and the velocity of the ball with which it strikes the ground."

    ],

    mcqs: [
       {
        question: " The numerical ratio of displacement to distance is",
        options: ["(A) Always less than", "(B) Always equal to one", "(C) Always greater than", "(D) Equal to or less than"],
    },
    {
        question: " If a body does not change its position with respect to some fixed point, then it will be in the state of",
        options: ["(A) Rest", "(B) Motion", "(C) Uniform motion", "(D) Variable motion"],
    },
    {
        question: " A ball is dropped from the top of the tower, the distance covered by it in the final second is:",
        options: ["(A) 5 m", "(B) 10 m", "(C) 50 m", "(D) 100 m"],
    },
    {
        question: " A body accelerates from rest to a velocity of $144 \\text{ km h}^{-1}$. How many second it takes $2 \\text{ s}$. Then the distance covered by it is:",
        options: ["(A) 100 m", "(B) 400 m", "(C) 1400 m", "(D) 1440 m"],
    },
    {
        question: " A body is moving with constant acceleration starting from rest. It covers a distance of 4 s in 4 s. How much time does it take to cover one-fourth of this distance?",
        options: ["(A) 1 s", "(B) 2 s", "(C) 4 s", "(D) 16 s"],
    },
    {
        question: " The displacement time graphs of two objects A and B are shown in the figure. Point out the true statement from the following: (image)",
        options: ["(A) The velocity of A is greater than B", "(B) The velocity of A is less than B", "(C) The velocity of A is equal to B", "(D) The graph gives no information in this regard"],
    },
    {
        question: " The area under the speed-time graph is numerically equal to:",
        options: ["(A) Velocity", "(B) Uniform velocity", "(C) Acceleration", "(D) Distance covered"],
    },
    {
        question: " Gradient of the speed-time graph is equal to:",
        options: ["(A) Speed", "(B) Velocity", "(C) Acceleration", "(D) Distance covered"],
    },
    {
        question: " Gradient of the distance-time graph is equal to the:",
        options: ["(A) Speed", "(B) Velocity", "(C) Distance covered", "(D) Acceleration"],
    },
    {
        question: " A car accelerates uniformly from $0.5 \\text{ km h}^{-1}$ at $1 \\text{ s}$ to $113 \\text{ km h}^{-1}$ at $9 \\text{ s}$. Which graph best describes the motion of the car?",
        options: ["(A) Image", "(B) Image", "(C) Image", "(D) Image"],
    },
    ],
  },
   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 3,
    chapterName: "Dynamics",
    shortQuestions: [
  "What kind of change in motion may be produced by a force?",
    "Give 5 examples of contact forces.",
    "An object moves with constant velocity in free space. How long will the object continue to move with this velocity?",
    "Define impulse of force.",
    "Why has not Newton's first law been proved on the Earth?",
    "When sitting in a car which suddenly accelerates from rest, you are pushed back into the seat, why?",
    "The force expressed in Newtons second law is a net force. Why is it so?",
    "How can you show that rolling friction is lesser than the sliding friction?",
    "Define terminal velocity of an object.",
    "An astronaut walking in space wants to return to his spaceship by firing a hand rocket. In what direction does he fire the rocket?"

    ],
    longQuestions: [
       "Explain the concept of force by practical examples.",
    "Describe Newton's laws of motion.",
    "State and define the principle of conservation of momentum.",
    "Define momentum and express Newton's 2nd law of motion in terms of change in momentum.",
    "Describe the motion of a block on a table taking into account the friction between the two blocks. What is the static friction and kinetic friction?",
    "Explain the effect of friction on the motion of vehicles in context of tyre surface and braking surface.",
    "A 10 kg block placed on a smooth surface. A horizontal force of 5 N is applied to the block. Find: (a) the acceleration produced in the block (b) the velocity of block after 5 seconds.",
    "The mass of a person is 80 kg. What will by his weight on the Earth? What will be his weight on the Moon? The value of acceleration due to gravity of Moon is $1.6 \\text{ m s}^{-2}$.",
    "What force is rice to increase the velocity of $800 \\text{ kg}$ car from $10 \\text{ m s}^{-1}$ to $30 \\text{ m s}^{-1}$ in $10 \\text{ s}$? How long will the rocket go in 10 seconds?",
    "A 0.5 kg bullet is fired by a gun. The bullet moves with a velocity of $300 \\text{ m s}^{-1}$. If the mass of the gun is 10 kg, find the recoil speed of the gun.",
    "An astronaut weighs 70 kg. He throw a wrench of mass 300 g at a speed of $3.5 \\text{ m s}^{-1}$. Determine: (a) the speed of astronaut as his recoils away from the wrench. (b) the distance covered by the astronaut in 30 minutes.",
    "A 0.5 kg box of a good train is moving with a velocity $1.2 \\text{ m s}^{-1}$. Another bogey of mass 0.2 kg coming from beehive, with a velocity of $1.2 \\text{ m s}^{-1}$ collides it with the first one and couples to it. Find the common velocity of the two bogies after they become coupled.",
    "A cyclist weighing 85 kg is a bicycle of mass 5 kg. He start from rest and applies a force of 90 N for 8 seconds. Then he continues at a constant speed for another 8 seconds. Calculate the total distance travelled by the cyclist.",
    "A ball of mass 0.4 kg is dropped from the top of a height on 1.8 km. The ball rebounds straight upward at a height of 0.8 m. What is the magnitude and direction of the impulse applied to the ball by the floor?"

    ],

    mcqs: [
       {
        question: " When kick a stone, we get hurt. This is due to:",
        options: ["(A) Inertia", "(B) Velocity", "(C) Momentum", "(D) Reaction"],
    },
    {
        question: " An object will continue its motion with constant acceleration until",
        options: ["(A) The resultant force on it begins to decrease", "(B) The resultant force on it is zero", "(C) The resultant force on it begins to increase", "(D) The resultant force is at right angle to its tangential velocity"],
    },
    {
        question: " Which if the following is non-contact force?",
        options: ["(A) Air resistance", "(B) Electrostatic force", "(C) Tension in the string", "(D) None of these"],
    },
    {
        question: " A ball with initial momentum p is hits a solid wall and bounces back with the same velocity. Its momentum p after collision will be:",
        options: ["(A) p / -p", "(B) -p", "(C) 2p", "(D) -2p"],
    },
    {
        question: " A particle of mass m moving with a velocity v collides with another particle of the same mass at rest. The velocity of the first particle after collision is:",
        options: ["(A) v", "(B) -v", "(C) 0", "(D) -1/2"],
    },
    {
        question: " Conservation of linear momentum is equivalent to:",
        options: ["(A) Newton's first law of motion", "(B) Newton's second law of motion", "(C) Newton's third law of motion", "(D) None of these"],
    },
    {
        question: " A object with a mass of 5 kg moves at constant velocity of $10 \\text{ m s}^{-1}$. A constant force then acts for 5 seconds on the object and gives it a velocity of $2 \\text{ m s}^{-1}$ in the opposite direction. The force acting on the object is:",
        options: ["(A) 5 N", "(B) -10 N", "(C) -12 N", "(D) -15 N"],
    },
    {
        question: " A large force acts on an object for a very short interval of time. In this case, it is easy to determine:",
        options: ["(A) Magnitude of force", "(B) Time interval", "(C) Product of force and time", "(D) None of these"],
    },
    {
        question: " A lubricant is usually introduced between two surfaces to decrease friction. The lubricant:",
        options: ["(A) Decreases temperature", "(B) Acts as ball bearings", "(C) Prevents direct contact of the surface", "(D) Provides rolling friction"],
    },
    ],
  },


   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 4,
    chapterName: "Turning Effects of Forces",
    shortQuestions: [
       "Define like and unlike parallel forces.",
    "What are rectangular components of a vector and their values?",
    "What is the line of action of a force?",
    "Define momentum of a force. Prove that $\\tau = r F \\text{sin}\\theta$, where $\\theta$ is angle between r and F.",
    "With the help of a diagram, show that the resultant force is zero but the resultant torque is not zero.",
    "Identify the state of equilibrium in each case in the figure given (image).",
    "Give and example of the body which is moving yet in equilibrium.",
    "Define centre of mass and centre of gravity of a body.",
    "What are two basics principles of stability physics which are applied in designing balancing toys and racing cars?",
    "How can you prove that the centripetal force always perpendicular to velocity?"


    ],
    longQuestions: [
      "Explain the principle of moments with an example.",
    "Describe how could you determine the centre of gravity of an irregular shaped lamina.",
    "State and explain two conditions of equilibrium.",
    "How the stability of an object can be improved? Give examples to support your answer.",
    "A force of 200 N is acting on a car at an angle of 30° with the horizontal direction. Find the x and y-component of the force.",
    "A force of 300 N is applied perpendicularly at the knob of a door to open it as shown in the given figure. If the knob is 1.2 m away from the hinge, what is the torque applied? Is it positive or negative torque?",
    "Two girls weighing 300 N and 400 N are sitting on a see-saw at distances as shown in the given figure. Find the rule balance and also the centre of gravity C.G. Find the unknown weight w.",
    "A metre rule is balanced with two children sitting near either end. A metre rule is 30 kg and is 515 metres away from the pivot, while child B weighs 40 kg and is 1.7 m metres from the pivot. Calculate the total moment on each side and determine if the sea-saw is in equilibrium.",
    "A crowbar is used to lift box as shown in the given figure. If the downward force of 250 N is applied at the end of the bar. How much weight does the other end bear? The crowbar itself has negligible weight.",
    "A 30 cm long spanner is used to open the nut of a car. If the torque required for it is 150 N m. How much force F should be applied on the spanner as shown in the figure given? What will be its velocity just before the nut opens?",
    "A ball hanging from a rope is pulled to the right by horizontal forces F. The rope makes an an angle of 60° with the ceiling, as shown in the given figure. Determine the magnitude of force F and tension T in the string.",
    "A signboard is suspended by means of two steel wires as shown in the given figure. If the weight of the board is 200 N, what is the tension in the strings?"

    ],

    mcqs: [
       {
        question: " A particle is simultaneously acted upon by two forces of 4 and 3 Newtons. The net force on the particle is:",
        options: ["(A) 1 N", "(B) Between 1 N and 7 N", "(C) 5 N", "(D) 7 N"],
    },
    {
        question: " A force F is making an angle $\\theta$ with x-axis, its y-component is equal to:",
        options: ["(A) F", "(B) Fsin$\\theta$", "(C) Fcos$\\theta$", "(D) Ftan$\\theta$"],
    },
    {
        question: " Momentum of force is called:",
        options: ["(A) Momentum", "(B) Couple", "(C) Couple arm", "(D) Torque"],
    },
    {
        question: " If $F_1, F_2$ are the forces acting on a body and T is the torque produced in it, the body will be completely in equilibrium, when:",
        options: ["(A) $\\sum F=0$ and $\\sum T=0$", "(B) $\\sum F\\ne 0$ and $\\sum T=0$", "(C) $\\sum F=0$ and $\\sum T\\ne 0$", "(D) $\\sum F\\ne 0$ and $\\sum T\\ne 0$"],
    },
    {
        question: " A shopkeeper sells his articles by a balance having unequal arms of the pans. If he puts the weights in the pan having shorter arm, then the customer:",
        options: ["(A) Loses", "(B) Gains", "(C) Neither loses nor gains", "(D) Not certain"],
    },
    {
        question: " A man walks on a tight rope. He balances himself by holding a bamboo stick horizontally. It is an application of:",
        options: ["(A) Law of conservation of momentum", "(B) Newton's second law of motion", "(C) Principle of moments", "(D) Newton's third law of motion"],
    },
    {
        question: " In stable equilibrium the gravity of the body lies:",
        options: ["(A) At the highest position", "(B) At the lowest position", "(C) At any position", "(D) Outside the body"],
    },
    {
        question: " The centre of mass of a body:",
        options: ["(A) Lies always inside the body", "(B) Lies always outside the body", "(C) Lies always on the surface", "(D) May lie within, outside or on the surface"],
    },
    {
        question: " A cylinder resting on its circular base is in:",
        options: ["(A) Stable equilibrium", "(B) Neutral equilibrium", "(C) Unstable equilibrium", "(D) None of these"],
    },
    {
        question: " Centripetal force is given by:",
        options: ["(A) $F=rf$", "(B) $Fcos\\theta$", "(C) $mv^2$", "(D) $mv^2/r$"],
    },
    ],
  },


   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 5,
    chapterName: "Work, Energy and Power",
    shortQuestions: [
 "What is the work done on an object that remains at rest when a force is applied on it?",
    "A slow-moving car may have more kinetic energy than a fast-moving motorcycle. How is this possible?",
    "A force $F_1$ does $5 \\text{ J}$ of work in $10 \\text{ s}$. Another force $F_2$ does $3 \\text{ J}$ work in $5 \\text{ s}$. Which force delivers greater power?",
    "A woman runs up a flight of stairs. The gain in her gravitational potential energy is $4500 \\text{ J}$. If she runs up the same stairs with twice the speed, what will be her gain in potential energy?",
    "Define work force and its SI unit.",
    "What is the potential energy of a body of mass m when it is raised through a height h?",
    "Find an expression for the kinetic energy of a moving body.",
    "Define the efficiency of a working system. Why a system cannot have $100\\%$ efficiency of a working system?",
    "What is power? Define the unit used for it.",
    "Differentiate between renewable and non-renewable energy sources."

    ],
    longQuestions: [
        "What is meant by kinetic energy? State its unit. Describe how it is determined.",
    "State the law of conservation of energy. Explain it with the help of an example of a body falling from certain height in terms of its potential energy and kinetic energy.",
    "Differentiate between renewable and non-renewable energy sources. Give three examples for each.",
    "Explain what is meant by efficiency of a machine. How is it calculated? Why there is a limit for the efficiency of a machine?",
    "Describe the process of electricity generation by drawing a block diagram of the process in the following cases. (a) Hydroelectric power generations (b) Fossil fuels.",
    "A force of 20 N acting on an angle of 60° to the horizontal is used to pull a box through a distance of 3 m across a floor. How much work is done?",
    "A body removes a distance of 5 meters in a straight line under the action of a force of 8 newtons. If the work done is 20 Joules, find the angle which the force makes with the direction of the motion of the body.",
    "An engine masses 100 kg of water through a height of 80 m in 25 s. What is the power of the engine?",
    "A body of mass 20 kg is at rest. A 40 N force acts on it for 5 seconds. What is the kinetic energy of the body at the end of this time?",
    "A ball of mass 160 g is thrown vertically upward. The ball reaches a height of 20 m. Find the potential energy gained by the ball at this height.",
    "A 14 kg bag bally is thrown vertically upward with an initial velocity pf 35 $ \\text{m s}^{-1} $. Find the maximum height reached by the ball.",
    "A girl is swinging a swing. At the lowest point of her swing, she is 1.2 m from the ground, and at the highest point she is 2.0 m from the ground. What is her maximum velocity and where?",
    "A person pushes a lawn mower with a force of 50 N making an angle of 45° with the horizontal. If the mower is moved through a distance of 20 m, how much work is done?",
    "Calculate the work done in (i) Pushing up a box frictionless an inclined plane 10 m long that makes an angle of 30° with the horizontal. (ii) Lifting the box vertically up from the ground to the top of the inclined plane."

    ],

    mcqs: [
       {
        question: " The work done is maximum when the angle between the force F and the displacement d is:",
        options: ["(A) 0°", "(B) 30°", "(C) 60°", "(D) 90°"],
    },
    {
        question: " A joule can altan be written as:",
        options: ["(A) kg m s", "(B) kg m s²", "(C) kg m² s²", "(D) kg m² s³"],
    },
    {
        question: " The SI unit of power is:",
        options: ["(A) Joule", "(B) Newton", "(C) Watt", "(D) Second"],
    },
    {
        question: " The power of a water pump is 2 KW. The amount of water it can raise in one minute to a height of 5 metres is:",
        options: ["(A) 1000 litres", "(B) 1200 litres", "(C) 2000 litres", "(D) 2400 litres"],
    },
    {
        question: " A bullet of mass 0.05 kg has a speed of 300 m s⁻¹. Its kinetic energy will be:",
        options: ["(A) 2250 J", "(B) 4500 J", "(C) 1500 J", "(D) 1125 J"],
    },
    {
        question: " If a car doubles its speed, its kinetic energy will be:",
        options: ["(A) The same", "(B) Doubled", "(C) Increased to three times", "(D) Increased to four times"],
    },
    {
        question: " The energy possessed by a body by virtue of its position is:",
        options: ["(A) Kinetic energy", "(B) Chemical energy", "(C) Potential energy", "(D) Solar energy"],
    },
    {
        question: " The magnitude of momentum of an object is doubled, the kinetic energy of the object will:",
        options: ["(A) Double", "(B) Increase to four times", "(C) Reduce to one-half", "(D) Remain the same"],
    },
    {
        question: " Which of the following is not renewable energy source?",
        options: ["(A) Hydroelectric energy", "(B) Fossil fuels", "(C) Wind energy", "(D) Biomass energy"],
    },
    ],
  },

   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 6,
    chapterName: "Mechanical Properties of Matter",
    shortQuestions: [
 "Why heavy animals like elephant have a large area of the foot?",
    "Why animals like deer who run fast have small area of the foot?",
    "Why is it painful to walk bare footed on pebbles?",
    "State Pascal's law. Give an application of Pascal's law.",
    "State what do you mean by elasticity of a solid.",
    "What is Hook's law? Does an object remain elastic beyond elastic limit? Give reason.",
    "Distinguish between force and pressure.",
    "What is the relationship between liquid pressure and the depth of the liquid?",
    "What is barometric principle to measure the atmospheric pressure by a simple mercury barometer?",
    "State the atmospheric principle used in the hydraulic system of the automobiles."

    ],
    longQuestions: [
       "What is Hook's law? Give three applications of this law.",
    "Describe the working and applications of a simple mercury barometer and a manometer.",
    "Describe Pascal's law. State its applications with examples.",
    "On what factors the pressure of a liquid in a container depends? How is it determined.",
    "Explain that atmosphere excerts pressure. What are its applications. Give at least three examples.",
    "A spring is stretched 20 mm by a load of 40 N. Calculate the value of spring constant. If an object cause an extension of 16 mm, what will be its weight?",
    "The mass of 5 litres of milk is 4.5 kg. Find its density in SI units.",
    "When a solid mass 80 g is lowered into a measuring cylinder, the level of water rises from 40 cm³ to 44 cm³. Calculate the density of the solid.",
    "A block of density $8 \\times 10^3 \\text{ kg m}^{-3}$ has a volume 60 cm³. Find its mass.",
    "A brick measures 5 cm x 10 cm x 20 cm. If its mass is 8 kg. Calculate the maximum and minimum pressure which the brick can exert on a horizontal surface.",
    "What will be the height of the column in barometric sea level if mercury is replaced by water oil density $1000 \\text{ kg m}^{-3}$ where density of mercury is $13.6 \\times 10^3 \\text{ kg m}^{-3}$?",
    "Suppose in the hydraulic brake system in a car, the force exerted normally on its piston of cross-sectional area 0.5 cm² is 500 N. What the pressure transferred to the brake oil? What will be the force on the second piston of area of cross-section 20 cm²?",
    "Find the water pressure on a deep-sea diver at a depth of 10 m. where the density of sea water is 1030 kg m⁻³.",
    "In a hydraulic press in hydraulic press is increased by 10 N cm⁻³, how much extra load will the output platform support if its cross-sectional area is 100 cm² and 100 cm²? What force should be exerted on the small piston in order to lift a car of weight 4000 N?",
    "In a hot air balloon, the following data was recorded. Is graph between the altitude and pressure and find out: (a) What should the air pressure have been sea level? At",
    "If the pressure in a hydraulic press is increased by 10 N cm², how much extra load will the output platform support if its cross-sectional area is 50 cm²?"

    ],

    mcqs: [
        {
            question: "A wire steel is stretched by a weight w. If the diameter of the wire is reduced to half of its previous value, the extension will become",
            options: ["(A) One half", "(B) Double", "(C) One fourth", "(D) Four times"],
        },
        {
            question: "Four wires of same material are stretched by the same load. Their dimensions are given below. Which of them will elongate most?",
            options: ["(A) Length 1 m, diameter 1 mm", "(B) Length 2 m, diameter 2mm", "(C) Length 3 m, diameter 3 mm", "(D) Length 4 m, diameter 0.5 mm"],
        },
        {
            question: "Two metal plates of area 2 and 3 square metres are placed in a liquid at the same depth. The ratio of pressure on the two plates is:",
            options: ["(A) 1:1", "(B) 1:$\\sqrt{2}$", "(C) 2:3", "(D) 4:9"],
        },
        {
            question: "The pressure at any point in a liquid is proportional to:",
            options: ["(A) Density of the liquid", "(B) Depth of the point below the surface of the liquid", "(C) Acceleration due to gravity", "(D) All of the above"],
        },
        {
            question: "Pressure applied to an enclosed fluid is:",
            options: ["(A) Increased and applied to every part of the fluid", "(B) Diminished and transmitted to the walls of container", "(C) Increased in proportioned to the mass of the fluid and then transmitted to each part of the fluid", "(D) Transmitted unchanged to every portion of the fluid and walls of containing vessel"],
        },
        {
            question: "The principle of a hydraulic press is based on:",
            options: ["(A) Hook's law", "(B) Pascal's law", "(C) Principle of conservation of energy", "(D) Principle of conservation of momentum"],
        },
        {
            question: "When a spring is compressed, what form of energy does it possess?",
            options: ["(A) Kinetic", "(B) Potential", "(C) Internal", "(D) Heat"],
        },
        {
            question: "What is the force exerted by the atmosphere on a rectangular block surface of length 50 cm and breadth 40 cm? The atmospheric pressure is 100 kPa.",
            options: ["(A) 20 kN", "(B) 100 kN", "(C) 200 kN", "(D) 500 kN"],
        },
      
    ],
  },



   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 7,
    chapterName: "Thermal Properties of Matter",
    shortQuestions: [
 "Why solids have a fixed volume and shape according to particle theory of matter?",
        "What are the reasons that gases have neither a fixed volume nor a fixed shape?",
        "Compare the spacing of molecules in the solid, liquid and gaseous state.",
        "What is the effect of raising the temperature of a liquid?",
        "What is meant by temperature of a body?",
        "Define heat as 'energy in transit'.",
        "What is meant by thermometric property of a substance? Describe some thermometric properties.",
        "Describe the main scales used for the measurement of temperature. How are they related with each other?",
        "What is meant by sensitivity of thermometer?",
        "What do you mean by the linearity of a thermometer?",
        "What make the scale and reading of a thermometer accurate?",
        "What does determine the direction of heat flow?",
        "Distinguish between heat and internal energy?",
        "When you touch a cold surface, does cold travel from the surface to your hand or does energy travel from your hand to cold surface?",
        "Can you feel your fever by touching your own forehead? Explain"
  
    ],
    longQuestions: [
       "Describe the main points of particle theory of matter which differentiate solids, liquids and gases.",
        "What is temperature? How is it measured? Describe briefly the construction of a mercury-in-glass thermometer.",
        "Compare the three scales used for measuring temperature.",
        "What is meant by sensitive, range and linearity of thermometers? Explain with examples.",
        "Explain, how how the parameters sensitive, range and linearity of thermometers are improved in the structure of glass-in-thermometer.",
        "The temperature of a normal human body on Fahrenheit scale is 98.6°F. Convert it into Celsius scale and Kelvin scale.",
        "At what temperature Celsius and Fahrenheit thermometer reading would be the same?",
        "Convert 5°F to Celsius and Kelvin scale.",
        "What is equivalent temperature of 85°C on Fahrenheit and Kelvin scales?",
        "The ice and steam points on an ungraded thermometer are found to be 19.2 mm apart. What temperature will be on Celsius scale to the mercury thread is at 6.0/2 mm mark above the ice point mark?",
        "The length between the fixed point of liquid-in-glass thermometer is 20 cm. If the mercury level is 4.5 cm above the lower mark, what is the temperature on the Fahrenheit scale?"
   
    ],

    mcqs: [
        {
            question: "1. How do the molecules in a solid behave?",
            options: ["(A) Move randomly", "(B) Vibrate about their mean positions", "(C) Rotate and vibrate randomly at their own positions", "(D) Move in a straight line from hot to cold ends"],
        },
        {
            question: "2. What type of motion is of the molecules in a gas?",
            options: ["(A) Linear motion", "(B) Random motion", "(C) Vibratory motion", "(D) Rotatory motion"],
        },
        {
            question: "3. Temperature of a substance is:",
            options: ["(A) The total amount of heat contained in it", "(B) The total number of molecules in it", "(C) Degree of hotness or coldness", "(D) Dependent upon the intermolecular distance"],
        },
        {
            question: "4. Heat is the:",
            options: ["(A) Total kinetic energy of the molecules", "(B) Total internal energy", "(C) Work done by the molecules", "(D) The energy in transit"],
        },
        {
            question: "5. In Kelvin scale, the temperature corresponding to melting point of ice is:",
            options: ["(A) Zero", "(B) 32", "(C) -273", "(D) +273"],
        },
        {
            question: "6. The temperature which has the same value on Celsius and Fahrenheit:",
            options: ["(A) -40", "(B) +40", "(C) -45", "(D) -45"],
        },
        {
            question: "7. Which one he is better choice for a liquid-in-glass thermometer?",
            options: ["(A) Is colourless", "(B) Is a bad conductor", "(C) Expand linearly", "(D) Wetss glass"],
        },
        {
            question: "8. One disadvantages of using alcohol in a liquid-in-glass thermometer?",
            options: ["(A) It has large expansion", "(B) It has low freezing point (-112°C)", "(C) It wets the glass", "(D) Its expansion is linear"],
        },
        {
            question: "9. Water is not used as a thermometric liquid mainly due to:",
            options: ["(A) Colourless", "(B) A bad conductor of heat", "(C) Non-linear expansion", "(D) A low boiling point (100°C)"],
        },
        {
            question: "10. A thermometer has a narrow capillary tube so that it:",
            options: ["(A) Quickly responds to temperature changes", "(B) Can read the maximum temperature", "(C) Gives a large temperature rise", "(D) Can measure a large range of temperature"],
        },
        {
            question: "11. Which thermometer is most suitable for recording rapidly carrying temperature?",
            options: ["(A) Thermocouple", "(B) Mercury-in-glass laboratory thermometer", "(C) Alcohol-in-glass thermometer", "(D) Mercury-in-glass clinical thermometer"],
        },
      
    ],
  },
   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 8,
    chapterName: "Magnetism",
    shortQuestions: [
 "What are temporary and permanent magnets?",
        "Define magnetic field of a magnet.",
        "What are magnetic lines of force?",
        "Name some uses of permanent magnets and electromagnets.",
        "What are magnetic domains?",
        "Which type of magnetic field is formed by a current-carrying long coil?",
        "Differentiate between paramagnetic and diamagnetic materials."
 
    ],
    longQuestions: [
        "How can you identify whether an object is a magnet or a magnetic material?",
        "Describe the strength of a magnetic field in terms of magnetic lines of force. Explain it by drawing for the fields as examples.",
        "What is a circuit breaker? Describe its working with the help of a diagram.",
        "A magnet attracts only a magnet. Explain the statement.",
        "Differentiate between paramagnetic, diamagnetic and ferromagnetic materials with reference to the domain theory.",
        "Why ferromagnetic materials are suitable for making magnets?"
   
    ],

    mcqs: [
        {
            question: "Which one of the following is not a magnetic material?",
            options: ["(A) Cobalt", "(B) Iron", "(C) Aluminium", "(D) Nickel"],
        },
        {
            question: "Magnetic lines force:",
            options: ["(A) Are always directed in a straight line", "(B) Cross one another point", "(C) Enter into the North pole", "(D) Allnco"],
        },
        {
            question: "Permanent magnets cannot be made by:",
            options: ["(A) Soft iron", "(B) Jibiel", "(C) Neodymium", "(D) Alnico"],
        },
        {
            question: "Permanent magnets are used in:",
            options: ["(A) Circuit breaker", "(B) Loudspeaker", "(C) Electric crane", "(D) Magnetic recording"],
        },
        {
            question: "A common method to magnetise a material is:",
            options: ["(A) Stroking", "(B) Hitting", "(C) Heating", "(D) Placing inside a solenoid having A.C Current"],
        },
        {
            question: "A magnetic cotiaic compass is a compass around a bar magnet at four points as shown in figure below. Which diagram would indicate the correct directions of the field?",
            options: ["(A) Image", "(B) Image", "(C) Image", "(D) Image"],
        },
        {
            question: "A steel rod is magnetised by a double touch stroking method. Which one would be the correct polarity of the AB magnet?",
            options: ["(A) Image", "(B) Image", "(C) Image", "(D) Image"],
        },
        {
            question: "The best material to protect a device from external magnetic field is:",
            options: ["(A) Wood", "(B) Plastic", "(C) Steel", "(D) Soft iron"],
        },
    ],
  },
   
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 9,
    chapterName: "Nature of Science",
    shortQuestions: [
       "State in your words, what is science? write its two main groups.",
        "What is physics all about? Name some of its branches.",
        "What is meant by interdisciplinary fields? Give a few examples.",
        "List the main steps of scientific method.",
        "What is a hypothesis? Give an example.",
        "Distinguish between a theory and a law of physics.",
        "What is the basis of laser technology?",
        "What is falsifiability concept? How is it important?"
   

    ],
    longQuestions: [
        "Describe the scope of physics of what. What are the main branches of physics? State briefly.",
        "What is meant by interdisciplinary fields of physics? Give three examples.",
        "What is scientific method? Describe its main steps with examples.",
        "Differentiate the terms, science, technology and engineering with examples.",
        "What is the scope of physics in everyday life? Give some examples."
   
    ],

    mcqs: [
       {
            question: "Physics is a breach of:",
            options: ["(A) Social science", "(B) Life science", "(C) Physical science", "(D) Biological science"],
        },
        {
            question: "Which brach such of science plays vital role in technology and engineering?",
            options: ["(A) Biology", "(B) Chemistry", "(C) Geology", "(D) Physics"],
        },
        {
            question: "Automobile technology is based on:",
            options: ["(A) Acoustics", "(B) Optcs", "(C) Optics", "(D) Thermodynamics"],
        },
        {
            question: "A user friendly software application of smart phone use:",
            options: ["(A) Laser technology", "(B) Information technology", "(C) Medical technology", "(D) Electrical technology"],
        },
        {
            question: "The working of refrigeration and air conditioning involves:",
            options: ["(A) Electromagnetism", "(B) Mechanics", "(C) Climate science", "(D) Thermodynamics"],
        },
        {
            question: "What is the ultimate truth of a scientific method?",
            options: ["(A) Hypothesis", "(B) Observation", "(C) Theory", "(D) Law"],
        },
        {
            question: "The statement \"If I do not study for this test, then I will not get good grade\" is an example of",
            options: ["(A) Hypothesis", "(B) Experimentation", "(C) Observation", "(D) Prediction"],
        },
        {
            question: "Which of the following are methods of investigation?",
            options: ["(A) Hypothesis", "(B) Observation", "(C) Experimentation", "(D) All of these"],
        },
        {
            question: "A hypothesis:",
            options: ["(A) May or may not be", "(B) is supported by", "(C) is a possible answer", "(D) All of these"],
        },
    ],
  },


//?   physics 10

    {
    class: 10,
    subject: "Physics",
    chapterNumber: 10,
    chapterName: "Simple Harmonic Motion and Waves",
    shortQuestions: [
  "If the length of a simple pendulum is doubled, what will be the change in its time period?",
        "A student performed two experiments with a simple pendulum. He/she used two bobs of different masses by keeping others parameters constant. To his/her astonishment the time period of the pendulum did not change? Why?",
        "A ball is dropped from a certain height onto the floor and keeps bouncing. Is the motion of the ball simple harmonic? Explain.",
        "Plane waves in the ripple tank undergo refraction when they move from deep to shallow water. What changes occurs in the speed of the waves?"
   
    ],
    longQuestions: [
          "What is simple harmonic motion? What are the necessary conditions for a body to execute simple harmonic motion?",
        "Think of several examples of motion in everyday life that are simple harmonic.",
        "The time period of a simple pendulum is 2s. What will be its length on the Earth? What will be its length on the Moon if g_E = 9.8ms⁻² and g_M = 1.6ms⁻²?",
        "A pendulum of length 0.99m is taken to the Moon by an astronaut. The period of the pendulum is 4.9s. What is the value of g on the surface of the Moon?",
        "Find the time periods of a simple pendulum of 1 meter length, placed on Earth and on Moon. The value of g on the surface of the Moon is $$\\frac{1}{6}$$ of its value on Earth, where g=10ms⁻².",
        "A simple pendulum completes one vibration in two seconds. Calculate its length when g = 10ms⁻².",
        "What are damped oscillations? How damping progressively reduces the amplitude of oscillations?",
        "How can you define the term wave? Elaborate the difference between mechanical and electromagnetic waves. Give examples of each.",
        "Distinguish between longitudinal and transverse waves with suitable examples.",
        "Draw a transverse wave having amplitude of 2cm and wavelength of 4cm. Label a crest and trough on the wave.",
        "Derive a relation between speed, frequency and wavelength of a wave. Write a formula, relating speed of a wave to its time period and wavelength.",
        "Waves are the means of energy transfer without transfer of matter. Justify this statement with the help of a simple experiment.",
        "What types of waves do not require any material medium for their propagation?",
        "If 100 waves pass through a point of medium in 20 seconds. What is the frequency and the time period of the wave? If its wavelength is 6cm, calculate the wave speed."
   
    ],

    mcqs: [
        {
            question: "Which one of the following is an example of simple harmonic motion?",
            options: ["(A) The motion of simple pendulum", "(B) The motion of ceiling fan", "(C) The spinning of the earth on its axis", "(D) A bouncing ball on a floor"],
        },
        {
            question: "If the mass of the bob of a pendulum is increased by a factor of 3, the period of the pendulum's motion will:",
            options: ["(A) Be increased by a factor of 2", "(B) Remains the same", "(C) Be decreased by a factor of 2", "(D) Be decreased by a factor of 4"],
        },
        {
            question: "Waves transfer:",
            options: ["(A) Energy", "(B) Frequency", "(C) Wavelength", "(D) Velocity"],
        },
        {
            question: "Which of the following methods is used to transfer energy?",
            options: ["(A) Conduction", "(B) Radiation", "(C) Wave motion", "(D) All of these"],
        },
        {
            question: "Which of the following devices can be used to produce both transverse and longitudinal waves?",
            options: ["(A) A string", "(B) A ripple tank", "(C) A helical spring (slinky)", "(D) A tuning fork"],
        },
        {
            question: "In vacuum, all electromagnetic waves have the same:",
            options: ["(A) Speed", "(B) Frequency", "(C) Amplitude", "(D) Wavelength"],
        },
        {
            question: "The relation among velocity, frequency and wavelength of a wave is:",
            options: ["(A) $v = \\lambda f$", "(B) $f = v \\lambda$", "(C) $v \\lambda = f$", "(D) $v = f / \\lambda$"],
        },
        {
            question: "Which of the following characteristic of a wave is independent of the others?",
            options: ["(A) Wavelength", "(B) Frequency", "(C) Velocity", "(D) Amplitude"],
        },
        {
            question: "A large ripple tank with a vibrating at a frequency of 30Hz produces 25 complete waves in a distance of 50cm. the velocity of the wave is",
            options: ["(A) 30cms⁻¹", "(B) 60cms⁻¹", "(C) 75cms⁻¹", "(D) 1500cms⁻¹"],
        },
    ],
  },

    {
    class: 10,
    subject: "Physics",
    chapterNumber:11,
    chapterName: "Sound",
    shortQuestions: [
 "Sound is a form of wave. List at least three reasons to support the idea that sound is a wave.",
        "You can listen to your friend rounds a corner, but you cannot watch him/her. Why?",
        "What is the difference between the loudness and intensity of sound? Derive the relationship between the two.",
        "On what factors does the loudness of sound depend? Write the names.",
        "What do you mean by the intensity level of the sound? Name and define the unit of intensity level of sound.",
        "What are the units of loudnels? Why do we use logarithmic scales to describe the range of the sound intensities we hear?",
        "How can we recognize persons speaking with same loudness from their voice. How is it possible?",
        "We know that waves manifest phenomenon of reflection, refraction and diffraction. Does sound also manifest these characteristics?",
        "If we clap or speak in front of building while standing at a particular distance, we rehear our sound after sometime. Can you explain how does this happen?",
        "How can you find the speed of sound by the method of echo?",
        "Why two tins can with a string stretched between them could be better way to communicate than merely shouting through the air?",
        "A student says that the two terms speed and frequency of the wave refer to the same thing. What is your response?",
        "Describe the importance of acoustic protection.",
        "Why must the volume of a stereo in a room with wall to carpet be tune higher than in a room with a wooden floor?",
        "What is the audible frequency range for human ear? does this range vary with the age of people? Explain",
        "What is the role of ultrasound in medicine?"
  
    ],
    longQuestions: [
         "What is necessary condition for the production of sound?",
        "How can you prove the mechanical nature of sound by a simple experiment?",
        "What do you mean by the intensity level of sound? Describe the longitudinal nature of sound waves.",
        "What is difference between frequency and pitch? Describe their relationship graphically.",
        "Describe the effect of change in amplitude on loudness and the effect of change frequency on pitch of sound.",
        "If the pitch of sound is increased, what are the changes in the following? a) The frequency b) The wavelength c) The wave velocity d) The amplitude of the wave",
        "Two people are listening to the same music at the same distance. They disagree on its loudness. Explain how this could happen.",
        "Can two individuals 50dB sounds combine to produce 100dB sound? Explain.",
        "A normal conversation involves sound intensities of about $3.0 \\times 10^{-6} \\text{Wm}^{-2}$. What is the intensity of the sound for 100dB?",
        "At Anarkali bazaar Lahore, intensity level of sound is 80dB. What will be the intensity of sound there?",
        "Is there any difference between echo and reflection of sound? Explain.",
        "What is the effect of the medium on the speed of sound? In which medium sound travels faster, air, solid or liquid? Justify your answer.",
        "At a particular temperature, the speed of sound in air is 330ms⁻¹. If the wavelength of a note is 5cm. calculate the frequency of the sound wave. Is this frequency in the audible range of the human ear?",
        "A doctor counts 72 heartbeats in 1min. calculate the frequency and period of the note is 600.",
        "A marine survey ship sends a sound wave straight to the seabed. It receives an echo 1.5s later. The speed of sound in seawater is 1500ms⁻¹. Find the depth of the sea at this position.",
        "A student clapped his hands near a cliff and heard the echo after 5s. What is the distance of the cliff is 340m from the speed of the sound is taken as 340ms⁻¹?"
   
    ],

    mcqs: [
       {
            question: "Which is an example of longitudinal wave?",
            options: ["(A) Sound wave", "(B) Light wave", "(C) Radio wave", "(D) Water wave"],
        },
        {
            question: "How does sound travel from its source to your ear?",
            options: ["(A) By changes in air pressure", "(B) By vibrations in wires or strings", "(C) By electromagnetic wave", "(D) By infrared waves"],
        },
        {
            question: "Sound is a type of ......... energy",
            options: ["(A) Thermal", "(B) Mechanical", "(C) Chemical", "(D) Amplitude"],
        },
        {
            question: "The loudness of sound mostly depends upon",
            options: ["(A) Frequency", "(B) Period", "(C) Wavelength", "(D) Amplitude"],
        },
        {
            question: "When the frequency of sound wave is increased, which of the following will decrease?",
            options: ["(A) Wavelength", "(B) Amplitude", "(C) Wavelength and period", "(D) Wavelength and amplitude"],
        },
        {
            question: "For a normal person, audible frequency range for sound wave is:",
            options: ["(A) 10Hz - 10kHz", "(B) 20Hz - 20kHz", "(C) 25Hz - 20kHz", "(D) 30Hz - 30kHz"],
        },
    ],
  },


    {
    class: 10,
    subject: "Physics",
    chapterNumber:12,
    chapterName: "Geometrical Optics",
    shortQuestions: [
 "Why or why not concave mirrors are suitable for makeup?",
        "Why drivers' side mirror in many cars is convex rather than plane or concave?",
        "When an optician's testing room is small, he uses a mirror to help him test the eyesight of his parents. Explain why.",
        "Define the following terms used in refraction: a) Angle of incidence b) Angle of refraction",
        "Explain why fish under water appears to be at a different depth below the surface than it actually is. Does it appear deeper or shallower?",
        "What is meant by the term total internal reflection?",
        "State the conditions for total internal reflection?",
        "Define the following terms applied to a lens: a) Principal axis b) Optical center c) Focal length",
        "Define power of a lens and its units.",
        "A coin is placed at the focal point of a converging lens. Will an image form? What will be its nature?",
        "What are the difference between real and virtual images?",
        "How does a converging lens form a real image of a real object? How does diverging lens can form a real image of a real objects?",
        "Under what conditions will a converging lens form a virtual image?",
        "Under what conditions will a converging lens form a real image and same size as the objects?",
        "Define the terms of resolving power and magnifying power.",
        "Mention the magnifying powers of the following optical instruments: a) Simple microscope b) Compound microscope c) Reflecting microscope",
        "Why do we use refracting telescope with large objective lens of large focal length?",
        "How does the thickness of a lens affect its focal length?"
   
    ],
    longQuestions: [
         "What do you understand by reflection of light? Draw a diagram to illustrate reflection at a plane surface.",
        "Describe the following terms used in reflection: a) Normal ray b) Angle of incidence c) Angle of reflection",
        "State laws of reflection. Describe how they can be verified graphically.",
        "An object 3.0cm from a convex mirror forms an image 5.0cm behind mirror. What is the focal length of the mirror?",
        "An object 30cm tall is located 10.5cm from a concave mirror with focal length 16cm. Where is the image located? And how high is it?",
        "An object and its image in a concave mirror are of the same height. If the object is 20cm form the mirror. What is the focal length of the mirror?",
        "Find the image of a mirror that forms an image 5.66cm behind the mirror of an object placed at 34.44cm in front of the mirror. Is the mirror concave or convex?",
        "An image of statue appears to be 11.5cm behind a convex mirror with focal length 13.5cm. Find the distance from the statue to the mirror.",
        "An image is produced by a concave mirror of focal length 8.7cm. the object is 13.2cm tall and at a distance of 19.3cm from the mirror. Find the location and height of the image. (b) Find the height of the image produced by the object is twice as far from the mirror.",
        "Nabeela uses a concave mirror when applying makeup. The mirror has a radius of curvature of 30cm. (a) what is the focal length of the mirror? (b) Nabeela is located 50cm from the mirror. Where will her image appear? (c) Will the image upright or inverted?",
        "A ray of light from air is incident on a liquid surface at an angle of incidence 36°. Calculate the angle of refraction if the refractive index of the liquid is 1.25. Also calculate the critical angle between the liquid air interface.",
        "Define refractive of light? Describe the passage of light through parallel-sided transparent material.",
        "What is meant by refractive index of a material? How would you determine the refractive index of a rectangular glass slab?",
        "State laws re reflection of light and show how they may be verified using rectangular glass slab and pins.",
   "Describe in your words why does the wave of light refract at the contact point of two materials?",
        "What is critical angle? Derive a relationship between the critical angel and the refractive index of a substance.",
        "What are optical fibers? Describe how total internal reflection is used in light propagating through optical fibers.",
        "Describe the passage of light through a glass prism and measure the angle of deviation.",
        "What is meant by the principal focus of a convex lens and concave lens? Illustrate your answer with ray diagram.",
        "The power of a convex lens is 5D. At what distance the object should be placed from the lens so that its real and 2 times larger image is formed?",
        "Describe how light is refracted through convex lens.",
        "With the help of a ray diagram, how you can show the use of the converging lens as a magnifying glass.",
        "Draw the ray diagrams of a) Simple microscope b) Compound microscope c) Refracting microscope",
        "A man raises his left hand in a plane mirror, the image facing him is raising his right hand. Explain why.",
        "An object 4.0cm high is placed at a distance of 12cm from a convex lens of focal length 8cm. Calculate the position and size of the image. Also state the nature of the image.",
        "An object 4.0cm high is placed at a distance of 7.0cm from a concave lens of focal length 10cm. Calculate the position and size of the image. Also state the nature of the image.",
        "A convex lens of focal length is 8cm is used to form a virtual image three times the size of the object. Where must the lens be placed?",
        "A person 1.7m tall is standing 2.5m in front of a camera. The camera uses a convex lens whose focal length is 0.05 m. Find the image distance. Determine whether the image is real or virtual.",
        "A concave lens has focal length of 15cm. At what distance should the object from the lens be placed so that it form an image at 0cm from the lens? Also find the magnification of."
 
    ],

    mcqs: [
        {
            question: "A converging mirror with a radius of 20cm creates a real image 30cm from the mirror. What is the object distance?",
            options: ["(A) -5.0cm", "(B) -7.5cm", "(C) -1.5cm", "(D) -20cm"],
        },
        {
            question: "The image of a car is 14cm in front of a convex mirror. The image 5.8cm behind the mirror what is the focal length of the mirror?",
            options: ["(A) -4.1cm", "(B) -3.2cm", "(C) -9.9cm", "(D) -20cm"],
        },
        {
            question: "Which of the following quantity does not change during refraction of light?",
            options: ["(A) Its direction", "(B) Its speed", "(C) Its frequency", "(D) Its wavelength"],
        },
        {
            question: "The index of refraction depends upon",
            options: ["(A) The focal length", "(B) The speed of light", "(C) The image distance", "(D) The object distance"],
        },
        {
            question: "If a ray of light in glass is incident on air surface at an angle greater than the critical angle, the ray will:",
            options: ["(A) Refract only", "(B) Reflect only", "(C) Partially refracted", "(D) Partially reflected"],
        },
        {
            question: "Which type of image is formed by convex lens on a screen?",
            options: ["(A) Inverted and real", "(B) Inverted and virtual", "(C) Upright and real", "(D) Upright and virtual"],
        },
        {
            question: "Image formed by a camera is:",
            options: ["(A) Real, inverted, and diminished", "(B) Virtual, upright and diminished", "(C) Virtual, upright and magnified", "(D) Real, inverted and magnified"],
        },
        {
            question: "Which type of image is formed by the converging lens of human eye if it views distant objects?",
            options: ["(A) Real, erect, same", "(B) Real, inverted", "(C) Virtual, erect", "(D) Virtual, magnified"],
        },
    ],
  },


    {
    class: 10,
    subject: "Physics",
    chapterNumber: 13,
    chapterName: "Electrostatics",
    shortQuestions: [
         "How can you show by a simple experiment that there are two types of electric charges? ",
        "An electrified rod attracts tiny pieces of paper. After a while these pieces fly away! Why?",
        "Describe the method of charging bodies by electrostatic induction.",
        "How does electrostatic induction differ from charging by friction?",
        "Suppose you have a glass rod which becomes positively charged when you rub it with wool. Describe how would you charge the electroscope? (a) Negatively (b) Positively",
        "With the help of electroscope how you can find presence of charge on a body.",
        "How much real negative charge has been removed from a positively charged electroscope, if it has a charge of $7.5 \\times 10^{-11}$ C?",
        "Perhaps you have seen a gasoline truck trailing a metal chain beneath it. What purpose does the chain serve?",
        "What is meant by electric field and electric intensity?",
        "Is electric intensity vector quantity? What will be its direction?",
        "In what direction will a positively charged particle move in an electric field?",
        "How would you define potential difference between two points? Define its unit.",
        "Show that what do you mean by electric potential difference can be described as energy transfer per unit charge between two points.",
        "What is meant by capacitance? Define the unit of capacitance?",
        "Derive the formula for the equivalent capacitance for series combination and for a number of capacitors.",
        "What is difference between variable and fixed type capacitor?",
        "Enlist some uses of capacitors.",
        "Discuss one application of static electricity.",
        "What are hazards of static electricity?"

    ],
    longQuestions: [
           "What is gold leaf electroscope? Discuss its working principle with labelled diagram.",
        "Describe how you would determine the nature of the charge on a body by using.",
        "The change of how many negatively charged particles would be equal to 100µC. Assume charge on one negative particle is $1.6 \\times 10^{-19}$C.",
        "Two point charges $q_1 = 10\\mu C$ and $150\\mu C$ are placed at a distance of 150cm. what will be the coulomb's force between them? Also find the direction of the force.",
        "The force or repulsion between two identical positive charges is 0.8N. When the charges are 0.1m apart, find the value of each charge.",
        "Two identical spheres repel each other with a force of 10N. When they are 50cm apart. Find the forces between the same charges when they are 2cm apart.",
        "Explain Coulomb's law of electrostatics and write its mathematical form.",
        "A point charge of +2C is transferred from a point at potential 100V to a point at potential 50V. what would be the energy supplied by the charge?",
        "The electric field potential at a point in an electric field is $10^4$V. If a charge of +100$\\mu$C is brought from infinity to this point. What would be the amount of work done on it?",
        "Each capacitor in parallel combination has equal potential difference between its two plates. Justify the statement.",
        "Does each capacitor carry equal charge in series combination? Explain.",
        "A capacitor holds 0.06 coulombs of charge when fully charged by a 8volt battery. Calculate the capacitance of the capacitor.",
        "A capacitor bitor is fully charged by a 8 volt battery. How much voltage be required for it to hold 2 coulombs of charge?",
        "Two capacitors in series with 12V battery. Find the equivalent capacitance of the combination. Find the charge in the combination.",
        "Discuss different types of capacitors?"
    
    ],

    mcqs: [
        {
            question: "An object gains excess a negative charge after being rubbed against another object which is:",
            options: ["(A) Neutral", "(B) Negatively charged", "(C) Positively charged", "(D) All of these"],
        },
        {
            question: "According to Coulomb's law, what happens to the attraction of two oppositely charged objects as their distance of separation increases?",
            options: ["(A) Increases", "(B) Decreases", "(C) Remains unchanged", "(D) Cannot be determined"],
        },
        {
            question: "The Coulomb's law is valid for the charges which are:",
            options: ["(A) Moving and point charges", "(B) Stationary and non-point charges", "(C) Stationary and point charges", "(D) Stationary and large size charges"],
        },
        {
            question: "A positive and a negative charge are initially 4cm apart. When they are moved closer together so that they are now only 1cm apart, the force between them is:",
            options: ["(A) 4 times smaller than before", "(B) 4 times larger than before", "(C) 8 times larger than before", "(D) 16 times larger than before"],
        },
        {
            question: "Two small charged spheres are separated by 2mm. Which of the following would produce the greatest attractive force?",
            options: ["(A) -1q and +2q", "(B) -1q and +4q", "(C) -2q and +2q", "(D) -2q and +q"],
        },
        {
            question: "Five joule of work is to new potential difference to 10 C of charge from one place to another. The between the places is:",
            options: ["(A) 0.5V", "(B) 2V", "(C) 5V", "(D) 10V"],
        },
        {
            question: "Capacitance is defined as:",
            options: ["(A) V/C", "(B) V/Q", "(C) Q/V", "(D) Q/V"],
        },
    ],
  },



    {
    class: 10,
    subject: "Physics",
    chapterNumber: 14,
    chapterName: "Current Electricity",
    shortQuestions: [
  "What is the difference between a cell and a battery?",
        "Define and explain the term electric current.",
        "What is the difference between electronic current and conventional current?",
        "Can current flow in a circuit without potential difference?",
        "Two points on an objects are at different electric potentials. Does charge necessarily flow between then?",
        "In order to measure current in a circuit why ammeter is always connected in series?",
        "In order to measure voltage in a circuit why voltmeter is always connected in parallel. Discuss.",
        "Define resistance and its units?",
        "A certain flashlight can use a 1.0Ω bulb or a 5.0Ω bulb. Which bulb should be used to get the brighter light? Which bulb will discharge the battery fast?",
        "Why in conductor's charge is transferred by free electrons rather than by positive charges?",
        "What is the the difference between conductors and insulators?",
        "Discuss the main features of parallel combination of resistors.",
        "Determine the equivalent resistance of series combination of resistors.",
        "What is the advantage of connecting the equipments in parallel instead of series?",
        "From your experience in watching cars on the roads at night, are automobile headlamps connected in series?",
        "Is it impracticable to connect an electric bulb and an electric heater in series. Why?",
        "How many watt-hours there are in 1000 joules?",
        "Explain the energy dissipation in a resistance. What is Joule's law?",
        "What is the difference between DC and AC?",
        "Describe briefly the hazards of household electricity.",
        "Describe the circuit breaker that should be taken in connection with the household current?",
        "Does a fuse in a circuit control the potential difference or current?"
   
    ],
    longQuestions: [
          "A current of 3A is flowing through a wire for 1minute, what is the charge flowing through it?",
        "What do you mean by the term e.m.f? is it really a force? Explain.",
        "How can we differentiate between e.m.f and potential difference?",
        "Explain Ohm's law. Derive its formula. What are its limitations?",
        "At 100,000Ω, how much current flows through your body if you touch the terminals of a 12V battery? If your skin is wet, so that your resistance is only 1000Ω, how much current would you receive from the same battery?",
        "The resistance of a conductor wire is $10 \\text{M}\\Omega$. If a potential difference of 100volts is applied across its ends, then find the value of current passing through it in mA.",
        "Two resistances of 6kΩ and 12kΩ are connected in series. A 6V battery is connected across the ends of this combi. (a) Find the equivalent resistance of the series combination. (b) Current passing through each of the resistances.",
        "Two resistances of 6kΩ and 12kΩ are connected in parallel. A 6V battery is connected across the ends of this combi. (a) Find the equivalent resistance of the parallel combination (b) Current passing through each of the resistances (c) The potential difference across each resistance.",
        "Discuss the main features of parallel combination of resistors.",
        "By applying a potential difference of 10V across a conductor, a current of 1.5A passes through it. How much energy would be obtained from the current in 2minutes?",
        "A 100 W lamp bulb and a 4kW water heater are connected to a 250V supply. Calculate (a) the current which flows in each appliance (b) the resistance of each appliance when in use.",
        "An electric bulb is marked with 220V, 100W. find the resistance of the filament of the bulb. If the bulb is used 5hours daily, find the energy in kilowatt-hour consumed by the bulb in one month (30days).",
        "This bulb designed for use in a 120 V circuit or a 220 V circuit?"
  
    ],

    mcqs: [
        {
            question: "An electric current in conductors is due to the flow of:",
            options: ["(A) Positive ions", "(B) Negative ions", "(C) Positive charge", "(D) Free electrons"],
        },
        {
            question: "What is the voltage across a 6 Ohm resistor when 3A of current passes through it?",
            options: ["(A) 2V", "(B) 6V", "(C) 18V", "(D) 36V"],
        },
        {
            question: "When we double the voltage in a simple electric circuit, we double the:",
            options: ["(A) Current", "(B) Power", "(C) Resistance", "(D) Both (a) and (b)"],
        },
        {
            question: "Electric potential and e. m. f. are:",
            options: ["(A) Are the same terms", "(B) Are the different terms", "(C) Have different", "(D) Both (b) and (c)"],
        },
        {
            question: "What happens to the intensity or the brightness of the lamps connected in series as more and more lamps are added?",
            options: ["(A) Increases", "(B) Decreases", "(C) Remains the same", "(D) Cannot be predicted"],
        },
        {
            question: "The combined resistance of two identical resistors, connected in series is 8Ω. Their combined resistance in a parallel arrangement will be:",
            options: ["(A) 2Ω", "(B) 4Ω", "(C) 6Ω", "(D) 12Ω"],
        },
        {
            question: "If we double both current and the voltage in a circuit while keeping its resistance constant, the power",
            options: ["(A) Halves", "(B) Doubles", "(C) Quadruples", "(D) Quadruples"],
        },
        {
            question: "What is the power rating of a lamp connected to 12V source when it carries 2.5A?",
            options: ["(A) 4.8W", "(B) 14.5W", "(C) 30W", "(D) 60W"],
        },
    ],
  },

    {
    class: 10,
    subject: "Physics",
    chapterNumber: 15,
    chapterName: "Electromagnetism",
    shortQuestions: [
 "State and explain by the direction and the line of force of the magnetic field around a current-carrying conductor can be determined?",
    "Suppose we hang a loop of wire so that it can swing easily. If we now put a magnet into the coil, the coil will swing. Why will the way will a swing relative to the magnetic field, and why?",
    "What reverses the direction of electric current in the armature coil of D.C motor?",
    "What is the difference between a generator and a motor?",
    "What do you understand by the term mutual induction?",
    "Explain the working of a transformer in connection with mutual induction.",
    "The voltage chosen for the transmission of electrical power over large distances is many times greater than the voltage of the domestic supply. State two reasons why electrical power is transmitted at high voltage.",
    "You are given an unmarketed steel magnet bar and bar-magnet, its north and south ends are marked N and S respectively. State how would you determine the polarity at each end of the unmarked bar?",
    "Which device is used for converting electrical energy into mechanical energy? On what principle it works?",
    "A conductor wire generates a voltage while its moving through magnetic field, in what direction should the wire be moved, relative to the field to generate the maximum voltage?",
    "Describe the direction of an induced e.m.f. in a circuit? How does this phenomenon relate to conservation of energy?",
    "Suppose someone handed to you three similar irons bars. And told you one was not magnet, but the others two were. How would you find the iron bar that was not magnet?",
    "Can transformer operate on direct current?",
    "Why is the voltage used for the domestic supply much lower than the voltage at which the power is transmitted?"

    ],
    longQuestions: [
         "Demonstrate by an experiment that a magnetic field is produced around a straight current-carrying conductor.",
    "State that current-carrying coil in a magnetic field experiences a torque.",
    "Describe a simple experiment to demonstrate that a changing magnetic field can induce e.m.f. in a circuit.",
    "Draw a well labelled diagram to illustrate the structure and working of A.C generator.",
    "A transformer is needed to convert mains 240V supply into a 12V supply. If there are 2000 turns on the primary coil, then find the number of turns on the secondary coil.",
    "A step-down transformer has a turn ratio of 100:1. An A.C voltage of amplitude 170V is applied to the primary. If the current in the primary is 1.0mA, what is the current in the secondary?",
    "A power station generated 500MW of electrical power which is fed to a transmission line. What current would flow in the transmission line, if the input voltage is 250KV?",
    "When a straight current-carrying conductor is placed in a magnetic field, it experiences a force. State the rule by which the direction of this force can be found out.",
    "What is an electric motor? Explain the working principle of D.C motor.",
    "What are the factors which affect the magnitude of the e.m.f. in a circuit by changing magnetic field?",
    "Suppose you have coil of wire and bar magnet. Describe how you could use them to generate an electric current.",
    "A step-up transformer has a turn ratio of 1:100. An alternating supply of 20V is connected to the primary coil. What is the secondary voltage?",
    "A transformer, designed to convert the voltage from 240V A.C mains to 12V, has 4000 turns in the primary coil. How many turns should be in the secondary coil? If the transformer were 100% efficient, what current would flow through the primary coil when the current in the secondary coil was 0.4A?"

    ],

    mcqs: [
      {
        question: "Which statement/statement is true about the magnetic poles?",
        options: ["(A) Unlike poles repel", "(B) Like poles attract", "(C) Magnetic poles do not affect each other", "(D) Single magnetic pole does not exist"],
    },
    {
        question: "What is the direction of the magnetic field lines inside a bar magnet?",
        options: ["(A) From north pole to south pole", "(B) From south pole to north pole", "(C) Side to side", "(D) There are no magnetic field lines"],
    },
    {
        question: "The presence of a magnetic field can be detected by a",
        options: ["(A) Small mass", "(B) Stationary positive charge", "(C) Stationary negative charge", "(D) Magnetic compass"],
    },
    {
        question: "If the current financial in a wire which is placed perpendicular to magnetic field increases, the force on the wire",
        options: ["(A) Increases", "(B) Decreases", "(C) Will be zero", "(D) Remains the same"],
    },
    {
        question: "A D.C. motor converts",
        options: ["(A) Mechanical energy into electrical energy", "(B) Mechanical energy into chemical energy", "(C) Electrical energy into mechanical energy", "(D) Electrical energy into chemical energy"],
    },
    {
        question: "Which part of the D.C. motor reverses the direction of current through the coil every half-cycle?",
        options: ["(A) The armature", "(B) The commutator", "(C) The brushes", "(D) The split rings"],
    },
    {
        question: "The direction of induced e.m.f. in a circuit is in accordance with conservation of",
        options: ["(A) Mass", "(B) Charge", "(C) Momentum", "(D) Energy"],
    },
    ],
  },

    {
    class: 10,
    subject: "Physics",
    chapterNumber: 16,
    chapterName: "Basic Electronics",
    shortQuestions: [
 "Name two factors which can enhance thermionic emission.",
    "When electrons pass through two parallel plates having opposite charges, they are deflected towards the positively charged plate. What important characteristic of the electron can be inferred from this?",
    "Name some uses of oscilloscope.",
    "Differentiate between analogue electronics and digital electronics. Write down names of five analogue and five digital devices that are commonly used in everyday life.",
    "How can you compare the logic operation X=A.B with usual operation of multiplication?",
    "Give three reasons to support the evidence that cathode rays are negatively charged electrons.",
    "When a moving electron enters the magnetic field, it is deflected from its straight path. Name two factors which can enhance electron deflection.",
    "What do you understand by digital and analogue quantities?",
    "Write down some benefits of using digital electronics over analogue electronics.",
    "NAND gate is the reciprocal of AND gate. Discuss."
    ],
    longQuestions: [
         "What is electron gun? Describe the process of thermionic emission.",
    "Describe, using one simple diagram in each case, what happens when a narrow beam of electrons is passed through a uniform electric field and a uniform magnetic field. What do these results indicate about the charge on electron?",
    "Explain the working of different parts of oscilloscope.",
    "What are the three universal logic gates? Give their symbols and truth tables."

    ],

    mcqs: [
       {
        question: "The process by which electrons are emitted by a hot metal surface is known as:",
        options: ["(A) Boiling", "(B) Evaporation", "(C) Conduction", "(D) Thermionic emission"],
    },
    {
        question: "The particles emitted from a hot cathode surface are:",
        options: ["(A) Positive ions", "(B) Negative ions", "(C) Protons", "(D) Electrons"],
    },
    {
        question: "If X=A.B, then. X is 1 when:",
        options: ["(A) A and B are 1", "(B) A or B is 0", "(C) A is 0 and B is 1", "(D) A is 1 and B is 0"],
    },
    {
        question: "The output of a NAND gate is 0 when",
        options: ["(A) Both of its inputs are 1", "(B) Both of its inputs are 0", "(C) Any of its inputs is 0", "(D) Any of its inputs is 1"],
    },
    {
        question: "AND gate can be formed by using two:",
        options: ["(A) NOT gates", "(B) OR gates", "(C) NOR gates", "(D) NAND gates"],
    },
    {
        question: "The output of a two-input NOR gate is 1 when:",
        options: ["(A) A is 1 and B is 1", "(B) A is 0 and B is 1", "(C) Both A and B are 0", "(D) Both A and B are 1"],
    },
    ],
  },



    {
    class: 10,
    subject: "Physics",
    chapterNumber: 17,
    chapterName: "Information and Comminication Technology",
    shortQuestions: [
 "What is the difference between data and information?",
    "Define Information and Communication Technology (ICT)?",
    "What is the difference between hardware and software? Name different software.",
    "Explain briefly the transmission of radio waves through space.",
    "How light signals are sent through optical fiber?",
    "What is the role of computer in everyday life?",
    "Why optical fiber is more useful tool for the communication process?",
    "Differentiate between the primary and secondary memory.",
    "Which is more reliable floppy disk or a hard disk?",
    "What do you understand by the term word processing and data managing?"

    ],
    longQuestions: [
          "What are the components of information technology? Clearly indicate the function of each component.",
    "Name different information storage devices and describe their uses.",
    "Discuss the role of information technology in school education.",
    "What is Internet? Internet is useful source of knowledge and information. Discuss."

    ],

    mcqs: [
       {
        question: "In computer terminology information means",
        options: ["(A) Raw data", "(B) Processed data", "(C) Large data", "(D) Any data"],
    },
    {
        question: "Which is the most suitable means of reliable continuous communication between an orbiting satellite and earth?",
        options: ["(A) Microwaves", "(B) Radio waves", "(C) Sound waves", "(D) Any light wave"],
    },
    {
        question: "The basic operations performed by a computer are",
        options: ["(A) Arithmetic operations", "(B) Non-arithmetic operations", "(C) Logical operations", "(D) Both (a) and (c)"],
    },
    {
        question: "The brain of any computer system is",
        options: ["(A) Monitor", "(B) CPU", "(C) Memory", "(D) Control Unit"],
    },
    {
        question: "Which of the following is not processing?",
        options: ["(A) Arranging", "(B) Manipulating", "(C) Calculating", "(D) Gathering"],
    },
    {
        question: "From which of the following we can get information almost about everything",
        options: ["(A) Book", "(B) Teacher", "(C) Computer", "(D) Internet mail"],
    },
    {
        question: "What does the term e-mail stand for?",
        options: ["(A) Emergency mail", "(B) Electronic mail", "(C) Extra mail", "(D) External mail"],
    },
    ],
  },

    {
    class: 10,
    subject: "Physics",
    chapterNumber: 18,
    chapterName: "Atomic and Nuclear Physics",
    shortQuestions: [
"What is the difference between atomic number and atomic mass number? Give a symbolical representation of a nuclide.",
    "Is it possible for an element to have different types of atoms? Explain.",
    "What do you mean by the term radioactivity? Why some elements are radioactive but some are not?",
    "How can we make radioactive elements artificially? Describe with a suitable example.",
    "What are the three basic radioactive decay processes and how do they differ from each other?",
    "Is radioactivity a spontaneous process? Elaborate your answer with a simple experiment.",
    "What is the difference between natural and artificial radioactivity?",
    "What type of natural radioactivity leaves the number of protons and the number of neutrons in the nucleus unchanged?",
    "How much of pure radioactive substance would be left un-decayed after four half-lives?",
    "What is meant by background radiations? Enlist some sources of background radiations.",
    "Explain whether the atomic number can increase during nuclear decay. Support your answer with an example.",
    "Which has more penetrating power, an alpha particle or a gamma ray photon?",
    "How long would you likely have to wait to sample any sample of radioactive atoms completely decay?",
    "Describe two uses of radioisotopes in medicine, industry or research.",
    "Tritium is the radioactive isotope of hydrogen. It decays by emitting an electron. What is the daughter nucleus?",

    ],
    longQuestions: [
         "What do you understand by half-life of a radioactive element?",
    "The half-life of N is sample of this nuclide of nitrogen is observed for 29.2s, calculate the fraction of the original radioactive isotope remaining after this time.",
    "Cobalt- is a radioactive element with half-life of 5.25years, what fraction of the original sample will be left after 26years?",
    "Carbon- has a half-life of 2730 years. How long will it take for the quantity of carbon- to in a sample to drop to one-eighth of the initial quantity?",
    "Technetium- is a radioactive element and is used to diagnose brain, thyroid, liver, kidney disease, this element has half-life of 6hours. If there is 200mg of this technetium present, how much will be left in 36hours.",
    "Half-life of a radioactive element is 10 minutes. If the initial count rate is 168 counts per minute, find the time for which count rate reaches 223 counts per minute.",
    "A sample of certain radioactive element has a half-life of 1500 years. It has an activity of 3200 counts per hour at the present time, then plot a graph of the activity of this sample over the period which will reduce to 1/16 of its present value.",
    "What type of natural radioactivity leaves the number of protons and the number of neutrons in the nucleus unchanged?",
    "For 8 successive hours were found to be 270, 283, 300, 310, 285, 290, 305, 312. What does the variation in count rates show? Plot a graph between the count rates and time in hours. Why the graph is a straight line rather than an exponential?",
    "Ashes from a campfire deep in a cave show carbon-activity of only one-eighth the activity of fresh wood. How long ago was that campfire made?",
    "Nuclear fusion reaction is more reliable and sustainable source of energy than nuclear fission chain reaction. Justify this statement with plausible arguments.",
    "Which nuclear reaction would release more energy, the fission reaction or the fusion reaction? Explain."

    ],

    mcqs: [
        {
        question: "Isotopes are atoms of same element with different",
        options: ["(A) Atomic mass", "(B) Atomic number", "(C) Number of protons", "(D) Number of electrons"],
    },
    {
        question: "One of the isotopes of uranium the number of neutrons in this isotope is:",
        options: ["(A) 92", "(B) 146", "(C) 238", "(D) 330"],
    },
    {
        question: "Which among the following radiations has more penetrating power?",
        options: ["(A) A beta particle", "(B) A gamma ray", "(C) An alpha particle", "(D) All have the same penetrating ability"],
    },
    {
        question: "What happens to the atomic number of an element which emits one alpha particle?",
        options: ["(A) Increases by 1", "(B) Stays the same", "(C) Decreases by 2", "(D) Decreases by 1"],
    },
    {
        question: "When uranium (92protons) ejects a beta particle, how many protons will be in the remaining nucleus?",
        options: ["(A) 89", "(B) 90", "(C) 91", "(D) 93"],
    },
    {
        question: "The half-life of a certain isotope is 1 day. What is the quantity of the isotope after 2days?",
        options: ["(A) One half", "(B) One-quarter", "(C) One-eighth", "(D) None of these"],
    },
    {
        question: "When a heavy nucleus splits into two lighter nuclei. The process would:",
        options: ["(A) Release nuclear energy", "(B) Absorb chemical energy", "(C) Release chemical energy", "(D) Absorb nuclear energy"],
    },
    {
        question: "Release of energy by the sun is due to",
        options: ["(A) Nuclear fission", "(B) Nuclear fusion", "(C) Burning of gases", "(D) Chemical reaction"],
    },
    ],
  },





 














































  
  {
    class: 9,
    subject: "Physics",
    chapterNumber: 0,
    chapterName: "physics",
    shortQuestions: [

    ],
    longQuestions: [
    ],

    mcqs: [
      
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
