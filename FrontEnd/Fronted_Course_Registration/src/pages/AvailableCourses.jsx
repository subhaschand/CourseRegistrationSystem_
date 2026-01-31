import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../api/courseApi";

function AvailableCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      
      <div className="page-header">
        <h1>📚 Available Courses</h1>
        <p>Explore our comprehensive course catalog</p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : courses.length === 0 ? (
        <div className="card">
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <p className="empty-state-text">No courses available at the moment</p>
          </div>
        </div>
      ) : (
        <div className="table-container card-lg animate-fade-in">
          <table className="table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Trainer</th>
                <th>Duration (weeks)</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c) => (
                <tr key={c.courseId}>
                  <td>{c.courseId}</td>
                  <td>{c.courseName}</td>
                  <td>{c.trainer}</td>
                  <td>{c.durationInWeeks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AvailableCourses;
