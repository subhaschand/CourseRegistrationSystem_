import { useState } from "react";
import { Link } from "react-router-dom";
import { registerCourse } from "../api/courseApi";

function Register() {
  const [form, setForm] = useState({
    name: "",
    emailId: "",
    courseName: "Java Essentials"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerCourse(form);
    alert("Course registered successfully!");
  };

  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      
      <div className="page-header">
        <h1>📝 Register for a Course</h1>
        <p>Fill in your details to enroll in a course</p>
      </div>

      <div className="card animate-fade-in">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-input"
              name="emailId"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Select Course</label>
            <select className="form-select" name="courseName" onChange={handleChange}>
              <option>Java Essentials</option>
              <option>Python for ML</option>
              <option>Spring Boot</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            🚀 Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
