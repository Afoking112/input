import React from 'react'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'
const Welcome = () => {
  return (
    <>
    <div className='d-flex bg-primary w-50'>
        <Sidenav/>
    </div>
    <div>
        <Outlet/>
    </div>
    </>
    
  )
}

export default Welcome