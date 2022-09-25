import React from 'react'
import {useEffect, useState} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import axios from "axios";
import BarChart from './BarChart';
import SocialMedia from './SocialMedia';
import Campaigns from './Campaigns';
import Graphs from './Graphs'
  
function AppRouter()
{ 
    return (
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Graphs />} />
        <Route path="/home" element={<Graphs/>} />
        <Route path="/socials" element={<SocialMedia/>}/>
        <Route path="/campaigns" element={<Campaigns/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
