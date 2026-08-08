import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
import Login from "./component/page/login";
// import Dashboard from ".";
import Dashboard from "./component/page/Dashboard";
import DoctorDetails from "./component/page/DoctorDetails";
import Doctors from "./component/page/Docters";
import Patients from "./component/page/patients/Patient";
import PatientDetails from "./component/page/patients/PatientDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Unknown URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route
          path="/DoctorDetails"
          element={<DoctorDetails to="/" replace />}
        /> */}
        <Route path="/doctors/:id" element={<DoctorDetails />} />

        <Route path="/Doctors" element={<Doctors to="/" replace />} />
        <Route path="/Patients" element={<Patients to="/" replace />} />
        <Route path="/Patients/:id" element={<PatientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
