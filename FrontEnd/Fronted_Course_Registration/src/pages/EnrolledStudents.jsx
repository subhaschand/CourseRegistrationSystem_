import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEnrolledStudents } from "../api/courseApi";

function EnrolledStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEnrolledStudents()
      .then(setStudents)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      
      <div className="page-header">
        <h1>👥 Enrolled Students</h1>
        <p>View all students currently enrolled in courses</p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : students.length === 0 ? (
        <div className="card">
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <p className="empty-state-text">No students enrolled yet</p>
          </div>
        </div>
      ) : (
        <div className="table-container card-lg animate-fade-in">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={index}>
                  <td>{s.name}</td>
                  <td>{s.emailId}</td>
                  <td>{s.courseName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EnrolledStudents;
