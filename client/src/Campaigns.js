import React from 'react';
import Object from './Object';
import axios from 'axios'
import {useEffect, useState} from 'react';
import Font, { Text } from 'react-font'
import Web3 from './Web3';

function Campaigns(){

    const [events,setEvents] = useState([]);
    const [query,setQuery] = useState('');
    const [toggleCampaign, setToggleCampaign] = useState(false);

    
function populateEvents(){
    axios.get(`https://api.seatgeek.com/2/events?geoip=`+query+`&range=12mi&client_id=MjkzMzY2NTd8MTY2NDA2NDIwMy4zMTU4Nzc`)
    .then(response => {
      setEvents(response.data.events)
      console.log(events);
    })
}    

return (
<>

<ul className="nav">
  <li className="nav-item">
    <p className={toggleCampaign?"inactive": "active"} aria-current="page" href="#" onClick={e=>setToggleCampaign(!toggleCampaign)}>Web3 </p>
  </li>
  <li className="nav-item">
    <p className={toggleCampaign?"active": "inactive"} href="#" onClick={e=>setToggleCampaign(!toggleCampaign)}> | Sponsored Events</p>
  </li>
 
</ul>

{!toggleCampaign && <Web3/>}





<input onChange={e=>setQuery(e.target.value)}/> 
<button onClick={populateEvents}>click </button>



</>




)




}

export default Campaigns