import React from "react";
import { useNavigate } from "react-router-dom";

function Landingpage () {

    let navigate = useNavigate();

const nextpage = ()=>{
   navigate("/flight-search");
   console.log("hi")
}

    return (
        <div>
            <h1>Welcome To Flight Booking App</h1>
            <button onClick={nextpage}>Search Flights Here</button>
        </div>
    )
}

export default Landingpage;