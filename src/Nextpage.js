import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const Nextpage = () => {
    const { id } = useParams()
    const [todo,settodo] = useState([])
    const [loading,setloading] = useState(false)
    const [err,seterr] = useState(null)
    useEffect(()=>{
        const fetch = async()=>{
               try {
                setloading(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            console.log(response.data);
            settodo(response.data)
            setloading(false)

        } catch (error) {
            seterr(error)
            console.log(error);
            setloading(false)
        }
        }
     fetch()

    },[id])

    
    return (
        <div>
            <h1>API Data</h1>
            {loading ? (
                <p>Loading...</p>
            ) : err ? (
                <p>Error fetching data</p>
            ) : todo ? (
                <div key={todo.id}>
                    <h1>User ID: {todo.userId}</h1>
                    <h2>Title: {todo.title}</h2>
                    <input
                        type="checkbox"
                        checked={todo.completed} // Proper boolean usage for checked
                        readOnly
                    />
                </div>
            ) : (
                <p>No data found</p>
            )}
        </div>
    )

}

export default Nextpage