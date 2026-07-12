import React, { useState } from "react";
import "./AllocationTransfer.css";

const AllocationTransfer = () => {


    const [assets] = useState([
        {
            id: "AF-0114",
            name: "Dell Laptop",
            category: "IT Equipment",
            holder: "Priya Sharma"
        },
        {
            id: "AF-0201",
            name: "iPhone 15",
            category: "Mobile Device",
            holder: "Rahul Patel"
        },
        {
            id: "AF-0305",
            name: "MacBook Pro",
            category: "IT Equipment",
            holder: "Unassigned"
        }
    ]);



    const employees = [
        "Priya Sharma",
        "Rahul Patel",
        "Amit Shah",
        "Neha Patel"
    ];


    const departments = [
        "IT Department",
        "HR Department",
        "Finance Department",
        "Marketing Department"
    ];



    const [selectedAsset, setSelectedAsset] = useState(null);



    const [formData, setFormData] = useState({

        fromType: "Employee",
        from: "",

        toType: "Employee",
        to: "",

        reason: "",
        returnDate: ""

    });



    const [history, setHistory] = useState([]);



    const [message, setMessage] = useState("");





    const handleAssetSelect = (e) => {


        const asset = assets.find(
            item => item.id === e.target.value
        );


        setSelectedAsset(asset);


        setFormData({

            fromType: "Employee",
            from: asset.holder,

            toType: "Employee",
            to: "",

            reason: "",
            returnDate: ""

        });


        setMessage("");

    };





    const handleChange = (e) => {


        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });


    };






    const handleSubmit = (e) => {


        e.preventDefault();



        if (!selectedAsset) {

            setMessage("Please select asset");

            return;

        }




        if (formData.to === "") {

            setMessage("Please select transfer destination");

            return;

        }




        const newRecord = {


            assetId: selectedAsset.id,

            assetName: selectedAsset.name,


            from:

                `${formData.fromType} - ${formData.from}`,



            to:

                `${formData.toType} - ${formData.to}`,



            reason: formData.reason,


            returnDate: formData.returnDate,


            date: new Date().toLocaleDateString()

        };




        setHistory([

            ...history,

            newRecord

        ]);



        setMessage(

            "Transfer request submitted successfully"

        );



    };






    return (

        <div className="allocation-container">


            <h2>
                Asset Allocation & Transfer
            </h2>




            <div className="asset-select">


                <label>
                    Select Asset
                </label>



                <select onChange={handleAssetSelect}>


                    <option value="">
                        -- Select Asset --
                    </option>


                    {
                        assets.map(asset => (

                            <option
                                key={asset.id}
                                value={asset.id}
                            >

                                {asset.id} - {asset.name}

                            </option>

                        ))

                    }


                </select>


            </div>






            {
                selectedAsset && (


                    <form
                        className="transfer-form"
                        onSubmit={handleSubmit}
                    >



                        <div className="asset-info">


                            <h3>
                                Selected Asset
                            </h3>


                            <p>
                                <strong>ID:</strong> {selectedAsset.id}
                            </p>


                            <p>
                                <strong>Name:</strong> {selectedAsset.name}
                            </p>


                            <p>
                                <strong>Category:</strong> {selectedAsset.category}
                            </p>


                        </div>






                        {/* FROM SECTION */}


                        <div className="form-group">


                            <label>
                                From Type
                            </label>


                            <select

                                name="fromType"

                                value={formData.fromType}

                                onChange={handleChange}

                            >


                                <option>
                                    Employee
                                </option>


                                <option>
                                    Department
                                </option>


                            </select>


                        </div>





                        <div className="form-group">


                            <label>
                                From
                            </label>



                            <select

                                name="from"

                                value={formData.from}

                                onChange={handleChange}

                            >



                                <option value="">
                                    Select {formData.fromType}
                                </option>



                                {

                                    (formData.fromType === "Employee"

                                        ? employees

                                        : departments

                                    ).map(item => (

                                        <option key={item}>
                                            {item}
                                        </option>

                                    ))


                                }


                            </select>


                        </div>






                        {/* TO SECTION */}



                        <div className="form-group">


                            <label>
                                To Type
                            </label>



                            <select

                                name="toType"

                                value={formData.toType}

                                onChange={handleChange}

                            >


                                <option>
                                    Employee
                                </option>


                                <option>
                                    Department
                                </option>


                            </select>


                        </div>







                        <div className="form-group">


                            <label>
                                To
                            </label>



                            <select

                                name="to"

                                value={formData.to}

                                onChange={handleChange}

                            >


                                <option value="">
                                    Select {formData.toType}
                                </option>


                                {

                                    (formData.toType === "Employee"

                                        ? employees

                                        : departments

                                    ).map(item => (

                                        <option key={item}>
                                            {item}
                                        </option>

                                    ))


                                }


                            </select>



                        </div>







                        <div className="form-group">


                            <label>
                                Request Reason
                            </label>


                            <textarea

                                name="reason"

                                placeholder="Why do you need this asset?"

                                value={formData.reason}

                                onChange={handleChange}

                            />


                        </div>






                        <div className="form-group">


                            <label>
                                Expected Return Date
                            </label>


                            <input

                                type="date"

                                name="returnDate"

                                value={formData.returnDate}

                                onChange={handleChange}

                            />


                        </div>







                        <button type="submit">

                            Submit Transfer Request

                        </button>




                    </form>


                )

            }





            {
                message &&

                <div className="message">

                    {message}

                </div>

            }






            {/* ALLOCATION HISTORY */}



            <div className="history-section">


                <h2>
                    Allocation History
                </h2><br></br>



                <table>


                    <thead>

                        <tr>

                            <th>
                                Asset ID
                            </th>


                            <th>
                                Asset Name
                            </th>


                            <th>
                                From
                            </th>


                            <th>
                                To
                            </th>


                            <th>
                                Reason
                            </th>


                            <th>
                                Return Date
                            </th>


                            <th>
                                Date
                            </th>


                        </tr>


                    </thead>



                    <tbody>



                        {

                            history.map((item, index) => (


                                <tr key={index}>


                                    <td>
                                        {item.assetId}
                                    </td>


                                    <td>
                                        {item.assetName}
                                    </td>


                                    <td>
                                        {item.from}
                                    </td>


                                    <td>
                                        {item.to}
                                    </td>


                                    <td>
                                        {item.reason}
                                    </td>


                                    <td>
                                        {item.returnDate || "-"}
                                    </td>


                                    <td>
                                        {item.date}
                                    </td>



                                </tr>


                            ))


                        }



                        {
                            history.length === 0 &&

                            <tr>

                                <td colSpan="7">

                                    No allocation history available

                                </td>

                            </tr>

                        }



                    </tbody>


                </table>



            </div>






        </div>


    );


};


export default AllocationTransfer;