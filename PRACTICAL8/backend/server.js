const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/MERNDB")
  .then(() => console.log("Connected to MongoDB (MERNDB)"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema & Model
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    default: "MERN",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", StudentSchema);

// Root route
app.get("/", (req, res) => {
  res.send("REST API Working");
});

// GET: Retrieve all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST: Add new student
app.post("/students", async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      course: req.body.course || "MERN",
    });
    await student.save();
    res.status(201).json({
      message: "Student Saved",
      student,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
