import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <>
    <div className='w-50 bg-blue d-block p-2'>
    <Link to={"/home/landing"} className='p-2 text-white d-block'>Home</Link>
    <Link className='p-2 text-white d-block'>Profile</Link>
    <Link className='p-2 text-white d-block'>Document</Link>
    <Link className='p-2 text-white d-block'>Courses</Link>

    </div>
    </>
  )
}

export default Sidenav