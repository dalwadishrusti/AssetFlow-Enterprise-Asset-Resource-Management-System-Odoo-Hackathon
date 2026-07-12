import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/AssetAudit.css";

const AssetAudit = () => {

  const navigate = useNavigate();

const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

};

  const [auditCycles, setAuditCycles] = useState([
    {
      id: "AUD-001",
      scope: "IT Department",
      location: "Ahmedabad HQ",
      date: "2026-07-01",
      auditor: "Rahul Patel",
      status: "Completed"
    }
  ]);


  const [assets,setAssets] = useState([
    {
      id:"AF-0114",
      name:"Dell Laptop",
      employee:"Priya Sharma",
      category:"IT Equipment",
      status:"Pending",
      image:null
    },
    {
      id:"AF-0201",
      name:"iPhone 15",
      employee:"Raj Mehta",
      category:"Mobile Device",
      status:"Pending",
      image:null
    },
    {
      id:"AF-0305",
      name:"Office Projector",
      employee:"Admin Department",
      category:"Electronics",
      status:"Pending",
      image:null
    }
  ]);


  const [cycle,setCycle] = useState({
    department:"",
    location:"",
    startDate:"",
    endDate:"",
    auditors:[]
  });



  const updateStatus=(index,status)=>{

    let updated=[...assets];

    updated[index].status=status;

    setAssets(updated);

  }



  const uploadImage=(index,e)=>{

    const file=e.target.files[0];

    if(file){

      let updated=[...assets];

      updated[index].image=URL.createObjectURL(file);

      setAssets(updated);

    }

  }



  const createAudit=()=>{

    const newCycle={

      id:"AUD-"+Math.floor(Math.random()*1000),

      scope:cycle.department,

      location:cycle.location,

      date:cycle.startDate,

      auditor:cycle.auditors.join(","),

      status:"Active"

    };


    setAuditCycles([
      ...auditCycles,
      newCycle
    ]);

  }



  const closeAudit=()=>{


    let updatedAssets=assets.map(asset=>{


      if(asset.status==="Missing")
      {
        return {
          ...asset,
          status:"Lost"
        }
      }


      return asset;


    });


    setAssets(updatedAssets);


    alert(
      "Audit Closed Successfully. Asset statuses updated."
    );

  }



  const discrepancies =
    assets.filter(
      item=>
      item.status==="Missing" ||
      item.status==="Damaged"
    );



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

        <button onClick={() => navigate("/maintenance")}>
            Maintenance
        </button>

        <button
            className="active"
            onClick={() => navigate("/audit")}
        >
            Audit
        </button>

        <button onClick={()=>navigate("/report")}>Reports</button>

        <button onClick={() => navigate("/notification")}>Notifications</button>

    </div>

    {/* MAIN */}

    <div className="main">

        {/* TOPBAR */}

        <div className="header">

            <h1>AssetFlow</h1>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>

        <div className="audit-container">


<h1>
Asset Audit Management
</h1>


<p className="description">

Run structured verification cycles, assign auditors,
verify assets and automatically generate discrepancy reports.

</p>



{/* CREATE AUDIT */}


<div className="card">


<h2>Create Audit Cycle</h2>


<div className="form-grid">


<input
placeholder="Department"
onChange={
e=>setCycle({
...cycle,
department:e.target.value
})
}
/>



<input
placeholder="Location"
onChange={
e=>setCycle({
...cycle,
location:e.target.value
})
}
/>



<input
type="date"
onChange={
e=>setCycle({
...cycle,
startDate:e.target.value
})
}
/>



<input
type="date"
onChange={
e=>setCycle({
...cycle,
endDate:e.target.value
})
}
/>



<input
placeholder="Auditors (comma separated)"
onChange={
e=>
setCycle({
...cycle,
auditors:e.target.value.split(",")
})
}
/>


</div>


<button
onClick={createAudit}
>
Create Cycle
</button>


</div>




{/* ASSET VERIFICATION */}



<div className="card">


<h2>
Asset Verification
</h2>



<table>


<thead>

<tr>

<th>
Asset ID
</th>

<th>
Asset
</th>

<th>
Holder
</th>

<th>
Category
</th>

<th>
Verification
</th>

<th>
Evidence Image
</th>

</tr>

</thead>



<tbody>


{
assets.map((asset,index)=>(

<tr key={asset.id}>


<td>
{asset.id}
</td>


<td>
{asset.name}
</td>


<td>
{asset.employee}
</td>


<td>
{asset.category}
</td>



<td>


<button
className="verify"
onClick={()=>updateStatus(index,"Verified")}
>
Verified
</button>



<button
className="missing"
onClick={()=>updateStatus(index,"Missing")}
>
Missing
</button>



<button
className="damage"
onClick={()=>updateStatus(index,"Damaged")}
>
Damaged
</button>


<br/>


<span>
{asset.status}
</span>


</td>



<td>


<input
type="file"
accept="image/*"
onChange={
e=>uploadImage(index,e)
}
/>



{
asset.image &&
<img
src={asset.image}
className="asset-img"
/>
}



</td>



</tr>

))
}



</tbody>


</table>


</div>






{/* DISCREPANCY REPORT */}



<div className="card">


<h2>
Auto Generated Discrepancy Report
</h2>



{

discrepancies.length===0 ?

<p>
No discrepancies found.
</p>


:

<table>

<thead>

<tr>

<th>
Asset
</th>

<th>
Issue
</th>

</tr>

</thead>


<tbody>


{
discrepancies.map(item=>(

<tr>

<td>
{item.name}
</td>


<td className="problem">

{item.status}

</td>


</tr>


))
}



</tbody>

</table>


}



</div>





{/* HISTORY */}


<div className="card">


<h2>
Audit History
</h2>



<table>

<thead>

<tr>

<th>
Cycle ID
</th>

<th>
Scope
</th>

<th>
Location
</th>

<th>
Auditor
</th>

<th>
Status
</th>

</tr>


</thead>


<tbody>


{
auditCycles.map(cycle=>(

<tr>

<td>
{cycle.id}
</td>

<td>
{cycle.scope}
</td>

<td>
{cycle.location}
</td>

<td>
{cycle.auditor}
</td>

<td>
{cycle.status}
</td>

</tr>


))
}


</tbody>

</table>


<button
className="close-btn"
onClick={closeAudit}
>
Close Audit Cycle
</button>



</div>



        </div>

    </div>

</div>

);

}


export default AssetAudit;