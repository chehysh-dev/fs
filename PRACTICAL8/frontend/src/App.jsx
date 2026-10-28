import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/students";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("MERN");
  const [status, setStatus] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (err) {
      console.error("Error fetching students:", err);
      setStatus("Error loading students. Ensure backend is running.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      await axios.post(API_URL, { name, course });
      setName("");
      setStatus("Student successfully saved to MongoDB!");
      fetchStudents();
    } catch (err) {
      console.error("Error saving student:", err);
      setStatus("Error submitting data.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Practical 8: MERN API Integration</h1>
      <p style={{ color: "#666" }}>
        React Form &rarr; Axios POST &rarr; Express API &rarr; MongoDB Database &rarr; GET API &rarr; React UI
      </p>

      <form onSubmit={submitData} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", width: "60%", marginRight: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {status && <p style={{ fontSize: "14px", color: "green" }}>{status}</p>}

      <h2>Stored Students ({students.length})</h2>
      {students.length === 0 ? (
        <p>No students found. Submit a student above.</p>
      ) : (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {students.map((student) => (
            <li
              key={student._id || student.id}
              style={{
                padding: "8px",
                borderBottom: "1px solid #ddd",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{student.name}</span>
              <span style={{ color: "#888" }}>{student.course || "MERN"}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
