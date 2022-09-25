import React from 'react';
import axios from 'axios'
import {useEffect, useState} from 'react';
import Web3 from './Web3';
import {FaSearch} from 'react-icons/fa';
import Events from './Events';

function Campaigns(){

    const [events,setEvents] = useState([]);
    const [query,setQuery] = useState('');
    const [toggleCampaign, setToggleCampaign] = useState(false);


    
function populateEvents(){
    axios.get(`https://api.seatgeek.com/2/events?geoip=`+query+`&range=12mi&client_id=MjkzMzY2NTd8MTY2NDA2NDIwMy4zMTU4Nzc`)
    .then(response => {

    setEvents(response.data.events);
 
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



 {toggleCampaign && <div>
 <input placeholder="Enter any zipcode" value={query} onChange={e=>setQuery(e.target.value)}/> 
<button type="button" class="btn btn-primary" onClick={populateEvents}><FaSearch/> </button> 
</div>
 }
{toggleCampaign && events.length>0 &&  events.map((e, i) => 
    <div key={i} className="card" >
    <div className="card-body">
      <h5 className="card-title">{e.title+`-`+e.type}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{e.venue.name_v2+` `+e.venue.state}</h6>
      <p class="card-text">{ e.datetime_local.substring(0,10)}</p>
      <a target="_blank" href={e.url} className="card-link">Get More details</a>
    </div>
  </div>
    
    
    )}


</>




)




}

export default Campaigns