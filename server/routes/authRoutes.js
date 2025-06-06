const express = require("express")
const router = express.Router();
const {register,login,forgotPassword, resetPassword,dashboardPage} = require("../controllers/authController")
const Usermodel = require("../models/Usermodel")

router.post("/register",register)
router.post("/login",login);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password/:token",resetPassword);
router.get("/dashboard",dashboardPage)

// router.get('/verify-email/:token', async (req, res) => {
//   const { token } = req.params;

//   try {
//     const user = await Usermodel.findOne({
//       verifyToken: token,
//       verifyTokenExpiry: { $gt: Date.now() },
//     });

//     if (!user) {
//       return res.status(400).json({ message: "Invalid or expired verification token" });
//     }

//     user.isVerified = true;
//     user.verifyToken = undefined;
//     user.verifyTokenExpiry = undefined;
//     await user.save();

//     res.json({ message: "Email verified successfully. You can now login." });
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


module.exports = router