import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/MaintenanceManagement.css";



const MaintenanceManagement = () => {
    const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
};



    const [assets, setAssets] = useState([

        {
            id: "AF-0062",
            name: "Projector",
            status: "Available"
        },

        {
            id: "AF-0078",
            name: "Computer",
            status: "Available"
        },

        {
            id: "AF-897",
            name: "Printer",
            status: "Available"
        },
         {
            id: "AF-127",
            name: "Keyboard",
            status: "Available"
        }

    ]);




    const technicians = [

        "R Varma",
        "Ankit Sharma",
        "Priya Patel"

    ];




    const [requests, setRequests] = useState([

        {
            id: "AF-0062",
            issue: "Projector not turning on",
            priority: "High",
            status: "Pending",
            technician: ""
        },


        {
            id: "AF-0078",
            issue: "Forklift noisy",
            priority: "Medium",
            status: "Technician Assigned",
            technician: "R Varma"
        },

        {
            id: "AF-897",
            issue: "Printer jam parts ordered",
            priority: "Low",
            status: "In Progress",
            technician: ""
        },


        {
            id: "AF-373",
            issue: "Chair repair completed",
            priority: "Low",
            status: "Resolved",
            technician: ""
        }


    ]);





    const [form, setForm] = useState({

        asset: "",
        issue: "",
        priority: "High",
        photo: ""

    });







    const [history, setHistory] = useState([]);







    const handleChange = (e) => {


        setForm({

            ...form,

            [e.target.name]: e.target.value

        });


    };







    const createRequest = (e) => {


        e.preventDefault();



        const newRequest = {

            id: form.asset,

            issue: form.issue,

            priority: form.priority,

            status: "Pending",

            technician: ""

        };



        setRequests([

            ...requests,

            newRequest

        ]);



        setForm({

            asset: "",
            issue: "",
            priority: "High",
            photo: ""

        });


    };







    const updateStatus = (index, status) => {


        let updated = [...requests];


        updated[index].status = status;



        // Asset status update

        if (status === "Approved") {


            setAssets(

                assets.map(asset =>


                    asset.id === updated[index].id

                        ?

                        {
                            ...asset,
                            status: "Under Maintenance"
                        }

                        :

                        asset


                )

            );


        }



        if (status === "Resolved") {


            setAssets(

                assets.map(asset =>


                    asset.id === updated[index].id

                        ?

                        {
                            ...asset,
                            status: "Available"
                        }

                        :

                        asset


                )

            );



            setHistory([

                ...history,

                updated[index]

            ]);


        }



        setRequests(updated);



    };







   return (

<div className="dashboard">

    {/* SIDEBAR */}

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

        <button
            className="active"
            onClick={() => navigate("/maintenance")}
        >
            Maintenance
        </button>

        <button onClick={() => navigate("/audit")}>
            Audit
        </button>

       <button onClick={()=>navigate("/report")}>Reports</button>

        <button onClick={() => navigate("/notification")}>Notifications</button>

    </div>

    {/* MAIN */}

    <div className="main">

        {/* TOP BAR */}

        <div className="header">

            <h1>AssetFlow</h1>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>

        <div className="maintenance-container">


            <h1>
                Maintenance Management
            </h1>





            {/* Raise Request */}



            <div className="request-form">


                <h2>
                    Raise Maintenance Request
                </h2>



                <form onSubmit={createRequest}>


                    <label>
                        Select Asset
                    </label>


                    <select

                        name="asset"

                        value={form.asset}

                        onChange={handleChange}

                    >


                        <option>
                            Select Asset
                        </option>


                        {

                            assets.map(asset => (

                                <option key={asset.id}>

                                    {asset.id} - {asset.name}

                                </option>


                            ))


                        }


                    </select>





                    <label>
                        Describe Issue
                    </label>



                    <textarea

                        name="issue"

                        value={form.issue}

                        onChange={handleChange}

                        placeholder="Describe problem"

                    />





                    <label>
                        Priority
                    </label>



                    <select

                        name="priority"

                        value={form.priority}

                        onChange={handleChange}

                    >

                        <option>
                            High
                        </option>

                        <option>
                            Medium
                        </option>

                        <option>
                            Low
                        </option>


                    </select>





                    <label>
                        Attach Photo
                    </label>



                    <input

                        type="file"

                        name="photo"

                    />





                    <button>

                        Raise Request

                    </button>



                </form>


            </div>









            {/* Kanban */}



            <h2>
                Maintenance Workflow
            </h2>




            <div className="kanban">



                {

                    [
                        "Pending",
                        "Approved",
                        "Technician Assigned",
                        "In Progress",
                        "Resolved"

                    ].map(column => (



                        <div className="column" key={column}>


                            <h3>
                                {column}
                            </h3>




                            {

                                requests.map((item, index) => (


                                    item.status === column &&


                                    <div className="card" key={index}>


                                        <strong>
                                            {item.id}
                                        </strong>


                                        <p>
                                            {item.issue}
                                        </p>


                                        <p>
                                            Priority: {item.priority}
                                        </p>



                                        {

                                            column === "Pending" &&

                                            <>


                                                <button

                                                    onClick={() => updateStatus(index, "Approved")}

                                                >

                                                    Approve

                                                </button>



                                                <button

                                                    className="reject"

                                                    onClick={() => updateStatus(index, "Rejected")}

                                                >

                                                    Reject

                                                </button>


                                            </>


                                        }







                                        {

                                            column === "Approved" &&


                                            <select

                                                onChange={(e) => {

                                                    item.technician = e.target.value;

                                                    updateStatus(index, "Technician Assigned")

                                                }

                                                }

                                            >


                                                <option>
                                                    Assign Technician
                                                </option>


                                                {

                                                    technicians.map(t => (

                                                        <option key={t}>
                                                            {t}
                                                        </option>

                                                    ))


                                                }



                                            </select>


                                        }





                                        {

                                            column === "Technician Assigned" &&


                                            <button

                                                onClick={() => updateStatus(index, "In Progress")}

                                            >

                                                Start Work

                                            </button>


                                        }





                                        {

                                            column === "In Progress" &&


                                            <button

                                                onClick={() => updateStatus(index, "Resolved")}

                                            >

                                                Resolve

                                            </button>


                                        }





                                    </div>



                                ))


                            }


                        </div>



                    ))


                }


            </div>








            {/* Asset Status */}



            <h2>
                Asset Status
            </h2>


            <table>


                <thead>

                    <tr>

                        <th>
                            Asset
                        </th>

                        <th>
                            Status
                        </th>


                    </tr>


                </thead>


                <tbody>


                    {

                        assets.map(asset => (

                            <tr key={asset.id}>

                                <td>
                                    {asset.id} - {asset.name}
                                </td>


                                <td>
                                    {asset.status}
                                </td>


                            </tr>


                        ))


                    }



                </tbody>


            </table>








            {/* History */}



            <h2>
                Maintenance History
            </h2>



            <table>


                <thead>

                    <tr>

                        <th>
                            Asset
                        </th>

                        <th>
                            Issue
                        </th>

                        <th>
                            Priority
                        </th>


                    </tr>

                </thead>



                <tbody>


                    {

                        history.map((item, index) => (

                            <tr key={index}>

                                <td>
                                    {item.id}
                                </td>

                                <td>
                                    {item.issue}
                                </td>

                                <td>
                                    {item.priority}
                                </td>

                            </tr>


                        ))


                    }



                </tbody>


            </table>





               </div>

    </div>

</div>

);

};


export default MaintenanceManagement;