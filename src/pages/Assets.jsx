import "./CSS/Assets.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Maps the category dropdown labels to category_id values stored in the DB.
// Adjust these IDs if your backend uses a different mapping.
const CATEGORY_ID_MAP = {
    Laptop: 1,
    Printer: 2,
    Projector: 3
};

function Assets() {
    const navigate = useNavigate();

    const [assets, setAssets] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const [categoryFilter, setCategoryFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    const [form, setForm] = useState({
        asset_code: "",
        asset_name: "",
        category_id: 1,
        purchase_date: "",
        location: "",
        status: "Available"
    });

    const loadAssets = async () => {
        try {
            const response = await fetch("http://localhost:8000/assets");
            const data = await response.json();
            setAssets(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadAssets();
    }, []);

    const saveAsset = async () => {

        if (
            !form.asset_code ||
            !form.asset_name ||
            !form.location
        ) {
            alert("Please fill all required fields");
            return;
        }

        try {

            const response = await fetch("http://localhost:8000/assets", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(form)

            });

            if (response.ok) {

                await loadAssets();

                setShowForm(false);

                setForm({
                    asset_code: "",
                    asset_name: "",
                    category_id: 1,
                    purchase_date: "",
                    location: "",
                    status: "Available"
                });

            } else {

                const err = await response.json();

                alert(err.detail || "Unable to save asset.");

            }

        } catch (error) {

            console.error(error);

        }

    };

    const handleLogout = () => {
        navigate("/");
    };

    const clearFilters = () => {
        setSearchTerm("");
        setCategoryFilter("");
        setStatusFilter("");
        setDepartmentFilter("");
        setLocationFilter("");
    };

    // Combined filter: search box + all select dropdowns
    const filteredAssets = assets.filter((asset) => {

        // Search box: matches name, code, serial number, or QR code
        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase();

            const matchesSearch =
                (asset.asset_name && asset.asset_name.toLowerCase().includes(term)) ||
                (asset.asset_code && asset.asset_code.toLowerCase().includes(term)) ||
                (asset.serial_number && asset.serial_number.toLowerCase().includes(term)) ||
                (asset.qr_code && asset.qr_code.toLowerCase().includes(term));

            if (!matchesSearch) return false;
        }

        // Category filter
        if (categoryFilter) {
            const expectedId = CATEGORY_ID_MAP[categoryFilter];
            if (asset.category_id !== expectedId) return false;
        }

        // Status filter
        if (statusFilter && asset.status !== statusFilter) {
            return false;
        }

        // Department filter
        if (departmentFilter && asset.department !== departmentFilter) {
            return false;
        }

        // Location filter
        if (locationFilter && asset.location !== locationFilter) {
            return false;
        }

        return true;
    });

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

                <button className="active">
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
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <button
                            className="register-btn"
                            onClick={() => setShowForm(true)}
                        >
                            + Register Asset
                        </button>

                    </div>

                    {/* Filters */}

                    <div className="filter-row">

                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                        >
                            <option value="">Category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Printer">Printer</option>
                            <option value="Projector">Projector</option>
                        </select><br></br>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="">Status</option>
                            <option value="Available">Available</option>
                            <option value="Allocated">Allocated</option>
                            <option value="Reserved">Reserved</option>
                            <option value="Under Maintenance">Under Maintenance</option>
                            <option value="Lost">Lost</option>
                            <option value="Retired">Retired</option>
                        </select><br></br>

                        <select
                            value={departmentFilter}
                            onChange={(e) => setDepartmentFilter(e.target.value)}
                        >
                            <option value="">Department</option>
                            <option value="IT Engineering">IT Engineering</option>
                            <option value="HR">HR</option>
                            <option value="Finance">Finance</option>
                            <option value="Training">Training</option>
                        </select><br></br>

                        <select
                            value={locationFilter}
                            onChange={(e) => setLocationFilter(e.target.value)}
                        >
                            <option value="">Location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                            <option value="Delhi">Delhi</option>
                        </select><br></br>

                        <button
                            className="clear-filters-btn"
                            onClick={clearFilters}
                        >
                            Clear Filters
                        </button>

                    </div>


                    {
                        showForm && (

                            <div className="popup">

                                <div className="popup-content">

                                    <h2>Register Asset</h2>

                                    <input
                                        placeholder="Asset Code"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                asset_code: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        placeholder="Asset Name"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                asset_name: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="date"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                purchase_date: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        placeholder="Location"
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                location: e.target.value
                                            })
                                        }
                                    />

                                    <button onClick={saveAsset}>
                                        Save
                                    </button>

                                    <button
                                        onClick={() => setShowForm(false)}
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </div>

                        )}
                    {/* Asset Table */}

                    <div className="table-container">

                        <table>

                            <thead>

                                <tr>
                                    <th>Asset Tag</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                </tr>

                            </thead>

                            <tbody>

                                {filteredAssets.length > 0 ? (

                                    filteredAssets.map((asset) => (

                                        <tr key={asset.asset_id}>

                                            <td>{asset.asset_code}</td>

                                            <td>{asset.asset_name}</td>

                                            <td>{asset.location}</td>

                                            <td>{asset.status}</td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>
                                        <td colSpan="4" style={{ textAlign: "center" }}>
                                            No asset found
                                        </td>
                                    </tr>

                                )}

                            </tbody>

                        </table>
                    </div>

                    

                </div>
            </div>

        </div>
    );
}

export default Assets;