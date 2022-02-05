const express = require("express");
const cors = require("cors");
const passport = require("passport");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

// Mongo DB
const connectDB = require("./db");
connectDB();

//Routes
const usersRoutes = require("./routes/user");

//Creat App Instence
const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

//Routes
app.use(usersRoutes);

// Path not Found Middleware
app.use((req, res, next) => {
  next({ status: 404, message: "Path Not Found" });
});

// Error Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
