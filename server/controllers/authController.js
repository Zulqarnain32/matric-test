const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Usermodel = require("../models/UserModel"); 
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

    // const verificationUrl = `http://localhost:5173/verify-email/${verifyToken}`;
    const verificationUrl = `https://generate-test-frontend.vercel.app/verify-email/${verifyToken}`;
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


const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "Please fill all the fields" });
  }

  const user = await Usermodel.findOne({ email });

  if (!user) {
    return res.json({ message: "Invalid email" });
  }

  if (!user.isVerified) {
    return res.status(403).json({ message: "Please verify your email before logging in" });
  }

  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.json({ message: "Incorrect password" });
  }

  user.loginCount = (user.loginCount || 0) + 1;
  user.lastLoginDate = new Date();
  await user.save();

  const token = jwt.sign({ id: user._id, role: user.role, username: user.username, email: user.email }, "My-Secret-Key");

  return res.json({
    message: "Successfully logged in",
    token,
    role: user.role,
    username: user.username,
    email: user.email,
    id: user._id,
    loginCount: user.loginCount,
    lastLoginDate: user.lastLoginDate,
  });
};


const forgotPassword = async (req, res) => {
  const { email } = req.body;

  // Validate email input
  if (!email) {
    return res.json({ message: "Please enter an email" });
  }

  try {
    // Find user by email
    const user = await Usermodel.findOne({ email });
    if (!user) {
      return res.json({ message: "User not registered" });
    }

    // Generate JWT token with expiration time
    const emailToken = jwt.sign({ id: user._id }, "My-Secret-Key", { expiresIn: "1h" });

    // Setup nodemailer transporter
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "zulqarnainc67@gmail.com",
        pass: "pniq fonb hius uazc", // Consider using environment variables for security
      },
    });

    // Email details
    var mailOptions = {
      from: "zulqarnainc67@gmail.com",
      to: email, // Send email to the user's provided email
      subject: "Reset Your Password",
      text: `Click the link to reset your password: https://generate-test-frontend.vercel.app/resetPassword/${emailToken}`,

    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error("Error sending email:", error);
        return res.json({ message: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.json({ message: "Email sent successfully" });
      }
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  console.log("req.params:", req.params);
console.log("Extracted Token:", token);

  console.log("Received Token:", token); // Debugging line

  try {
    const decoded = jwt.verify(token, "My-Secret-Key"); // Remove 'await' (verify is synchronous)
    console.log("Decoded Token:", decoded); // Debugging line

    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, 10);
    
    await Usermodel.findByIdAndUpdate(id, { password: hashPassword }); // Correct findByIdAndUpdate syntax
    
    return res.json({ message: "Password updated successfully" });
  } catch (err) {
    console.error("JWT Error:", err.message);
    return res.status(400).json({ message: "Invalid or expired token" });
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