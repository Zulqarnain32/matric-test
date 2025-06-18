const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const userRoutes = require("./routes/userRoutes")
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const Usermodel = require("./models/UserModel")
const MongoStore = require("connect-mongo");
const app = express();

// ✅ Required for secure cookies on Vercel
app.set("trust proxy", 1);

app.use(
  cors({
    // origin:["http://localhost:5173"],
    origin: ["https://generate-test-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); 
dbConnect();

// 🔐 Google credentials
const clientId = "254722299201-tsq484ideued86b45paommrvcui2lgad.apps.googleusercontent.com";
const clientSecret = "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";

// 🥠 Session config

app.use(
  session({
    secret: "123456789",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://zulqarnainc67:zsIO8lAaSjXJlIdS@cluster0.z0diyyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      collectionName: "sessions",
    }),
    cookie: {
      secure: true,
      sameSite: "none",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// 🛂 Passport setup
app.use(passport.initialize());
app.use(passport.session());

// 🧠 Strategy
passport.use(
  new OAuth2Strategy(
    {
      clientID: clientId,
      clientSecret: clientSecret,
      callbackURL: "https://generate-test-backend.vercel.app/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await Usermodel.findOne({ googleId: profile.id });
        if (!user) {
          user = new Usermodel({
            googleId: profile.id,
            displayName: profile.displayName,
            image: profile.photos[0].value,
            email: profile.emails[0].value,
            loginCount: 1,
            lastLoginDate: new Date(),
            isVerified: true,
          });
        } else {
          user.loginCount = (user.loginCount || 0) + 1;
          user.lastLoginDate = new Date();
        }
        await user.save();
        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Usermodel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/users', userRoutes);

app.get("/me", (req, res) => {
  console.log("Session:", req.session);
  console.log("User:", req.user);
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

// 🧭 Google OAuth entry point
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// 🛑 Manual redirect to preserve Set-Cookie
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "https://generate-test-frontend.vercel.app/login",
  }),
  (req, res) => {
    res.redirect("https://generate-test-frontend.vercel.app/generate-test");
  }
);

// 🧪 Login success check
app.get("/login/success", (req, res) => {
  if (req.user) {
    return res.status(200).json({
      message: "Login successful",
      user: req.user,
    });
  } else {
    return res.status(401).json({ message: "Not authorized" });
  }
});

// 🔓 Logout
app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err });
    }
    req.session.destroy(() => {
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});

// 🔧 Health check
app.get("/", (req, res) => {
  res.send("backend is working");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
