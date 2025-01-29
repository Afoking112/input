import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'

const Sidenav = () => {
  return (
    <>
    <div className=' bg-blue d-block p-2 how'>
    <Link to={"/home/Dashboard"} className='p-2 text-white d-block nav-link'>Dashboard</Link>
    <Link to={"/home/Profile"} className='p-2 text-white d-block nav-link'>My Profile</Link>
    <Link to={"/home/Password"} className='p-2 text-white d-block nav-link'>Change Password</Link>
    <Link to={"/home/Document"} className='p-2 text-white d-block nav-link'>Document</Link>
    <Link className='p-2 text-white d-block nav-link'>Course Registration</Link>
    <Link className='p-2 text-white d-block nav-link'>Resources</Link>
    <Link className='p-2 text-white d-block nav-link'>Registration History</Link>
    <Link className='p-2 text-white d-block nav-link'>Semester Result</Link>
    </div>
    </>
  )
}

export default Sidenav