const mongoose = require("mongoose")

const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/matric")
        .then(async () => {
            console.log("Connected successfully to MongoDB");

         
        })
        .catch((err) => {
            console.error("MongoDB Connection Error:", err);
        });
};


module.exports = dbConnect;