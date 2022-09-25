import React from 'react'
import {useEffect, useState} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import axios from "axios";
import BarChart from './BarChart';
import SocialMedia from './SocialMedia';
import Campaigns from './Campaigns';

  
function AppRouter()
{ 
    return (
      <BrowserRouter>
      <Routes>
        <Route path="" element={<BarChart/>} />
        <Route path="/home" element={<BarChart/>}/>
        <Route path="/socials" element={<SocialMedia/>}/>
        <Route path="/campaigns" element={<Campaigns/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
