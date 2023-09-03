import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {storeJourneydata} from "../redux/actions/journeyDetailsActions"

function Searchpage () {

    let dispatch = useDispatch();

    let reduxdata = useSelector((state)=>{return state})
    
    const [radio,setRadio] = useState("");
    const [from,setFrom]= useState("");
    const [to,setTo] = useState("");
    const [date,setDate] = useState("");
    const [search,setSearch] = useState(false);


    let navigate = useNavigate();
    const searchclicked = ()=>{


        if(radio && date && from && to)
        {
          console.log(radio,from,to,date);
          dispatch(storeJourneydata({radio,from,to,date}));

          setSearch(true);
        }
        else {
            alert("All the fields are required");
            setSearch(false);
        }
    }

    return (
        <div>
           {!search && <div>
            <input type="radio" name="radiobtn" id="oneway" value={"One Way"} onChange={(e)=>{setRadio(e.target.value)}}/>
            <label htmlFor="oneway">One Way Trip</label>
            <input type="radio" name="radiobtn" id="round" value={"Round Trip"} onChange={(e)=>{setRadio(e.target.value)}}/>
            <label htmlFor="round">Round Trip</label>  <br/>

            <input type="text" placeholder="Source City" value={from} onChange={(e)=>{setFrom(e.target.value)}}/> <br/>
            <input type="text" placeholder="Destination City" value={to} onChange={(e)=>{setTo(e.target.value)}}/>  <br/>
            <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}/>  <br/>

            <button onClick={searchclicked}>Search Flight</button>
            </div> }
            {search && <div>
                <button onClick={()=>{setSearch(false)}}>Search Flight</button>
                       <div>
                        <p>1.Air India AI-275 Departure : 12:00 Journey Time : 1 Hr 25 Min Rs.3,600 <button onClick={()=>{dispatch(storeJourneydata({...reduxdata,flightname:"Air India AI-275"})); navigate("/flight-booking")}}>Book Now</button></p>
                       </div>
                       <div>
                        <p>2.Kingfisher Airlines KF-183 Departure : 04:00 Journey Time : 1 hr Rs.3,000 <button onClick={()=>{dispatch(storeJourneydata({...reduxdata,flightname:"Kingfisher Airlines KF-183"})); navigate("/flight-booking")}}>Book Now</button></p>
                       </div>
                </div>}
        </div>
    )
}

export default Searchpage;