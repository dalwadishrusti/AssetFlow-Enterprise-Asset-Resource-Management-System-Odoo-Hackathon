// import "./Assets.css";
import { useNavigate } from "react-router-dom";

function Assets() {
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

                <button onClick={() => navigate("/dashboard")}>
                    Dashboard
                </button>

                <button onClick={() => navigate("/organization")}>
                    Organization Setup
                </button>

                <button className="active">
                    Assets
                </button>

                <button>Allocation & Transfer</button>
                <button>Resource Booking</button>
                <button>Maintenance</button>
                <button>Audit</button>
                <button>Reports</button>
                <button>Notifications</button>

            </div>

            {/* Main */}
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

                {/* Content */}

                <div className="content">

                    {/* Search Bar + Register Button */}

                    <div className="top-search">

                        <input
                            type="text"
                            placeholder="Search by Asset Tag, Serial Number or QR Code..."
                            className="search-box"
                        />

                        <button className="register-btn">
                            + Register Asset
                        </button>

                    </div>

                    {/* Filters */}

                    <div className="filter-row">

                        <select>
                            <option>Category</option>
                            <option>Laptop</option>
                            <option>Printer</option>
                            <option>Projector</option>
                        </select>

                        <select>
                            <option>Status</option>
                            <option>Available</option>
                            <option>Allocated</option>
                            <option>Reserved</option>
                            <option>Under Maintenance</option>
                            <option>Lost</option>
                            <option>Retired</option>
                        </select>

                        <select>
                            <option>Department</option>
                            <option>Engineering</option>
                            <option>HR</option>
                            <option>Finance</option>
                        </select>

                        <select>
                            <option>Location</option>
                            <option>Mumbai</option>
                            <option>Pune</option>
                            <option>Delhi</option>
                        </select>

                    </div>

                    {/* Asset Table */}

                    <div className="table-container">

                        <table>

                            <thead>

                                <tr>

                                    <th>Asset Tag</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Serial Number</th>
                                    <th>Department</th>
                                    <th>Location</th>
                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>AF-0001</td>
                                    <td>Dell Latitude 7420</td>
                                    <td>Laptop</td>
                                    <td>DL74201234</td>
                                    <td>Engineering</td>
                                    <td>Mumbai</td>

                                    <td>
                                        <span className="status available">
                                            Available
                                        </span>
                                    </td>

                                </tr>

                                <tr>

                                    <td>AF-0002</td>
                                    <td>HP LaserJet Pro</td>
                                    <td>Printer</td>
                                    <td>HP887733</td>
                                    <td>Admin</td>
                                    <td>Pune</td>

                                    <td>
                                        <span className="status allocated">
                                            Allocated
                                        </span>
                                    </td>

                                </tr>

                                <tr>

                                    <td>AF-0003</td>
                                    <td>Epson Projector</td>
                                    <td>Projector</td>
                                    <td>EP009977</td>
                                    <td>Training</td>
                                    <td>Delhi</td>

                                    <td>
                                        <span className="status maintenance">
                                            Under Maintenance
                                        </span>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    {/* Asset History */}

                    <div className="history-section">

                        <div className="history-card">

                            <h3>Allocation History</h3><br></br>

                            <ul>

                                <li>15 Jul 2026 - Allocated to Rahul Sharma</li>

                                <li>12 Jul 2026 - Returned by Sneha Patel</li>

                            </ul>

                        </div>

                        <div className="history-card">

                            <h3>Maintenance History</h3><br></br>

                            <ul>

                                <li>02 Jul 2026 - Battery Replaced</li>

                                <li>18 Jun 2026 - Annual Health Check</li>

                            </ul>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Assets;