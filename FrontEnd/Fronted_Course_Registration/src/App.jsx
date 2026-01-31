import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AvailableCourses from "./pages/AvailableCourses";
import EnrolledStudents from "./pages/EnrolledStudents";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<AvailableCourses />} />
        <Route path="/enrolled" element={<EnrolledStudents />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
