import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="dashboard">

            {/* Sidebar */}

            <div className="sidebar">

                <div className="logo">
                    <h2>AF</h2>
                    <p>AssetFlow</p>
                </div>

                <button className="active">Dashboard</button>

                <button onClick={() => navigate("/organization")}>
                    Organization Setup
                </button>

                <button onClick={() => navigate("/assets")}>
                    Assets
                </button>

                <button>Allocation & Transfer</button>

                <button>Resource Booking</button>

                <button>Maintenance</button>

                <button>Audit</button>

                <button>Reports</button>

                <button>Notifications</button>

            </div>

            {/* Main Section */}

            <div className="main">

                {/* Navbar */}

                <div className="header">

                    <h1>AssetFlow</h1>

                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

                {/* Dashboard Content */}

                <div className="content">

                    <h2>Today's Overview</h2>

                    <div className="cards">

                        <div className="card">
                            <h3>Assets Available</h3>
                            <p>128</p>
                        </div>

                        <div className="card">
                            <h3>Assets Allocated</h3>
                            <p>76</p>
                        </div>

                        <div className="card">
                            <h3>Maintenance Today</h3>
                            <p>4</p>
                        </div>

                        <div className="card">
                            <h3>Active Bookings</h3>
                            <p>9</p>
                        </div>

                        <div className="card">
                            <h3>Pending Transfers</h3>
                            <p>3</p>
                        </div>

                        <div className="card">
                            <h3>Upcoming Returns</h3>
                            <p>12</p>
                        </div>

                    </div>

                    <div className="alert">

                        <h3>Overdue Returns</h3>

                        <p>
                            Three assets are overdue for return.
                            Please take immediate action.
                        </p>

                    </div>

                    <div className="actions">

                        <button>Register Asset</button>

                        <button>Book Resource</button>

                        <button>Raise Maintenance Request</button>

                    </div>

                    <div className="activity">

                        <h2>Recent Activity</h2>

                        <ul>

                            <li>Laptop AF-0114 allocated to Priya Shah</li>

                            <li>Meeting Room B2 booked from 2:00 PM to 3:00 PM</li>

                            <li>Projector AF-0062 maintenance completed</li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;