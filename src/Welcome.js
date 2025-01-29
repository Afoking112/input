import React from 'react'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'
import './welcome.css'
const Welcome = () => {
  return (
    < div className='d-flex'>
    <div className=' bg-primary  hey'>
        <Sidenav/>
    </div>
    <div>
        <Outlet/>
    </div>
    </div>
    
  )
}

export default Welcome