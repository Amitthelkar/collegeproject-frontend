import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Fragment } from "react";
import Home from "./Components/Home";
import AdminLogin from "./Components/AdminLogin";
import Navbar from "./Components/Navbar";
import StudentLogin from "./Components/StudentLogin";
import Login from "./Components/Login";
import FacultyLogin from "./Components/FacultyLogin";
import AddProject from "./Components/AddProject";
import NewIdea from "./Components/NewIdea";
import Registration from "./Components/Registration";
import StudentDashboard from "./Components/StudentDashboard";
import FacultyDashboard from "./Components/FacultyDashboard";
import ApproverDashBoard from "./Components/ApproverDashboard";
import Invite from "./Components/Invite";
import ViewInvitation from "./Components/ViewInvitation";
import ConfirmGroup from "./Components/ConfirmGroup";
import CreateProject from "./Components/CreateProject";
import ConfirmProject from "./Components/ConfirmProject";


// import RegistrationFrom from "./Components/RegistrationForm";

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
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/facultydashboard" element={<FacultyDashboard />} />
          <Route path="/newidea" element={<NewIdea />} />
          <Route path="/register/student" element={<Registration />} />
          <Route path="/approverdashboard" element={<ApproverDashBoard />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/viewinvites" element={<ViewInvitation />} />
          <Route path="/confirmgrp" element={<ConfirmGroup />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/confirmproject" element={<ConfirmProject />} />
          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;