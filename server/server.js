const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "michael_portfolio",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    return;
  }

  console.log("Connected to MySQL!");
});

// Test route
app.get("/", (req, res) => {
  res.send("Michael Portfolio Backend is running!");
});

// Receive contact form messages
app.post("/api/messages", (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = `
    INSERT INTO messages (name, email, subject, message)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, subject, message],
    (err, result) => {
      if (err) {
        console.error("Error saving message:", err);
        return res.status(500).json({
          error: "Failed to save message",
        });
      }

      res.status(201).json({
        message: "Message saved successfully!",
      });
    }
  );
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});