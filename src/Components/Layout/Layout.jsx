import React, { useEffect, useState } from 'react'
import Style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
    const [first, setfirst] = useState(0)

    // useEffect(() => {

    // }, [])
    
  return <>
    

<Navbar />
    <div className="container py-10 my-6 mx-auto">
      <Outlet></Outlet>
    </div>

    
    <Footer/>
    </>
}



