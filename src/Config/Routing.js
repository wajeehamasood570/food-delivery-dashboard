import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from '../Components/Dashboard';
import Navbaars from '../Components/Navbaars';


const Routing = () => {
  return (
    <BrowserRouter>
   <Navbaars/>
    <Routes>
      <Route path="dashboard/*" element={<DashboardPage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routing