import { useNavigate } from "react-router-dom";
// import { doctors } from "../data/doctors";
import { doctors } from "../data/Docters";
import "./Doctors.css";

export default function Doctors() {

  const navigate = useNavigate();

  return (
    <div className="doctors-page">

      {/* Header */}
      <header className="doctors-header">

        <div>
          <h1>Doctors</h1>

          <p>
            Manage all registered doctors
          </p>
        </div>

        <div className="doctor-count">
          Total Doctors:
          <strong>{doctors.length}</strong>
        </div>

      </header>


      {/* Back */}
      <div className="doctors-container">

        <button
          className="back-button"
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>


        {/* Search */}
        <div className="doctor-toolbar">

          <input
            type="text"
            placeholder="Search doctor by name, ID or specialization..."
            className="doctor-search"
          />

          <button className="add-doctor-button">
            + Add Doctor
          </button>

        </div>


        {/* Doctors */}
        <div className="doctors-table-wrapper">

          <table className="doctors-table">

            <thead>
              <tr>

                <th>ID</th>

                <th>Doctor</th>

                <th>Specialization</th>

                <th>Hospital</th>

                <th>Experience</th>

                <th>Patients</th>

                <th>Status</th>

                <th>Action</th>

              </tr>
            </thead>


            <tbody>

              {doctors.map((doctor) => (

                <tr key={doctor.id}>

                  {/* ID */}
                  <td>
                    <span className="doctor-id">
                      {doctor.id}
                    </span>
                  </td>


                  {/* Doctor */}
                  <td>

                    <div className="doctor-name">

                      <div className="doctor-avatar">
                        {doctor.name.charAt(4)}
                      </div>

                      <div>
                        <strong>
                          {doctor.name}
                        </strong>

                        <small>
                          {doctor.email}
                        </small>
                      </div>

                    </div>

                  </td>


                  {/* Specialization */}
                  <td>
                    <span className="specialization">
                      {doctor.specialization}
                    </span>
                  </td>


                  {/* Hospital */}
                  <td>
                    {doctor.hospital}
                  </td>


                  {/* Experience */}
                  <td>
                    {doctor.experience}
                  </td>


                  {/* Patients */}
                  <td>
                    {doctor.patients}
                  </td>


                  {/* Status */}
                  <td>

                    <span
                      className={
                        doctor.status === "Available"
                          ? "doctor-status available"
                          : "doctor-status leave"
                      }
                    >
                      ● {doctor.status}
                    </span>

                  </td>


                  {/* Action */}
                  <td>

                    <button
                      className="view-doctor"
                      onClick={() =>
                        navigate(`/doctors/${doctor.id}`)
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

      </div>

    </div>
  );
}