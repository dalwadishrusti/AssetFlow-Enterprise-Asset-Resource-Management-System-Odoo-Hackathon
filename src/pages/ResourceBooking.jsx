import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/ResourceBooking.css";


const ResourceBooking = () => {


    const navigate = useNavigate();



    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };




    const [resource, setResource] = useState(
        "Conference Room B2"
    );





    const [bookings, setBookings] = useState(() => {

        const savedBookings = localStorage.getItem("bookings");

        if (savedBookings) {
            return JSON.parse(savedBookings);
        }

        return [
            {
                id: 1,
                resource: "Conference Room B2",
                user: "Procurement Team",
                start: "09:00",
                end: "10:00",
                status: "Upcoming"
            }
        ];

    });


    useEffect(() => {

        localStorage.setItem(
            "bookings",
            JSON.stringify(bookings)
        );

    }, [bookings]);





    const [form, setForm] = useState({

        start: "",
        end: "",
        user: ""

    });





    const [message, setMessage] = useState("");






    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });


    };






    const checkOverlap = (start, end) => {

        return bookings.some((booking) =>

            booking.resource === resource &&
            booking.status !== "Cancelled" &&

            start < booking.end &&
            end > booking.start

        );

    };








    const bookSlot = (e) => {

        e.preventDefault();

        if (form.start >= form.end) {

            setMessage("End time must be after Start time.");

            return;

        }

        if (

            checkOverlap(form.start, form.end)) {


            setMessage(
                "Booking rejected! Slot overlaps with existing booking."
            );


            return;

        }







        const newBooking = {


            id: Date.now(),

            resource,

            user: form.user,

            start: form.start,

            end: form.end,

            status: "Upcoming"


        };





        setBookings([

            ...bookings,

            newBooking

        ]);



        setMessage(
            "Slot booked successfully!"
        );



        setForm({

            start: "",
            end: "",
            user: ""

        });



    };








    const cancelBooking = (id) => {


        setBookings(

            bookings.map(item =>

                item.id === id

                    ?

                    {

                        ...item,

                        status: "Cancelled"

                    }

                    :

                    item

            )

        );


    };









    return (


        <div className="dashboard">



            {/* SIDEBAR */}


            <div className="sidebar">



                <div className="logo">

                    <h2>
                        AF
                    </h2>

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







                <button

                    className="active"

                    onClick={() => navigate("/resource")}

                >

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









            {/* MAIN CONTENT */}


            <div className="main">







                {/* TOPBAR */}



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









                {/* RESOURCE PAGE */}



                <div className="resource-container">





                    <h1>

                        Resource Booking

                    </h1>








                    <div className="resource-select">


                        <label>

                            Resource

                        </label>




                        <select

                            value={resource}

                            onChange={(e) => setResource(e.target.value)}

                        >


                            <option>
                                Conference Room B2
                            </option>


                            <option>
                                Meeting Room A1
                            </option>


                            <option>
                                Projector - Hall
                            </option>



                        </select>


                    </div>









                    <div className="calendar">



                        <h2>

                            {resource} - Tue, 7 Jul

                        </h2>





                        <div className="timeline">





                            {

                                [

                                    "09:00",

                                    "10:00",

                                    "11:00",

                                    "12:00",

                                    "01:00"

                                ].map(time => (



                                    <div className="time-row" key={time}>



                                        <div className="time">

                                            {time}

                                        </div>





                                        <div className="slot">





                                            {

                                                bookings
                                                    .filter(
                                                        booking =>
                                                            booking.resource === resource
                                                    )
                                                    .map((booking) => (



                                                        booking.start === time &&



                                                        <div

                                                            className={`booking ${booking.status}`}

                                                            key={booking.id}

                                                        >


                                                            Booked - {booking.user}

                                                            <br />

                                                            {booking.start} to {booking.end}


                                                        </div>



                                                    ))


                                            }





                                        </div>





                                    </div>



                                ))


                            }







                        </div>


                    </div>









                    <form

                        className="booking-form"

                        onSubmit={bookSlot}

                    >





                        <h2>

                            Book a Slot

                        </h2>








                        <label>

                            Requested By

                        </label>




                        <input


                            name="user"


                            value={form.user}


                            onChange={handleChange}


                            placeholder="Employee name"


                        />









                        <label>

                            Start Time

                        </label>




                        <input


                            type="time"


                            name="start"


                            value={form.start}


                            onChange={handleChange}


                        />









                        <label>

                            End Time

                        </label>




                        <input


                            type="time"


                            name="end"


                            value={form.end}


                            onChange={handleChange}


                        />







                        <button>

                            Book Slot

                        </button>





                    </form>









                    {

                        message &&


                        <div className="message">

                            {message}

                        </div>


                    }









                    <div className="history">





                        <h2>

                            Booking History

                        </h2>








                        <table>


                            <thead>


                                <tr>


                                    <th>
                                        Resource
                                    </th>


                                    <th>
                                        User
                                    </th>


                                    <th>
                                        Time
                                    </th>


                                    <th>
                                        Status
                                    </th>


                                    <th>
                                        Action
                                    </th>



                                </tr>


                            </thead>







                            <tbody>




                                {

                                    bookings.map(item => (



                                        <tr key={item.id}>


                                            <td>
                                                {item.resource}
                                            </td>



                                            <td>
                                                {item.user}
                                            </td>




                                            <td>

                                                {item.start} - {item.end}

                                            </td>




                                            <td>
                                                {item.status}
                                            </td>





                                            <td>



                                                {

                                                    item.status !== "Cancelled" &&



                                                    <button


                                                        className="cancel"


                                                        onClick={() => cancelBooking(item.id)}


                                                    >

                                                        Cancel

                                                    </button>



                                                }



                                            </td>





                                        </tr>



                                    ))


                                }






                            </tbody>






                        </table>







                    </div>









                </div>






            </div>





        </div>



    )


}



export default ResourceBooking;