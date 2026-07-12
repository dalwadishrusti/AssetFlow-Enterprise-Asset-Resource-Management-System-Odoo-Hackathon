import "./OrganizationSetup.css";
import { useNavigate } from "react-router-dom";

function OrganizationSetup() {

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

                <button className="active">
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

                {/* Page Content */}

                <div className="content">

                    <div className="top-buttons">

                        <button className="active-tab">
                            Departments
                        </button>

                        <button>Categories</button>

                        <button>Employees</button>

                        <button className="add-btn">
                            + Add
                        </button>

                    </div>

                    <div className="table-container">

                        <table>

                            <thead>

                                <tr>

                                    <th>Department</th>

                                    <th>Head</th>

                                    <th>Parent Department</th>

                                    <th>Status</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Engineering</td>

                                    <td>Aditi Rao</td>

                                    <td>--</td>

                                    <td>

                                        <span className="status active-status">
                                            Active
                                        </span>

                                    </td>

                                </tr>

                                <tr>

                                    <td>Facilities</td>

                                    <td>Rohan Mehta</td>

                                    <td>--</td>

                                    <td>

                                        <span className="status active-status">
                                            Active
                                        </span>

                                    </td>

                                </tr>

                                <tr>

                                    <td>Field Ops (East)</td>

                                    <td>Sana Iqbal</td>

                                    <td>Field Ops</td>

                                    <td>

                                        <span className="status inactive-status">
                                            Inactive
                                        </span>

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                    <div className="note">

                        Editing a department here also updates the department list
                        used in Asset Registration and Asset Allocation.

                    </div>

                </div>

            </div>

        </div>
    );
}

export default OrganizationSetup;