const mongoose = require("mongoose")

const dbConnect = () => {
    // mongoose.connect("mongodb://127.0.0.1:27017/matric")
  
    mongoose.connect("mongodb+srv://zulqarnainc67:zsIO8lAaSjXJlIdS@cluster0.z0diyyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(async () => {
            console.log("Connected successfully to MongoDB");
        })
        .catch((err) => {
            console.error("MongoDB Connection Error:", err);
        });
};


module.exports = dbConnect;