const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Usermodel = require("../models/Usermodel"); // Adjust path as needed
const jwt = require("jsonwebtoken")
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Incoming registration:", { username, email });

    if (!username || !email || !password) {
      console.log("Missing fields");
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const userExists = await Usermodel.findOne({ email });
    if (userExists) {
      console.log("Email already exists:", email);
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed");

    const verifyToken = crypto.randomBytes(32).toString("hex");
    const verifyTokenExpiry = Date.now() + 1000 * 60 * 60; // 1 hour
    console.log("Verification token generated");

    const newUser = new Usermodel({
      username,
      email,
      password: hashPassword,
      isVerified: false,
      verifyToken,
      verifyTokenExpiry,
    });

    await newUser.save();
    console.log("User saved to DB:", email);

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zulqarnainc67@gmail.com",
        pass: "pniq fonb hius uazc", // Use app password
      },
    });

    const verificationUrl = `http://localhost:5173/verify-email/${verifyToken}`;
    console.log("Verification URL:", verificationUrl);

    const mailOptions = {
      from: "zulqarnainc67@gmail.com",
      to: email,
      subject: "Verify Your Email",
      text: `Click this link to verify your email: ${verificationUrl}`,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Verification email sent:", info.response);
    } catch (emailError) {
      console.error("Error sending email:", emailError);
      return res.status(500).json({ message: "Failed to send verification email." });
    }

    return res.status(201).json({
      message: "We have sent an email to you. Please verify your email.",
    });

  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};





const dashboardPage = async(req,res) => {
  console.log("dashboard page")
  Usermodel.find({})
  .then(user => {
    res.json(user)
  }).catch(err => {
    res.json("error fetching s ", err)
  })
}





module.exports = { register, login,forgotPassword, resetPassword,dashboardPage };