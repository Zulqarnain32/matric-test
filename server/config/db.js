const mongoose = require("mongoose")
// const questions = require("../data/questionData")
// const mcqs = require("../data/mcqsData")
// const QuestionModel =  require("../models/Question")
// const McqsModel = require("../models/Mcqs")
const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/matric")
        .then(async () => {
            console.log("Connected successfully to MongoDB");

            // await QuestionModel.deleteMany({});
            // console.log("Old questions removed.");

            //  await McqsModel.deleteMany({});
            //  console.log("Old mcqs removed.");

            // await QuestionModel.insertMany(questions);
            // console.log("New questions added to database!");

            // await McqsModel.insertMany(mcqs);
            // console.log("New mcqs added to database!");
        })
        .catch((err) => {
            console.error("MongoDB Connection Error:", err);
        });
};


module.exports = dbConnect;