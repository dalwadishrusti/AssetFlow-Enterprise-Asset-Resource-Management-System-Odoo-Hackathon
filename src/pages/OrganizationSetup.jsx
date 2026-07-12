import "./CSS/OrganizationSetup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function OrganizationSetup() {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("departments");


    const handleLogout = () => {
        navigate("/");
    };


    return (

        <div className="dashboard">


            {/* Sidebar */}

            <div className="sidebar">


                <div className="logo">

                    <h2>AF</h2>

                </div>


                <button
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </button>



                <button className="active">

                    Organization Setup

                </button>



                <button
                    onClick={() => navigate("/assets")}
                >

                    Assets

                </button>



                <button>
                    Allocation & Transfer
                </button>


                <button>
                    Resource Booking
                </button>


                <button>
                    Maintenance
                </button>


                <button>
                    Audit
                </button>


                <button>
                    Reports
                </button>


                <button>
                    Notifications
                </button>


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


                        <button className="add-btn">

                            + Add

                        </button>


                    </div>







                    {/* Tabs */}


                    <div className="tabs">


                        <button

                            className={
                                activeTab==="departments"
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
                                activeTab==="categories"
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
                                activeTab==="employees"
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
                        activeTab==="departments" &&

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
                        activeTab==="categories" &&


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

                    activeTab==="employees" &&


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


        </div>


    );

}


export default OrganizationSetup;