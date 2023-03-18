import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Fragment } from "react";
import Home from "./Components/Home";
import AdminLogin from "./Components/AdminLogin";
import Navbar from "./Components/Navbar";
import StudentLogin from "./Components/StudentLogin";
import Login from "./Components/Login";
import FacultyLogin from "./Components/FacultyLogin";
import ProjectDashborad from "./Components/ProjectDashboard";
import AddProject from "./Components/AddProject";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/faculty" element={<FacultyLogin />} />
          <Route path="/projectdashboard" element={<ProjectDashborad />} />
          <Route path="/addproject" element={<AddProject />} />
         

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;