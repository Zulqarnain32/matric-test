const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  googleId: { type: String },
  displayName: { type: String },
  image: { type: String },
  role: { type: String, default: "user", enum: ["admin", "manager", "user"] },
});

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
