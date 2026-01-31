import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-icon">🎓</div>
        <h1 className="home-title">Course Registration</h1>
        <p className="home-subtitle">
          Manage your courses, track enrollments, and streamline your learning journey
        </p>
        
        <div className="home-cards">
          <Link to="/register" className="home-card animate-fade-in animate-fade-in-delay-1">
            <div className="home-card-icon">📝</div>
            <h3 className="home-card-title">Register a Course</h3>
            <p className="home-card-desc">Enroll in new courses and expand your skills</p>
          </Link>

          <Link to="/courses" className="home-card animate-fade-in animate-fade-in-delay-2">
            <div className="home-card-icon">📚</div>
            <h3 className="home-card-title">Available Courses</h3>
            <p className="home-card-desc">Browse all available courses and their details</p>
          </Link>

          <Link to="/enrolled" className="home-card animate-fade-in animate-fade-in-delay-3">
            <div className="home-card-icon">👥</div>
            <h3 className="home-card-title">Enrolled Students</h3>
            <p className="home-card-desc">View all students currently enrolled in courses</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
