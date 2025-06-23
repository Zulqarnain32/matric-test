import React, { useState, useEffect, useContext } from "react";
import axios from "axios"
import { AuthContext } from "../global/AuthContext";
import html2pdf from "html2pdf.js";
import { toast } from "react-toastify";

const TestGenerator = () => {
  
  const { user } = useContext(AuthContext);
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedType, setSelectedType] = useState("all"); // short, long, mcq, all
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [totalQuestionsAllowed, setTotalQuestionsAllowed] = useState("");
  const [questionBlocks, setQuestionBlocks] = useState([]);
  const [ignoreQuestions, setIgnoreQuestions] = useState();
  const [questionMarks, setQuestionMarks] = useState();
  const [schoolName,setSchoolName] = useState("");




  // Fetch all questions once
  useEffect(() => {
    // fetch("http://localhost:5000/api/questions")
    fetch("https://generate-test-backend.vercel.app/api/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched questions:", data);
        setAllQuestions(data || []);
      })
      .catch(() => setAllQuestions([]));
  }, []);

  // Filter chapters when class or subject changes
  useEffect(() => {
    if (selectedClass && selectedSubject) {
      const filtered = allQuestions.filter(
        (q) =>
          q.class === Number(selectedClass) &&
          q.subject.toLowerCase() === selectedSubject.toLowerCase()
      );
      setFilteredChapters(filtered);
      setSelectedChapters([]);
      setGeneratedQuestions([]);
      setSelectedQuestions([]);
    } else {
      setFilteredChapters([]);
      setSelectedChapters([]);
      setGeneratedQuestions([]);
      setSelectedQuestions([]);
    }
  }, [selectedClass, selectedSubject, allQuestions]);

  // Handle toggling chapter selection
  const toggleChapter = (chapterName) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterName)
        ? prev.filter((c) => c !== chapterName)
        : [...prev, chapterName]
    );
  };

  // Generate test based on selected chapters and question type
  const generateTest = () => {
    if (selectedChapters.length === 0) {
      alert("Please select at least one chapter.");
      return;
    }
    let questions = [];
    filteredChapters.forEach((chapter) => {
      if (selectedChapters.includes(chapter.chapterName)) {
        if (selectedType === "short" || selectedType === "all") {
          questions.push(
            ...chapter.shortQuestions.map((q) => ({
              question: q,
              type: "Short",
              chapter: chapter.chapterName,
            }))
          );
        }
        if (selectedType === "long" || selectedType === "all") {
          questions.push(
            ...chapter.longQuestions.map((q) => ({
              question: q,
              type: "Long",
              chapter: chapter.chapterName,
            }))
          );
        }
        if (selectedType === "mcq" || selectedType === "all") {
          questions.push(
            ...chapter.mcqs.map((q) => ({
              question: q.question,
              options: q.options,
              type: "MCQ",
              chapter: chapter.chapterName,
            }))
          );
        }
      }
    });
    setGeneratedQuestions(questions);
    setSelectedQuestions([]);
  };

  // Toggle question selection
  const toggleQuestionSelection = (index) => {
    const isAlreadySelected = selectedQuestions.includes(index);

    if (
      !isAlreadySelected &&
      selectedQuestions.length >= Number(totalQuestionsAllowed)
    ) {
      alert(`You can only select ${totalQuestionsAllowed} questions.`);
      return;
    }
    setSelectedQuestions((prev) =>
      isAlreadySelected ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const showAddQuestionBtn =
    selectedQuestions.length !== 0 &&
    selectedQuestions.length === Number(totalQuestionsAllowed);

  const handleShowPaper = () => {
    if (selectedQuestions.length === 0) return;

    const selected = selectedQuestions.map((idx) => generatedQuestions[idx]);

    setQuestionBlocks((prev) => [
      ...prev,
      {
        count: selected.length,
        questions: selected,
        marks: questionMarks,
      },
    ]);
    toast.success("Question has been added");

    setSelectedQuestions([]);
    setQuestionMarks("");
  };

const downloadAsPDF = async () => {
  const element = document.getElementById("pdf-content");

  try {
    const pdfBlob = await html2pdf().from(element).set({
      margin: 0.5,
      filename: "test.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    }).outputPdf('blob');

    // Download the PDF to user's device
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Test_${selectedClass}_${selectedSubject}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    toast.success("PDF downloaded successfully");
  } catch (error) {
    console.error("Error generating PDF:", error);
    toast.error("Error generating PDF");
  }
};


  return (
    <div className="max-w-3xl mx-auto px-6 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-text">
        Test Generator
      </h1>

          <label className="block mb-1 font-bold text-gray-700">School Name</label>

       <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            className="w-full border border-gray-300 mb-2 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />

      {/* Dropdowns for Class*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-bold text-gray-700">Class</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Choose Class</option>
            <option value="9">9th Class</option>
            <option value="10">10th Class</option>
          </select>
        </div>
        {/* dropdown for subject */}
        <div>
          <label className="block mb-1 font-bold text-gray-700">Subject</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          >
            <option value="">Choose Subject</option>
            <option value="Computer">Computer</option>
            <option value="Physics">Physics</option>
          </select>
        </div>

        {/* dropdown for question type */}
        <div>
          <label className="block mb-1 font-bold text-gray-700">
            Question Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="all">All Questions</option>
            <option value="short">Short Questions</option>
            <option value="long">Long Questions</option>
            <option value="mcq">MCQs</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-[-10px]">
        <div>
          <label className="block mb-1 font-bold text-gray-700">
            Required Questions
          </label>
          <input
            type="number"
            value={totalQuestionsAllowed}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (val >= 1 || e.target.value === "") {
                setTotalQuestionsAllowed(e.target.value);
              }
            }}
            min={1}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-900 disabled:bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-1 font-bold text-gray-700">
            Ignore Questions
          </label>
          <input
            type="number"
            value={ignoreQuestions}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (val >= 0 || e.target.value === "") {
                setIgnoreQuestions(e.target.value);
              }
            }}
            min={0}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-bold text-gray-700">
            Questions Marks
          </label>
          <input
            type="number"
            value={questionMarks}
            onChange={(e) => setQuestionMarks(e.target.value)}
            min={1}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
        </div>
      </div>

      {/* Chapters multi-select checkboxes */}
      <div>
        <label className="block my-2 font-bold text-gray-700">
          Select Chapters
        </label>
        <div className="border grid grid-cols-2 xs:grid-cols-1 border-gray-300 rounded max-h-48 overflow-y-auto p-2 xs:text-[14px] space-y-2 w-full">
          {filteredChapters.map((chapter) => (
            <label
              key={chapter.chapterName}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedChapters.includes(chapter.chapterName)}
                onChange={() => toggleChapter(chapter.chapterName)}
                className="cursor-pointer"
              />
              <span className="select-none">
                {chapter.chapterNumber} {chapter.chapterName}
              </span>
            </label>
          ))}
         
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-6 text-center">
        <button
          onClick={generateTest}
          className="bg-text text-white font-semibold px-6 py-2 rounded shadow transition"
        >
          Search Questions
        </button>
      </div>

      {generatedQuestions.length > 0 && (
        <div className="my-10">
          <h2 className="text-2xl font-bold mb-4 text-text">
            Select Questions ({selectedQuestions.length}/{totalQuestionsAllowed})
          </h2>
          <ol className="grid grid-cols-2 xs:grid-cols-1 gap-2 list-decimal list-inside">
            {generatedQuestions.map((q, idx) => {
              const isSelected = selectedQuestions.includes(idx);
              return (
                <li
                  key={idx}
                  onClick={() => toggleQuestionSelection(idx)}
                  className={`cursor-pointer rounded-xl px-3 py-4 min-h-[80px] shadow-sm flex items-start gap-3 transition-colors duration-200 ${
                    isSelected
                      ? "bg-blue-100 border border-blue-500"
                      : "bg-white border border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="mt-1 pointer-events-none"
                  />
                  <div>
                    {q.question}
                    {q.type === "MCQ" && (
                      <div className="mt-2 ml-4 ">
                        {q.options.map((option, i) => (
                          <div key={i} className="flex ">
                            <span className="mr-2">{String.fromCharCode(97 + i)}.</span>
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {showAddQuestionBtn && (
        <>
          <button
            onClick={() => handleShowPaper()}
            className="bg-green-700 mb-5 mx-auto block mt-4 text-white font-semibold px-6 py-2 rounded shadow transition"
          >
            Add Questions
          </button>
        </>
      )}

      {/* Final Paper */}
      {questionBlocks.length > 0 && (
        <div id="pdf-content" className="mt-10 bg-white p-6">
          {/* School Template */}
          <div className="mb-6 text-lg space-y-2">
            <h2 className="text-2xl xs:text-[17px] font-bold text-center mb-4 capitalize">
              {schoolName || "The Quest High School"}
            </h2>
            <div className="grid grid-cols-2 xs:text-[11px] md:grid-cols-2 xs:gap-1 gap-4">
              <div>
                <strong>Student Name:</strong> _____________
              </div>
              <div>
                <strong>Father's Name:</strong> _____________
              </div>
              <div>
                <strong>Roll No:</strong> _______________
              </div>
              <div>
                <strong>Date:</strong> _______________
              </div>
            </div>
            <div>
              <strong className="xs:text-[13px]">Instructions:</strong>
              {/* <ul className="list-disc pl-6 xs:text-[12px]"> */}
              <ul className=" pl-2 xs:text-[12px]">
               <div className="font-normal">
                 <p>• Attempt all questions.</p>
                <p>• Write clearly and neatly.</p>
                <p>• Use of unfair means is prohibited.</p>
               </div>
                
                {questionBlocks.some(block => 
                  block.questions.some(q => q.type === "MCQ")
                ) && (
                  <li>For MCQs, circle the correct answer.</li>
                )}
              </ul>
            </div>
          </div>

          {/* Render blocks */}
          {questionBlocks.map((block, blockIdx) => (
            <div key={blockIdx} className="mb-6">
              <div className="flex justify-between font-bold">
                <h3 className="font-bold mb-2 xs:text-[13px]">
                  {block.questions[0].type === "MCQ" ? "Choose the correct option" : 
                   `Answer the following questions (Any ${block.count - Number(ignoreQuestions || 0)})`}
                </h3>
                <h2 className="xs:text-[12px]">
                  {block.count - Number(ignoreQuestions)}×{block.marks}=
                  {(block.count - Number(ignoreQuestions)) * block.marks}
                </h2>
              </div>
              {/* <ol className="list-decimal list-inside  space-y-2 xs:text-[12px]"> */}
              <ol className=" list-inside  space-y-2 xs:text-[12px]">
                {block.questions.map((q, i) => (
                  <li key={i} className="mb-0">
                    {i+1}.&nbsp; {q.question}
                    {q.type === "MCQ" && (
                      <div className="mt-2 ml-4 grid grid-cols-2  ">
                        {q.options.map((option, i) => (
                          <div key={i} className="flex item-center ">
                            {/* <span className="mr-2">{String.fromCharCode(97 + i)}.</span> */}
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
      {questionBlocks.length > 0 && (
        <button
          className="bg-green-700 mx-auto block my-4 text-white font-semibold px-6 py-2 rounded shadow transition"
          onClick={downloadAsPDF}
        >
          Download as PDF
        </button>
      )}
    </div>
  );
};

export default TestGenerator;