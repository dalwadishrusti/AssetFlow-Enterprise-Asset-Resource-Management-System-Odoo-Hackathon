import React, {useState} from "react";
import "./ResourceBooking.css";


const ResourceBooking = () => {


const [resource,setResource] = useState(
"Conference Room B2"
);



const [bookings,setBookings] = useState([

{
id:1,
resource:"Conference Room B2",
user:"Procurement Team",
start:"09:00",
end:"10:00",
status:"Upcoming"
}

]);




const [form,setForm]=useState({

start:"",
end:"",
user:""

});



const [message,setMessage]=useState("");





const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});


};







// overlap checking

const checkOverlap=(start,end)=>{


return bookings.some((booking)=>{


return (

start < booking.end &&
end > booking.start

);


});


};







const bookSlot=(e)=>{

e.preventDefault();



if(checkOverlap(form.start,form.end)){


setMessage(
"Booking rejected! Slot overlaps with existing booking."
);


return;

}





const newBooking={


id:Date.now(),

resource,

user:form.user,

start:form.start,

end:form.end,

status:"Upcoming"


};



setBookings([

...bookings,

newBooking

]);



setMessage(
"Slot booked successfully!"
);



setForm({

start:"",
end:"",
user:""

});


};








const cancelBooking=(id)=>{


setBookings(

bookings.map(item=>

item.id===id

?

{

...item,

status:"Cancelled"

}

:

item

)

);


};






return(


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

onChange={(e)=>setResource(e.target.value)}

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
].map(time=>(


<div className="time-row" key={time}>


<div className="time">

{time}

</div>




<div className="slot">


{

bookings.map((booking)=>(


booking.start===time &&

<div 
className={`booking ${booking.status}`}
key={booking.id}
>


Booked - {booking.user}

<br/>

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

bookings.map(item=>(


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
item.status!=="Cancelled" &&

<button

className="cancel"

onClick={()=>cancelBooking(item.id)}

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


)


}


export default ResourceBooking;