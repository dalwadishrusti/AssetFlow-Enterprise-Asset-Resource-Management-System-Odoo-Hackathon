import "./CSS/Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Dashboard() {
    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const [dashboard, setDashboard] = useState({
        assetsAvailable: 0,
        assetsAllocated: 0,
        maintenanceToday: 0,
        activeBookings: 0,
        pendingTransfers: 0,
        upcomingReturns: 0,
        overdueReturns: 0,
        recentActivity: []
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const response = await fetch("http://localhost:8000/dashboard");

            const data = await response.json();

            setDashboard(data);
        } catch (error) {
            console.error("Error fetching dashboard:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        navigate("/");
    };

    if (loading) {
        return (
            <div className="dashboard">
                <div className="loading">
                    Loading Dashboard...
                </div>
            </div>
        );
    }

    return (
        <div className={`dashboard ${menuOpen ? "menu-open" : ""}`}>

            {/* Sidebar */}

            <div className="sidebar">

                <div
                    className="logo"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <h2>AF</h2>
                </div>

                <button className="active">Dashboard</button>

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

                <button onClick={()=>navigate("/report")}>Reports</button>

                <button onClick={() => navigate("/notification")}>Notifications</button>

            </div>

            {/* Main */}

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

                {/* Content */}

                <div className="content">

                    <h2>Today's Overview</h2>

                    <div className="cards">

                        <div className="card">
                            <h3>Assets Available</h3>
                            <p>{dashboard.assetsAvailable}</p>
                        </div>

                        <div className="card">
                            <h3>Assets Allocated</h3>
                            <p>2</p>
                        </div>

                        <div className="card">
                            <h3>Maintenance Today</h3>
                            <p>1</p>
                        </div>

                        <div className="card">
                            <h3>Active Bookings</h3>
                            <p>1</p>
                        </div>

                        <div className="card">
                            <h3>Pending Transfers</h3>
                            <p>0</p>
                        </div>

                        <div className="card">
                            <h3>Upcoming Returns</h3>
                            <p>2</p>
                        </div>

                    </div>

                    {/* Alert */}

                    <div className="alert">

                        <h3>Overdue Returns</h3>

                        <p>
                            {dashboard.overdueReturns} assets are overdue for return.
                            Please take immediate action.
                        </p>

                    </div>

                    {/* Quick Actions */}

                    <div className="actions">

                        <button onClick={() => navigate("/assets")}>
                            Register Asset
                        </button>

                        <button onClick={() => navigate("/resource")}>
                            Book Resource
                        </button>

                        <button onClick={() => navigate("/maintenance")}>
                            Raise Maintenance Request
                        </button>

                    </div>


                </div>

            </div>

        </div>
    );
}

export default Dashboard;