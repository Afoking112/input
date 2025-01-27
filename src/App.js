import './App.css';
import { useState } from 'react';
import Displaycounter from './Displaycounter'
import Increasecounter from './Increasecounter'



function App() {
  const [count,setcount] = useState(0)
  const [inputvalue1,setinputvalue1] = useState("");
  const [inputvalue2,setinputvalue2] = useState("");
  // const [displayinput,setdisplayinput] = useState("");
  // const [displayinput1,setdisplayinput1] = useState("");
  const [inputvalue3,setinputvalue3] = useState("");
  
  const [array,setarray] = useState([])
  const [edited,setedited] = useState(null)


  
  const inputtype1 = (e)=>{
    setinputvalue1(e.target.value)
  }
  const inputtype2 = (e)=>{
    setinputvalue2(e.target.value)
  }
  const type = ()=>{
    const newinputstyle = `${inputvalue1} ${inputvalue2}`
    if (edited !== null) {
      const updatedArray = array.map((item, index) =>
        index === edited ? newinputstyle : item
      );
      setarray(updatedArray);
      setedited(null); 
    }else{
          
    const newinput =[...array, newinputstyle]
setarray(newinput)

    }
    setinputvalue1("")
    setinputvalue2("")
  }
  const stamp = ()=>{
    setinputvalue3(!inputvalue3)
  }

  const deleted = (indexofall)=>{
    const newarr = array.filter((input,index) => index !== indexofall)
    setarray(newarr)
  }
  const edit =(index)=>{
    const [value1,value2] = array[index].split(" ")
    setinputvalue1(value1)
    setinputvalue2(value2)
    setedited(index)
  }
  
  return (
    <div className=" App">
      <Displaycounter count={count}/>
      <Increasecounter count={count} setcount={setcount}/>
     
    <div className='w-50 mx-auto px-4 shadow form-floating mb-3'>
      <input className='form-control' value={inputvalue1} onChange={inputtype1}  /><br />
      <input className='form-control' value={inputvalue2} onChange={inputtype2}  /><br />
          <button className='btn btn-primary' onClick={type}>{edited !== null ? "Save" : "Add"}</button>
    </div>
     
      
      
        <>
        { array.length == 0 ? <p>No todo at the moment</p> :
          array.map((input,index)=>(
          
            <div className=' display' key={index}>{input}
            <button onClick={()=> edit(index)}>Edit</button>
            <button onClick={()=> deleted(index)}>Delete</button>
            </div>
         
       ))
        }
      
        </>
        {/* <input type={inputvalue3 ? "text" : "password"} />
        <button onClick={stamp}>toggle</button> */}
    
    </div>
  );
}

export default App;
