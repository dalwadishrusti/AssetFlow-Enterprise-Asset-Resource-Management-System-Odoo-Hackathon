import "./CSS/Report.css";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const utilization = [55, 85, 100, 75, 55, 88];

  const maintenancePoints = [
    { left: "5%", top: "75%" },
    { left: "20%", top: "50%" },
    { left: "35%", top: "58%" },
    { left: "50%", top: "32%" },
    { left: "65%", top: "45%" },
    { left: "80%", top: "18%" },
    { left: "95%", top: "10%" },
  ];

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="logo">
          <h2>AF</h2>
        </div>

        <button onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>

        <button onClick={() => navigate("/organization")}>
          Organization Setup
        </button>

        <button onClick={() => navigate("/assets")}>
          Assets
        </button>

        <button onClick={() => navigate("/allocation")}>
          Allocation & Transfer
        </button>

        <button onClick={() => navigate("/resource")}>
          Resource Booking
        </button>

        <button onClick={() => navigate("/maintenance")}>
          Maintenance
        </button>

        <button onClick={() => navigate("/audit")}>
          Audit
        </button>

        <button onClick={() => navigate("/report")}>
          Reports
        </button>

        <button onClick={() => navigate("/notification")} >
          Notifications
        </button>

      </div>

      {/* Main Content */}
      <div className="main">

        {/* Header */}
        <div className="header">

          <h1>AssetFlow</h1>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

        {/* Resource Page */}
        <div className="resource-page">

          <h2 className="page-title">
            Resource Analytics
          </h2>

          <div className="top-grid">

            {/* Utilization */}
            <div className="card chart-card">

              <div className="card-header">
                <h3>Utilization by Department</h3>
              </div>

              <div className="bar-chart">
                {utilization.map((height, index) => (
                  <div
                    key={index}
                    className="bar"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

            </div>

            {/* Maintenance */}
            <div className="card chart-card">

              <div className="card-header">
                <h3>Maintenance Frequency</h3>
              </div>

              <div className="line-chart">

                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke="#875A7B"
                    strokeWidth="3"
                    points="
                      5,80
                      20,55
                      35,63
                      50,35
                      65,48
                      80,18
                      95,10
                    "
                  />
                </svg>

                {maintenancePoints.map((point, index) => (
                  <span
                    key={index}
                    className="dot"
                    style={{
                      left: point.left,
                      top: point.top,
                    }}
                  />
                ))}

              </div>

            </div>

          </div>

          <div className="info-grid">

            <div className="card info-card">

              <h3>Most Used Assets</h3>

              <ul>

                <li>
                  <strong>Meeting room booked </strong>
                  <span>10 bookings this month</span>
                </li>

                

                <li>
                  <strong>Projector AF-335</strong>
                  <span>18 uses</span>
                </li>

              </ul>

            </div>

            <div className="card info-card">

              <h3>Idle Assets</h3>

              <ul>

                <li>
                  <strong>Camera AF-0301</strong>
                  <span>Unused 60+ days</span>
                </li>

                <li>
                  <strong>Chair AF-0410</strong>
                  <span>Unused 45 days</span>
                </li>

              </ul>

            </div>

          </div>

          <div className="card maintenance-card">

            <h3>
              Assets Due for Maintenance / Nearing Retirement
            </h3>

            <ul>

              <li>
                <strong>Printer</strong> — Service due in 5 days
              </li>

              <li>
                <strong>Laptop AF-0020</strong> — 4 years old, nearing retirement
              </li>

            </ul>

            

          </div>

        </div>

      </div>

    </div>
  );
};

export default Report;