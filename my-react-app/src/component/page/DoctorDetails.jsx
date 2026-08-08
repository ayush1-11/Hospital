import { useNavigate, useParams } from "react-router-dom";
// import { doctors } from "../data/doctors";
import { doctors } from "../data/Docters";
import "./Doctors.css";

export default function DoctorDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const doctor = doctors.find(
    (doctor) => doctor.id === id
  );


  if (!doctor) {
    return (
      <div className="not-found">

        <h2>Doctor not found</h2>

        <button
          onClick={() => navigate("/doctors")}
        >
          ← Back to Doctors
        </button>

      </div>
    );
  }


  return (
    <div className="doctor-details-page">

      {/* Header */}
      <header className="details-header">

        <button
          className="back-button"
          onClick={() => navigate("/doctors")}
        >
          ← Doctors
        </button>

        <h1>
          Doctor Profile
        </h1>

      </header>


      <main className="details-container">

        {/* Profile */}
        <section className="doctor-profile">

          <div className="large-doctor-avatar">
            {doctor.name.charAt(4)}
          </div>

          <div className="doctor-profile-info">

            <h2>
              {doctor.name}
            </h2>

            <p className="doctor-specialization">
              {doctor.specialization}
            </p>

            <p>
              Doctor ID:
              <strong> {doctor.id}</strong>
            </p>

            <span
              className={
                doctor.status === "Available"
                  ? "doctor-status available"
                  : "doctor-status leave"
              }
            >
              ● {doctor.status}
            </span>

          </div>

        </section>


        {/* Information */}
        <section className="information-card">

          <h2>
            Personal & Professional Information
          </h2>


          <div className="information-grid">

            <div>
              <span>Email</span>
              <strong>{doctor.email}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{doctor.phone}</strong>
            </div>

            <div>
              <span>Specialization</span>
              <strong>{doctor.specialization}</strong>
            </div>

            <div>
              <span>Qualification</span>
              <strong>{doctor.qualification}</strong>
            </div>

            <div>
              <span>Experience</span>
              <strong>{doctor.experience}</strong>
            </div>

            <div>
              <span>Hospital</span>
              <strong>{doctor.hospital}</strong>
            </div>

            <div>
              <span>City</span>
              <strong>{doctor.city}</strong>
            </div>

            <div>
              <span>Joining Date</span>
              <strong>{doctor.joiningDate}</strong>
            </div>

            <div>
              <span>Consultation Fee</span>
              <strong>₹{doctor.consultationFee}</strong>
            </div>

            <div>
              <span>Total Patients</span>
              <strong>{doctor.patients}</strong>
            </div>

          </div>

        </section>


        {/* History */}
        <section className="information-card">

          <div className="history-header">

            <div>
              <h2>
                Doctor History
              </h2>

              <p>
                Professional activity and hospital history
              </p>
            </div>

            <span className="history-count">
              {doctor.history.length} Records
            </span>

          </div>


          {/* History array map */}
          <div className="history-list">

            {doctor.history.map((history) => (

              <div
                className="history-item"
                key={history.id}
              >

                <div className="history-dot">
                  ✓
                </div>

                <div className="history-content">

                  <div className="history-top">

                    <strong>
                      {history.type}
                    </strong>

                    <span>
                      {history.date}
                    </span>

                  </div>

                  <p>
                    {history.description}
                  </p>

                  <small>
                    Hospital: {history.hospital}
                  </small>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}