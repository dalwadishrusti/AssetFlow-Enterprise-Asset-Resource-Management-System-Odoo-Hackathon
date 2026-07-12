import "./CSS/OrganizationSetup.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function OrganizationSetup() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("departments");
    const [departments, setDepartments] = useState(() => {
        const savedData = localStorage.getItem("departments");

        if (savedData) {
            return JSON.parse(savedData);
        }

        return [
            {
                id: 1,
                name: "Engineering",
                head: "Aditi Rao",
                employees: 24,
                status: "Active"
            },
            {
                id: 2,
                name: "Facilities",
                head: "Rohan Mehta",
                employees: 12,
                status: "Active"
            },
            {
                id: 3,
                name: "Field Operations",
                head: "Sana Iqbal",
                employees: 8,
                status: "Inactive"
            }
        ];
    });
    useEffect(() => {
        localStorage.setItem(
            "departments",
            JSON.stringify(departments)
        );
    }, [departments]);


    const handleLogout = () => {
        navigate("/");
    };

    const [showModal, setShowModal] = useState(false);

    const [newDepartment, setNewDepartment] = useState({
        name: "",
        head: "",
        employees: "",
        status: "Active",
    });

    const addDepartment = () => {

        if (
            newDepartment.name === "" ||
            newDepartment.head === "" ||
            newDepartment.employees === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        setDepartments([
            ...departments,
            {
                id: Date.now(),
                ...newDepartment,
            },
        ]);

        setNewDepartment({
            name: "",
            head: "",
            employees: "",
            status: "Active",
        });

        setShowModal(false);
    };


    return (

        <div className="dashboard">

            <div className="sidebar">


                <div className="logo">
                    <h2>AF</h2>
                </div>


                <button onClick={() => navigate("/dashboard")}>
                    Dashboard
                </button>



                <button className="active" onClick={() => navigate("/organization")}>
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


                <button>
                    Maintenance
                </button>


                <button>
                    Audit
                </button>


                <button onClick={()=>navigate("/report")}>Reports</button>


                <button onClick={() => navigate("/notification")}>Notifications</button>


            </div>






            {/* Main */}

            <div className="main">



                <div className="header">

                    <h1>
                        AssetFlow
                    </h1>


                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >

                        Logout

                    </button>


                </div>








                <div className="org-content">



                    {/* Page Header */}


                    <div className="org-header">


                        <h1>
                            Organization Setup
                        </h1>


                        <button
                            className="add-btn"
                            onClick={() => setShowModal(true)}
                        >
                            + Add
                        </button>


                    </div>







                    {/* Tabs */}


                    <div className="tabs">


                        <button

                            className={
                                activeTab === "departments"
                                    ? "tab-active"
                                    : ""
                            }

                            onClick={() =>
                                setActiveTab("departments")
                            }

                        >

                            Departments

                        </button>





                        <button

                            className={
                                activeTab === "categories"
                                    ? "tab-active"
                                    : ""
                            }

                            onClick={() =>
                                setActiveTab("categories")
                            }

                        >

                            Categories

                        </button>






                        <button

                            className={
                                activeTab === "employees"
                                    ? "tab-active"
                                    : ""
                            }

                            onClick={() =>
                                setActiveTab("employees")
                            }

                        >

                            Employees

                        </button>



                    </div>









                    {/* Department View */}


                    {
                        activeTab === "departments" &&

                        <>


                            <div className="summary">


                                <div className="summary-card">

                                    <h3>
                                        Total Departments
                                    </h3>

                                <p>
                                    12
                                </p>

                                </div>



                                <div className="summary-card">

                                    <h3>
                                        Active Departments
                                    </h3>

                                <p>
                                    10
                                </p>

                                </div>



                                <div className="summary-card">

                                    <h3>
                                        Employees
                                    </h3>

                                <p>
                                    86
                                </p>

                            </div>


                            </div>






                            <div className="table-box">


                                <div className="box-title">

                                    🏢 Departments

                                </div>




                                <table>


                                    <thead>

                                        <tr>

                                            <th>
                                                Department
                                            </th>

                                            <th>
                                                Head
                                            </th>

                                            <th>
                                                Employees
                                            </th>

                                            <th>
                                                Status
                                            </th>

                                        </tr>

                                    </thead>



                                    <tbody>


                                <tr>

                                    <td>
                                        Engineering
                                    </td>

                                    <td>
                                        Aditi Rao
                                    </td>

                                    <td>
                                        24
                                    </td>

                                    <td>
                                        <span className="status active-status">
                                            Active
                                        </span>
                                    </td>

                                </tr>





                                <tr>

                                    <td>
                                        Facilities
                                    </td>

                                    <td>
                                        Rohan Mehta
                                    </td>

                                    <td>
                                        12
                                    </td>

                                    <td>
                                        <span className="status active-status">
                                            Active
                                        </span>
                                    </td>

                                </tr>





                                <tr>

                                    <td>
                                        Field Operations
                                    </td>

                                    <td>
                                        Sana Iqbal
                                    </td>

                                    <td>
                                        8
                                    </td>

                                    <td>
                                        <span className="status inactive-status">
                                            Inactive
                                        </span>
                                    </td>

                                </tr>



                                    </tbody>


                                </table>



                            </div>


                        </>

                    }









                    {/* Categories View */}


                    {
                        activeTab === "categories" &&


                        <div className="table-box">


                            <div className="box-title">

                                📦 Asset Categories

                            </div>



                            <table>


                                <thead>

                                    <tr>

                                        <th>
                                            Category
                                        </th>


                                        <th>
                                            Type
                                        </th>


                                        <th>
                                            Assets
                                        </th>


                                    </tr>

                                </thead>



                                <tbody>


                                    <tr>

                                        <td>
                                            Laptop
                                        </td>

                                        <td>
                                            IT Equipment
                                        </td>

                                        <td>
                                            45
                                        </td>

                                    </tr>



                                    <tr>

                                        <td>
                                            Vehicles
                                        </td>

                                        <td>
                                            Transport
                                        </td>

                                        <td>
                                            18
                                        </td>

                                    </tr>


                                    <tr>

                                        <td>
                                            Furniture
                                        </td>

                                        <td>
                                            Office
                                        </td>

                                        <td>
                                            70
                                        </td>

                                    </tr>



                                </tbody>


                            </table>


                        </div>


                    }










                    {/* Employees View */}


                    {

                        activeTab === "employees" &&


                        <div className="employee-grid">


                            <div className="employee-card">

                                <div className="avatar">
                                    AR
                                </div>

                                <h3>
                                    Aditi Rao
                                </h3>

                                <p>
                                    Engineering
                                </p>


                            </div>





                            <div className="employee-card">


                                <div className="avatar">
                                    RM
                                </div>


                                <h3>
                                    Rohan Mehta
                                </h3>


                                <p>
                                    Facilities
                                </p>


                            </div>






                            <div className="employee-card">


                                <div className="avatar">
                                    SI
                                </div>


                                <h3>
                                    Sana Iqbal
                                </h3>


                                <p>
                                    Field Operations
                                </p>


                            </div>



                        </div>


                    }



                </div>


            </div>

            {
                showModal && (

                    <div className="modal-overlay">

                        <div className="modal-box">

                            <h2>Add Department</h2>

                            <input
                                type="text"
                                placeholder="Department Name"
                                value={newDepartment.name}
                                onChange={(e) =>
                                    setNewDepartment({
                                        ...newDepartment,
                                        name: e.target.value
                                    })
                                }
                            />

                            <input
                                type="text"
                                placeholder="Department Head"
                                value={newDepartment.head}
                                onChange={(e) =>
                                    setNewDepartment({
                                        ...newDepartment,
                                        head: e.target.value
                                    })
                                }
                            />

                            <input
                                type="number"
                                placeholder="Employees"
                                value={newDepartment.employees}
                                onChange={(e) =>
                                    setNewDepartment({
                                        ...newDepartment,
                                        employees: e.target.value
                                    })
                                }
                            />

                            <select
                                value={newDepartment.status}
                                onChange={(e) =>
                                    setNewDepartment({
                                        ...newDepartment,
                                        status: e.target.value
                                    })
                                }
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>

                            <div className="modal-buttons">

                                <button onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>

                                <button onClick={addDepartment}>
                                    Save
                                </button>

                            </div>

                        </div>

                    </div>

                )
            }


        </div>


    );

}


export default OrganizationSetup;