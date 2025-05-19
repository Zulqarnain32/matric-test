import React, { useState, useEffect } from "react";

const TestGenerator = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedType, setSelectedType] = useState("all"); // short, long, all
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [totalQuestionsAllowed, setTotalQuestionsAllowed] = useState("");
  // const [ showAddQuestionBtn,setShowAddQuestionBtn ] = useState(false)

  // Fetch all questions once
  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
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
      }
    });
    setGeneratedQuestions(questions);
    // IMPORTANT: start with NO questions selected
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

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-text">
        Test Generator
      </h1>

      {/* Dropdowns for Class, Subject, Question Type */}
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

        <div>
          <label className="block mb-1 font-bold text-gray-700">Subject</label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            disabled={!selectedClass}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          >
            <option value="">Choose Subject</option>
            <option value="Computer">Computer</option>
            <option value="Physics">Physics</option>
          </select>
        </div>

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
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-[-1`0px]">
        <div>
          <label className="block mb-1 font-bold text-gray-700">
            Total Questions
          </label>
          <input
            type="number"
            value={totalQuestionsAllowed}
            onChange={(e) => setTotalQuestionsAllowed(e.target.value)}
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
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-gray-100"
          />
        </div>
      </div>

      {/* Chapters multi-select checkboxes */}
      <div>
        <label className="block my-2 font-bold text-gray-700">
          Select Chapters
        </label>
        <div className="border border-gray-300 rounded max-h-48 overflow-y-auto p-3 space-y-2 w-full">
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
          Generate Test
        </button>
      </div>

      {generatedQuestions.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-text">
            Select Questions
          </h2>
          <ol className="list-decimal list-inside space-y-3 max-h-96 overflow-y-auto">
            {generatedQuestions.map((q, idx) => {
              const isSelected = selectedQuestions.includes(idx);
              return (
                <li
                  key={idx}
                  onClick={() => toggleQuestionSelection(idx)}
                  className={`cursor-pointer rounded-xl px-3 py-4 shadow-sm flex items-start gap-3 transition-colors duration-200 ${
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
                  <div>{q.question}</div>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {
        showAddQuestionBtn && (
          <button className="bg-green-700 mx-auto block mt-4 text-white font-semibold px-6 py-2 rounded shadow transition"
>Add Questions</button>
        )
      }

      {/* Final Paper */}
      {selectedQuestions.length > 0 && (
        <div className="mt-10 bg-white p-6">
          {/* School Template */}
          <div className="mb-6 text-gray-800 text-lg space-y-2">
            <h2 className="text-2xl font-bold text-center mb-4 capitalize">
              The Quest High School
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong>Student Name:</strong> ______________________
              </div>
              <div>
                <strong>Father's Name:</strong> ______________________
              </div>
              <div>
                <strong>Roll No:</strong> ______________________
              </div>
              <div>
                <strong>Date:</strong> ______________________
              </div>
            </div>
            <div>
              <strong>Instructions:</strong>
              <ul className="list-disc pl-6">
                <li>Attempt all questions.</li>
                <li>Write clearly and neatly.</li>
                <li>Use of unfair means is prohibited.</li>
              </ul>
            </div>
          </div>
          <ol className="list-decimal list-inside space-y-1">
            {selectedQuestions.map((idx) => {
              const q = generatedQuestions[idx];
              return (
                <li key={idx} className="bg-none rounded py-[2px] ">
                  {q.question}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
};

export default TestGenerator;
