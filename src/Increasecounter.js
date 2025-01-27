import React from 'react'

const increasecounter = ({setcount,count}) => {
const click =()=>{
    setcount(count+1)
}
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <button onClick={click}>click</button>
    </div>
  )
}

export default increasecounter