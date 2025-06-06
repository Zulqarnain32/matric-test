// server/app.js
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require("./routes/userRoutes")

const app = express();

app.use(
    cors({
      origin: ["https://test-generator-theta.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);

app.use(express.json()); 
dbConnect();



// app.use(express.json({ limit: '10mb' })); // Increase payload limit for PDFs




app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes); 


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));