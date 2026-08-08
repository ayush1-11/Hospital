import { useNavigate } from "react-router-dom";
// import { patients } from "../data/patients";
import { patients } from "../../data/Patient";
import "./Patien.css";

export default function Patients() {
  const navigate = useNavigate();

  return (
    <div className="patients-page">

      {/* Header */}
      <header className="patients-header">

        <div>
          <h1>Patients</h1>

          <p>
            Manage all registered patients
          </p>
        </div>

        <div className="patient-count">
          Total Patients:
          <strong>{patients.length}</strong>
        </div>

      </header>


      <main className="patients-container">

        {/* Back */}
        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        {/* Toolbar */}
        <div className="patient-toolbar">

          <input
            type="text"
            placeholder="Search patient by name, ID or diagnosis..."
            className="patient-search"
          />

          <button className="add-patient-button">
            + Add Patient
          </button>

        </div>


        {/* Patient Table */}
        <div className="patients-table-wrapper">

          <table className="patients-table">

            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Blood Group</th>
                <th>Diagnosis</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              {patients.map((patient) => (

                <tr key={patient.id}>

                  <td>
                    <span className="patient-id">
                      {patient.id}
                    </span>
                  </td>


                  <td>

                    <div className="patient-name">

                      <div className="patient-avatar">
                        {patient.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {patient.name}
                        </strong>

                        <small>
                          {patient.email}
                        </small>
                      </div>

                    </div>

                  </td>


                  <td>
                    {patient.age}
                  </td>


                  <td>
                    {patient.gender}
                  </td>


                  <td>

                    <span className="blood-group">
                      {patient.bloodGroup}
                    </span>

                  </td>


                  <td>
                    {patient.diagnosis}
                  </td>


                  <td>
                    {patient.doctor}
                  </td>


                  <td>

                    <span
                      className={
                        patient.status === "Active"
                          ? "patient-status active"
                          : "patient-status discharged"
                      }
                    >
                      ● {patient.status}
                    </span>

                  </td>


                  <td>

                    <button
                      className="view-patient"
                      onClick={() =>
                        navigate(`/Patients/${patient.id}`)
                      }
                    >
                      View →
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}