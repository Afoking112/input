import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Onetodo = () => {
    let arr = []
    const {index} = useParams()
    const [onetodo,setonetodo] = useState({})
    const user = JSON.parse(localStorage.getItem("userdetails"))
    const all = user.find((user)=> user.index == index)
    console.log(user);
    
  return (
    <div>
        <p>{all.input}</p>
      

    </div>
  )
}

export default Onetodo