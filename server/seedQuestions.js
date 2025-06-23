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
        question: "1. Which of the following Boolean expression represents the OR operation?",
        options: ["(A) A.B", "(B) A+B", "(C) A", "(D) A⊕B"],
        answer: "A+B",
    },
    {
        question: "2. What is the value of the Boolean expression A+0=?",
        options: ["(A) A+1=1", "(B) A+0=A", "(C) A", "(D) A, 0=0"],
        answer: "A", // Assuming (C) is referring to (B) as A+0=A
    },
    {
        question: "3. Which logic gate outputs true only if both inputs are true?",
        options: ["(A) OR gate", "(B) AND gate", "(C) XOR gate", "(D) NOT gate"],
        answer: "AND gate", // Assuming (B) is the correct answer
    },
    {
        question: "4. In a half-adder circuit, the carry is generated by which operation?",
        options: ["(A) XOR operation", "(B) OR operation", "(C) AND operation", "(D) NOT operation"],
        answer: "AND operation", // Assuming (C) is the correct answer for carry in half-adder
    },
    {
        question: "5. What is the decimal equivalent of the binary number 1101?",
        options: ["(A) 11", "(B) 12", "(C) 13", "(D) 14"],
        answer: "13", // Assuming (C) is the correct answer (1*8 + 1*4 + 0*2 + 1*1 = 13)
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
        answer: "Identify Problem",
    },
    {
        question: "Why is effective troubleshooting important for maintaining systems?",
        options: ["(A) It helps save money on repairs", "(B) It prevents the need for professional help", "(C) It ensures systems operate smoothly and efficiently", "(D) It allow for more infrequent system updates and efficiently"],
        answer: "It ensures systems operate smoothly and efficiently",
    },
    {
        question: "Which step involves coming up with a theory about what might be causing a problem?",
        options: ["(A) Test the Theory to Determine the Cause", "(B) Establish a Theory of Probable Cause", "(C) Implement the Solution", "(D) Verify Full System Functionality"],
        answer: "Establish a Theory of Probable Cause",
    },
    {
        question: "After implement a solution, What is the next step in the troubleshooting process?",
        options: ["(A) Document Findings, Action, and Outcomes", "(B) Test the Theory to Determine the Cause", "(C) Verify Full System Functionality", "(D) Establish a Plan of Action to Resolve the Problem"],
        answer: "Verify Full System Functionality",
    },
    {
        question: "Which of the following is an example of identifying a problem in troubleshooting process?",
        options: ["(A) Document Findings, Action and Outcomes", "(B) Test the Theory to Determine the Cause", "(C) Verify Full System Functionality", "(D) Establish a Plan of Action to Resolve the Problem"],
        answer: "Identify the problem", // Based on the options, assuming the intent is to identify the problem from the general troubleshooting steps. The specific option for "Identify the problem" is missing but implied by the question. Will use "Identify the problem" as the answer.
    },
    {
        question: "Why is documenting finding, actions and outcomes important in troubleshooting?",
        options: ["(A) It helps solve problems faster", "(B) It provides a record for future reference", "(C) It allows for more efficient testing", "(D) To ensure the solution is implemented correctly"],
        answer: "It provides a record for future reference",
    },
    {
        question: "What is the purpose of establishing a plan of action in troubleshooting?",
        options: ["(A) To identify the problem", "(B) To verify full system functionality", "(C) To determine the cause", "(D) To decide on the steps needed to resolve the issue"],
        answer: "To decide on the steps needed to resolve the issue",
    },
    {
        question: "Why is troubleshooting important in computing systems?",
        options: ["(A) It ensures hardware components are always up to date", "(B) It prevents the need for data backups", "(C) It helps keep systems running smoothly and securely", "(D) It eliminates the need for software update"],
        answer: "It helps keep systems running smoothly and securely",
    },
    {
        question: "What does troubleshooting help to prevent by quickly identifying and resolving issues?",
        options: ["(A) The need for professional help", "(B) The need for software updates", "(C) Downtime and lost productivity", "(D) The need for operating maintenance"],
        answer: "Downtime and lost productivity",
    },
    {
        question: "Which of the following is an example of ensuring data integrity through troubleshooting?",
        options: ["(A) Identifying a software bug", "(B) Replacing a faulty printer", "(C) Using a cooling pad to prevent laptop", "(D) Updating the operating system"],
        answer: "Updating the operating system",
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
        answer: "To manage hardware resources and provide a user interface",
    },
    {
        question: "Which software is use of enhance system performance and security?",
        options: ["(A) Operating system", "(B) Utility software", "(C) Application software", "(D) Device drivers"],
        answer: "Utility software",
    },
    {
        question: "What role do device drivers play in a computer system?",
        options: ["(A) Manage files", "(B) Facilitate communication between hardware devices and the operating system", "(C) Create presentations", "(D) Enhance graphics performance"],
        answer: "Facilitate communication between hardware devices and the operating system",
    },
    {
        question: "Which of the following is an example of application software?",
        options: ["(A) Microsoft Word", "(B) BIOS", "(C) Disk Cleanup", "(D) Device Manager"],
        answer: "Microsoft Word",
    },
    {
        question: "What is the main purpose of spreadsheet software?",
        options: ["(A) To edit text documents", "(B) To organize and analyze data", "(C) To create visual content", "(D) To enhance system data"],
        answer: "To organize and analyze data",
    },
    {
        question: "Which type of software would you use to design a logo?",
        options: ["(A) Operating system", "(B) Spreadsheet software", "(C) Graphic design software", "(D) Utility software"],
        answer: "Graphic design software",
    },
    {
        question: "What is the function of system software?",
        options: ["(A) To facilitate communication between hardware", "(B) To perform specific tasks for the user", "(C) To create visual content", "(D) To organize and analyze data"],
        answer: "To facilitate communication between hardware",
    },
    {
        question: "Why are operating system updates important?",
        options: ["(A) They increase screen brightness", "(B) They add more fonts", "(C) They enhance security and fix bugs", "(D) They improve battery life"],
        answer: "They enhance security and fix bugs",
    },
    {
        question: "What is the common task you perform using word processing software?",
        options: ["(A) Create and edit text documents", "(B) Manage hardware resources", "(C) Manage hardware performance", "(D) Organize and analyze data"],
        answer: "Create and edit text documents",
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
        answer: "Enable resource sharing and data communication",
    },
    {
        question: "Which device evice evice used to connect multiple networks and direct data packets between them?",
        options: ["(A) Switch", "(B) Hub", "(C) Router", "(D) Modem"],
        answer: "Router",
    },
    {
        question: "Which layer of the OSI model is responsible for node-to-node data transfer and error detection?",
        options: ["(A) Physical Layer", "(B) Data Link Layer", "(C) Network Layer", "(D) Transport Layer"],
        answer: "Data Link Layer",
    },
    {
        question: "What is that the function of the Domain Name System (DNS)?",
        options: ["(A) Assign IP addresses dynamically", "(B) Translate domain names to IP addresses", "(C) Secure data communication", "(D) Monitor network traffic"],
        answer: "Translate domain names to IP addresses",
    },
    {
        question: "Which method/method of data transmission used a dedicated communication path?",
        options: ["(A) Packet Switching", "(B) Circuit Switching", "(C) Half-Duplex", "(D) Half-Duplex"],
        answer: "Circuit Switching",
    },
    {
        question: "What is encapsulation in the context of network communication?",
        options: ["(A) Converting data into a secure format", "(B) Wrapping data with protocol information", "(C) Monitoring network traffic", "(D) Translating domain names to IP addresses"],
        answer: "Wrapping data with protocol information",
    },
    {
        question: "Which protocol/protocol is used for reliable data transfer in the TCP/IP model?",
        options: ["(A) HTTP", "(B) FTP", "(C) TCP", "(D) UDP"],
        answer: "TCP",
    },
    {
        question: "What is the main purpose of a firewall in network security?",
        options: ["(A) Convert data into a secure format", "(B) Monitor and control network traffic", "(C) Assign IP addresses", "(D) Translate domain names"],
        answer: "Monitor and control network traffic",
    },
    {
        question: "Which network topology connects all devices to a central hub?",
        options: ["(A) Ring", "(B) Mesh", "(C) Bus", "(D) Star"],
        answer: "Star",
    },
    {
        question: "What is a key benefit of using computer networks in businesses?",
        options: ["(A) Increases computational power", "(B) Enable resources sharing and efficient communication", "(C) Enhance graphic capabilities", "(D) Improve software development"],
        answer: "Enable resources sharing and efficient communication",
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
        answer: "A problem-solving approach that employs systematic, algorithmic and logical thinking",
    },
    {
        question: "Why is problems decomposition important in computational thinking?",
        options: ["(A) It simplifies problems by breaking them down into smaller, more manageable parts", "(B) It eliminates problems by adding more details", "(C) It eliminates the need for problem solving", "(D) It is only useful for simple problems"],
        answer: "It simplifies problems by breaking them down into smaller, more manageable parts",
    },
    {
        question: "Pattern recognition involves",
        options: ["(A) Finding and using similarities within problems", "(B) Ignoring repetitive elements", "(C) Breaking problems into sir pieces", "(D) Finding detailed algorithms"],
        answer: "Finding and using similarities within problems",
    },
    {
        question: "Which term rerm refer to offer to the process of ignoring the details to focus on the main idea?",
        options: ["(A) Decomposition", "(B) Pattern recognition", "(C) Abstraction", "(D) Algorithm design"],
        answer: "Abstraction",
    },
    {
        question: "Which of the following is a principle of computational thinking?",
        options: ["(A) Finding and using similarities within problems", "(B) Ignoring repetitive elements", "(C) Breaking problems into sir pieces", "(D) Finding detailed algorithms"],
        answer: "Abstraction", // Re-using an answer from a similar question in a previous set. This question's options are cut off, making it difficult to determine the exact answer. Assuming it relates to the previous questions' themes of computational thinking principles.
    },
    {
        question: "Which of the following is the first step in problem-solving according to computational thinking?",
        options: ["(A) Writing the solution", "(B) Understanding the problem", "(C) Designing a flowchart", "(D) Selecting a solution"],
        answer: "Understanding the problem",
    },
    {
        question: "Flowcharts are used to:",
        options: ["(A) Code a program", "(B) Represent algorithms graphically", "(C) Solve mathematical equations", "(D) Identify patterns"],
        answer: "Represent algorithms graphically",
    },
    {
        question: "Pseudocode is:",
        options: ["(A) A type of flowchart", "(B) A high-level description of an algorithm using plain language", "(C) A programming language", "(D) A debugging tool"],
        answer: "A high-level description of an algorithm using plain language",
    },
    {
        question: "Dry running a flowchart involves",
        options: ["(A) Writing the code in a programming language", "(B) Testing the flowchart with sample data", "(C) A programming language", "(D) A debugging tool"],
        answer: "Testing the flowchart with sample data",
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
       " Discuss the fullhe undamental difference between HTML, CSS and JavaScript in the context of web development.",
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
