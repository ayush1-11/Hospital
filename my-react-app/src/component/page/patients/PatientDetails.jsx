import { useNavigate, useParams } from "react-router-dom";
import { patients } from "../../data/Patient.js";
import "./Patien.css";

export default function PatientDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const patient = patients.find(
    (patient) => patient.id === id
  );


  if (!patient) {
    return (
      <div className="not-found">

        <h2>Patient not found</h2>

        <button
          onClick={() => navigate("/patients")}
        >
          ← Back to Patients
        </button>

      </div>
    );
  }


  return (
    <div className="patient-details-page">

      {/* Header */}
      <header className="patient-details-header">

        <button
          className="back-button"
          onClick={() => navigate("/patients")}
        >
          ← Patients
        </button>

        <h1>
          Patient Profile
        </h1>

      </header>


      <main className="patient-details-container">

        {/* Patient Profile */}
        <section className="patient-profile">

          <div className="large-patient-avatar">
            {patient.name.charAt(0)}
          </div>

          <div className="patient-profile-info">

            <h2>
              {patient.name}
            </h2>

            <p>
              Patient ID:
              <strong> {patient.id}</strong>
            </p>

            <span
              className={
                patient.status === "Active"
                  ? "patient-status active"
                  : "patient-status discharged"
              }
            >
              ● {patient.status}
            </span>

          </div>

        </section>


        {/* Personal Information */}
        <section className="patient-information-card">

          <h2>
            Personal Information
          </h2>

          <div className="patient-information-grid">

            <div>
              <span>Patient ID</span>
              <strong>{patient.id}</strong>
            </div>

            <div>
              <span>Full Name</span>
              <strong>{patient.name}</strong>
            </div>

            <div>
              <span>Age</span>
              <strong>{patient.age} Years</strong>
            </div>

            <div>
              <span>Gender</span>
              <strong>{patient.gender}</strong>
            </div>

            <div>
              <span>Blood Group</span>
              <strong>{patient.bloodGroup}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{patient.phone}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{patient.email}</strong>
            </div>

            <div>
              <span>City</span>
              <strong>{patient.city}</strong>
            </div>

            <div>
              <span>Address</span>
              <strong>{patient.address}</strong>
            </div>

            <div>
              <span>Emergency Contact</span>
              <strong>{patient.emergencyContact}</strong>
            </div>

          </div>

        </section>


        {/* Medical Information */}
        <section className="patient-information-card">

          <h2>
            Current Medical Information
          </h2>

          <div className="patient-information-grid">

            <div>
              <span>Diagnosis</span>
              <strong>{patient.diagnosis}</strong>
            </div>

            <div>
              <span>Treatment</span>
              <strong>{patient.treatment}</strong>
            </div>

            <div>
              <span>Doctor</span>
              <strong>{patient.doctor}</strong>
            </div>

            <div>
              <span>Hospital</span>
              <strong>{patient.hospital}</strong>
            </div>

            <div>
              <span>Admission Date</span>
              <strong>{patient.admissionDate}</strong>
            </div>

            <div>
              <span>Discharge Date</span>
              <strong>
                {patient.dischargeDate || "Currently Admitted"}
              </strong>
            </div>

            <div>
              <span>Insurance</span>
              <strong>{patient.insurance}</strong>
            </div>

          </div>

        </section>


        {/* Medical History */}
        <section className="patient-information-card">

          <div className="history-header">

            <div>
              <h2>
                Medical History
              </h2>

              <p>
                Complete medical treatment history
              </p>
            </div>

            <span className="history-count">
              {patient.medicalHistory.length} Records
            </span>

          </div>


          <div className="medical-history-list">

            {patient.medicalHistory.map((record) => (

              <div
                className="medical-history-item"
                key={record.id}
              >

                <div className="medical-history-icon">
                  +
                </div>

                <div className="medical-history-content">

                  <div className="medical-history-top">

                    <strong>
                      {record.diagnosis}
                    </strong>

                    <span>
                      {record.date}
                    </span>

                  </div>

                  <p>
                    Treatment: {record.treatment}
                  </p>

                  <p>
                    Doctor: {record.doctor}
                  </p>

                  <p>
                    Hospital: {record.hospital}
                  </p>

                  <small>
                    {record.notes}
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