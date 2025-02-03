import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Job = () => {
    const [arr,setarr] = useState([])
    const [loading,setloading] = useState(false)
    const [err,seterr] = useState(null)
    const [see,setsee] = useState(true)
    useEffect(()=>{
        const fetch = async()=>{
               try {
                setloading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(response.data);
            setloading(false)
            setarr(response.data)
        } catch (error) {
            seterr(error)
            console.log(error);
            setloading(false)
        }
        }
     fetch()

    },[])

    
  return (
    
    <div>
        API
        <div>
            { loading  ? <p>loading</p>:
                arr.map((item)=>(
                    <>
                    <div key={item.id}>
                    <h1>{item.userId}</h1>
                    <h1>{item.title}</h1>
                    <input checked={item.completed ? 'checked' : ''} type="checkbox"   />
                    <Link to={`/tododetails/${item.id}`}>see more</Link>
                    </div>
                    </>
                ))
            }
        </div>
    </div>

  )
}

export default Job