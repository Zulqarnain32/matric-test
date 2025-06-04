// server/app.js
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const questionRoutes = require('./routes/questionRoutes');
const pdfRoutes = require('./routes/pdfRoutes'); // Add this line
const userRoutes = require("./routes/userRoutes")
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth20").Strategy;
const Usermodel = require("./models/UserModel")


const clientId =
  "889302706488-e4t4u2vfa7rh48s7hokbk2admd38r53l.apps.googleusercontent.com";
const clientSecret = "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";


const app = express();

app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);

// app.use(express.json({ limit: '10mb' })); // Increase payload limit for PDFs
app.use(express.json()); 
dbConnect();



app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/pdfs', pdfRoutes); 
app.use('/api/users', userRoutes); 

 // Setup Session
  app.use(
    session({
      secret: "123456789",
      resave: false,
      saveUninitialized: true,
    })
  );

  //Setup Passport
  app.use(passport.initialize());
  app.use(passport.session());

   passport.use(
    new OAuth2Strategy(
      {
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: "http://localhost:5000/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        try {
          let user = await Usermodel.findOne({ googleId: profile.id });
          if (!user) {
            user = new Usermodel({
              googleId: profile.id,
              displayName: profile.displayName,
              image: profile.photos[0].value,
              email: profile.emails[0].value,
            });
            await user.save();
          }
          return done(null, user);
        } catch (error) {
          return done(error, null);
        }
      }
    )
  );
  

    passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:5173/generate-test",
      failureRedirect: "http://localhost:5173/login",
    })
  );
  
  app.get("/login/success", async (req, res) => {
    console.log("request" + req.user);
    return res.json({ message: req.user });
  });

    // logout the user 
  app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: "Logout failed", error: err });
        }
        req.session.destroy(() => {
            res.clearCookie("connect.sid"); // Clear session cookie
            res.status(200).json({ message: "Logged out successfully" });
        });
    });
});



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));