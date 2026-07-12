import "./CSS/Notification.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Notifications() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const [activeTab, setActiveTab] = useState("All");

    const notifications = [

        {
            id:1,
            type:"Alerts",
            color:"blue",
            text:"Three new assets added",
           
        },

        {
            id:2,
            type:"Approvals",
            color:"green",
            text:"Two assets allocated and transfered",
            
        },

        {
            id:3,
            type:"Bookings",
            color:"blue",
            text:"projector in maintanence",
            
        },

        {
            id:4,
            type:"Approvals",
            color:"red",
            text:"Resource meeting room is booked",
           
        },

        

    ];

    const filtered =
        activeTab === "All"
            ? notifications
            : notifications.filter(
                  item => item.type === activeTab
              );

    return (

<div className="dashboard">

{/* Sidebar */}

<div className="sidebar">

<div className="logo">
<h2>AF</h2>
</div>

<button onClick={()=>navigate("/dashboard")}>Dashboard</button>

<button onClick={()=>navigate("/organization")}>Organization Setup</button>

<button onClick={()=>navigate("/assets")}>Assets</button>

<button onClick={()=>navigate("/allocation")}>Allocation & Transfer</button>

<button onClick={()=>navigate("/resource")}>Resource Booking</button>

<button onClick={()=>navigate("/maintenance")}>Maintenance</button>

<button onClick={()=>navigate("/audit")}>Audit</button>

<button onClick={()=>navigate("/report")}>Reports</button>

<button className="active">
Notifications
</button>

</div>

{/* Main */}

<div className="main">

<div className="header">

<h1>AssetFlow</h1>

<button
className="logout-btn"
onClick={handleLogout}
>
Logout
</button>

</div>

<div className="notification-content">

<h1>Notifications</h1>

<div className="filter-tabs">

{
["All","Alerts","Approvals","Bookings"].map(tab=>(

<button

key={tab}

className={
activeTab===tab
?
"tab-active"
:
""
}

onClick={()=>setActiveTab(tab)}

>

{tab}

</button>

))
}

</div>

<div className="notification-list">

{

filtered.map(item=>(

<div
className="notification-item"
key={item.id}
>

<div className="left">

<span
className={`dot ${item.color}`}
></span>

<p>{item.text}</p>

</div>



</div>

))

}

</div>

</div>

</div>

</div>

    );

}

export default Notifications;