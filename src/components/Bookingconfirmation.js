import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Bookingconfirmation() {
    let reduxdata = useSelector((state)=>{return state});
    console.log(reduxdata)
    let navigate = useNavigate();
  return (
    <div>
      <h1>Thankyou for Booking Click below button to return to Home Page</h1>
      <h3>Your Booking Details Are :</h3>
      <p>
        <h2>Flight Name : {reduxdata.flightname}</h2>
        <h2>Source : {reduxdata.from}</h2>
        <h2>Destination : {reduxdata.to}</h2>
        <h2>Journey Date : {reduxdata.date}</h2>
        <h2>Trip Type : {reduxdata.radio}</h2>
      </p>
      <button onClick={()=>{navigate("/")}}>Back to Home</button>
    </div>
  )
}

export default Bookingconfirmation
