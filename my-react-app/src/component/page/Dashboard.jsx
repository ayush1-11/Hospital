import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const hospitals = [
  {
    name: "Modern Hospital",
    type: "Healthcare & Medical Center",
    location: "Pune, Maharashtra",
    doctors: 48,
    patients: 126,
    emergency: 8,
    beds: "32 / 120",
    status: "Open",
    color: "blue",
  },
  {
    name: "City Care Hospital",
    type: "Multi-Speciality Hospital",
    location: "Mumbai, Maharashtra",
    doctors: 72,
    patients: 184,
    emergency: 12,
    beds: "18 / 150",
    status: "Open",
    color: "green",
  },
  {
    name: "LifeCare Medical Center",
    type: "Advanced Medical Care",
    location: "Nashik, Maharashtra",
    doctors: 36,
    patients: 98,
    emergency: 5,
    beds: "6 / 90",
    status: "Busy",
    color: "purple",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div>
        {/* Header */}
        <header className="dashboard-header">
          <div className="brand">
            <div className="brand-icon">🏥</div>

            <div>
              <h1>Hospital Management</h1>
              <p>Healthcare Dashboard</p>
            </div>
          </div>

          <div className="header-right">
            <div className="notification">🔔</div>

            <div className="profile">
              <div className="profile-avatar">A</div>

              <div className="profile-info">
                <strong>Admin</strong>
                <span>Administrator</span>
              </div>
            </div>

            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Welcome */}
          <div className="welcome">
            <div>
              <h2>Welcome back, Admin 👋</h2>
              <p>Manage hospitals, doctors, patients and appointments.</p>
            </div>

            <button className="add-button">+ Add Hospital</button>
          </div>

          {/* Statistics */}
          <div className="stats-grid">
            <div
              className="stat-card clickable-card"
              onClick={() => navigate("/doctors")}
            >
              <div className="stat-icon blue-icon">👨‍⚕️</div>

              <div>
                <span>Total Doctors</span>
                <strong>256</strong>
                <small>View all doctors →</small>
              </div>
            </div>

            <div
              className="stat-card clickable-card"
              onClick={() => navigate("/Patients")}
            >
              <div className="stat-icon green-icon">👥</div>

              <div>
                <span>Total Patients</span>
                <strong>500</strong>
                <small>+18% this month</small>
                <small>View all Patients →</small>
              </div>
            </div>

            <div className="stat-card clickable-card">
              <div className="stat-icon orange-icon">📅</div>

              <div>
                <span>Appointments</span>
                <strong>342</strong>
                <small>24 today</small>
              </div>
            </div>

            <div className="stat-card clickable-card">
              <div className="stat-icon purple-icon">🏥</div>

              <div>
                <span>Total Hospitals</span>
                <strong>12</strong>
                <small>All active</small>
              </div>
            </div>
          </div>

          {/* Hospital Section */}
          <div className="section-header">
            <div>
              <h2>Hospitals</h2>
              <p>Manage your registered hospitals</p>
            </div>

            <button className="view-all">View All →</button>
          </div>

          {/* Hospital Cards */}
          <div className="hospital-grid">
            {hospitals.map((hospital) => (
              <div className="hospital-card" key={hospital.name}>
                {/* Card Header */}
                <div className={`hospital-header ${hospital.color}`}>
                  <div className="hospital-title">
                    <div className="hospital-icon">🏥</div>

                    <div>
                      <h3>{hospital.name}</h3>
                      <p>{hospital.type}</p>
                    </div>
                  </div>

                  <span className={`status ${hospital.status.toLowerCase()}`}>
                    ● {hospital.status}
                  </span>
                </div>

                {/* Card Body */}
                <div className="hospital-body">
                  <div className="hospital-row">
                    <span>📍 Location</span>
                    <strong>{hospital.location}</strong>
                  </div>

                  <div className="hospital-row">
                    <span>👨‍⚕️ Doctors</span>
                    <strong>{hospital.doctors}</strong>
                  </div>

                  <div className="hospital-row">
                    <span>👥 Patients Today</span>
                    <strong>{hospital.patients}</strong>
                  </div>

                  <div className="hospital-row">
                    <span>🚑 Emergency</span>
                    <strong className="emergency">
                      {hospital.emergency} Cases
                    </strong>
                  </div>

                  {/* Beds */}
                  <div className="beds-section">
                    <div className="beds-header">
                      <span>Available Beds</span>
                      <strong>{hospital.beds}</strong>
                    </div>

                    <div className="progress">
                      <div
                        className={`progress-bar ${hospital.color}`}
                        style={{
                          width:
                            hospital.name === "Modern Hospital"
                              ? "73%"
                              : hospital.name === "City Care Hospital"
                                ? "88%"
                                : "93%",
                        }}
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <button className="details-button">
                    View Hospital Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
