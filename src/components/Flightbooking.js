import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Flightbooking() {

    let flightname = useSelector((state)=>{return state.flightname});
    let navigate = useNavigate();

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");

  return (
    <div>
      <h1>Booking Confirmation for Flight {flightname}</h1>
      <input type='text' value={fname} placeholder='First Name' onChange={(e)=>{setFname(e.target.value)}}/> <br/>
      <input type='text' value={lname} placeholder='Last Name' onChange={(e)=>{setLname(e.target.value)}}/> <br/>
      <input type='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
      <input type='tel' value={number} placeholder='Mobile Number' onChange={(e)=>{setNumber(e.target.value)}}/> <br/>
      <button onClick={()=>{navigate("/confirmation")}}>Confirm Booking</button>
    </div>
  )
}

export default Flightbooking;
