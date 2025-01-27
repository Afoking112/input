import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate('/')
    }
  return (
    <div>
        <h1>This page is not found</h1>
        <button onClick={goBack}>Go back</button>
    </div>
  )
}

export default Notfound