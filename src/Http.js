import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Http = () => {
    const [arr,setarr] = useState([])
    const [check,setcheck] = useState(false)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com")
        .then((res)=>{
            console.log(res);
            setarr(res.data)
            if(res.data.completed == true){
                setcheck(!check)
            }else{
                setcheck(true)

            }
        }).catch((error)=>{
            console.log(error);
            
        })
    },[])

    
  return (
    
    <div>
        API
        <div>
            {
                arr.map((item,index)=>(
                    <>
                    <div key={index}>
                    <h1>{item.userId}</h1>
                    <h1>{item.title}</h1>
                    <input checked={item.completed ? 'checked' : ''} type="checkbox" name="" id=""  />
                    </div>
                    </>
                ))
            }
        </div>
    </div>

  )
}

export default Http