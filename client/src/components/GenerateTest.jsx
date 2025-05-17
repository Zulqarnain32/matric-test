import React, { useState, useEffect } from "react";

const TestGenerator = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedType, setSelectedType] = useState("all"); // short, long, all
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [generatedQuestions, setGeneratedQuestions] = useState([]);

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
      console.log("Filtering for:", selectedClass, selectedSubject);
      console.log("allQuestions sample:", allQuestions[0]);
      const filtered = allQuestions.filter((q) => {
        // Use string-to-string comparison for class
        const classMatch = String(q.class) === String(selectedClass);
        const subjectMatch =
          typeof q.subject === "string" &&
          q.subject.toLowerCase() === selectedSubject.toLowerCase();

        console.log(
          `Checking chapter "${q.chapterName}": classMatch=${classMatch}, subjectMatch=${subjectMatch}`
        );

        return classMatch && subjectMatch;
      });
      console.log("Filtered chapters:", filtered);
      setFilteredChapters(filtered);
      setSelectedChapters([]);
      setGeneratedQuestions([]);
    } else {
      setFilteredChapters([]);
      setSelectedChapters([]);
      setGeneratedQuestions([]);
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
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Test Generator
      </h1>

      {/* Dropdowns for Class, Subject, Question Type */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Class</label>
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
          <label className="block mb-1 font-semibold text-gray-700">Subject</label>
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
          <label className="block mb-1 font-semibold text-gray-700">Question Type</label>
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

      {/* Chapters multi-select checkboxes */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Select Chapters
        </label>

        <div className="border border-gray-300 rounded max-h-48 overflow-y-auto p-3 space-y-2">
          {filteredChapters.length === 0 ? (
            <p className="text-gray-500 text-sm italic">No chapters found.</p>
          ) : (
            filteredChapters.map((chapter) => (
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
                <span className="select-none">{chapter.chapterName}</span>
              </label>
            ))
          )}
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-6 text-center">
        <button
          onClick={generateTest}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded shadow transition"
        >
          Generate Test
        </button>
      </div>

      {/* Display Generated Questions */}
      {generatedQuestions.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Generated Test</h2>
          <ol className="list-decimal list-inside space-y-3">
            {generatedQuestions.map((q, idx) => (
              <li
                key={idx}
                className="bg-gray-50 border border-gray-300 rounded p-3 shadow-sm"
              >
                {q.question}
              
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default TestGenerator;
