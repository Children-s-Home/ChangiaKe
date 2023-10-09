import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import ImpactNav from './ImpactNav'
import "./ImpactLayout.css"
import dfvImage from "../../assets/dvf.png"
function ImpactLayout() {
  return (
    <div className="layout-container">
      <img src={dfvImage} alt="dfv image" className='dfv-img'/>
      <ImpactNav />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default ImpactLayout