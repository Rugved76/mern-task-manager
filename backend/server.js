const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");
const logger = require("./middleware/logger");
const connectDB = require('./config/connectDB')
const PORT = process.env.PORT || 8000;
const path = require('path')
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/tasks", taskRoutes);

// Load React App in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", logger, (req, res) => {
    res.send("Welcome to the home page");
  });
}

// Connect DB & start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})