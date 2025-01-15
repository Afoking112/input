import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputvalue1,setinputvalue1] = useState("");
  const [inputvalue2,setinputvalue2] = useState("");
  // const [displayinput,setdisplayinput] = useState("");
  // const [displayinput1,setdisplayinput1] = useState("");
  const [inputvalue3,setinputvalue3] = useState("");
  
  const [array,setarray] = useState([])

  
  const inputtype1 = (e)=>{
    setinputvalue1(e.target.value)
  }
  const inputtype2 = (e)=>{
    setinputvalue2(e.target.value)
  }
  const type = ()=>{
    const newinput =[...array, inputvalue1 ,inputvalue2]
setarray(newinput)
    setinputvalue1("")
    setinputvalue2("")
  }
  const stamp = ()=>{
    setinputvalue3(!inputvalue3)
  }
  return (
    <div className="App">
      <input value={inputvalue1} onChange={inputtype1}  />
      <input value={inputvalue2} onChange={inputtype2}  />
      <button onClick={type}>click</button>
      
      
        <>
        { array.length == 0 ? "User not available" :
          array.map((input,index)=>(
          
            <div className='display' key={index}>{input}</div>
         
       ))
        }
      
        </>
        <input type={inputvalue3 ? "text" : "password"} />
        <button onClick={stamp}>toggle</button>
    
    </div>
  );
}

export default App;
